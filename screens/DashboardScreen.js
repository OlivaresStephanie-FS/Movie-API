import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
	View,
	Text,
	TextInput,
	Pressable,
	FlatList,
	ActivityIndicator,
} from "react-native";
import styles from "./Appstyles";

const API_BASE =
	"https://movies-api-dwa-assignment-1b9df33548df.herokuapp.com/api/v1/";

export default function DashboardScreen({ navigation }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState("");
	const [rating, setRating] = useState("");

	const getMovies = async () => {
		setLoading(true);

		try {
			const response = await fetch(`${API_BASE}movies`);
			const data = await response.json();
			console.log(data);
			setMovies(data);
		} catch (error) {
			setError(error.message || "Failed to fetch movies");
		} finally {
			setLoading(false);
		}
	};

	const addMovie = async () => {
		try {
			const response = await fetch(`${API_BASE}movies`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title,
					genre,
					rating,
				}),
			});

			const newMovie = await response.json();
			console.log(newMovie);

			setMovies((currentMovies) => [newMovie, ...currentMovies]);

			setTitle("");
			setGenre("");
			setRating("");
		} catch (error) {
			setError(error.message || "Failed to add movie");
		}
	};

	useFocusEffect(
		useCallback(() => {
			getMovies();
		}, []),
	);

	return (
		<View style={styles.container}>
			<View style={styles.screenContent}>
				<Text style={styles.logo}>MovieVault</Text>
				<Text style={styles.title}>Movie Dashboard</Text>

				<View style={styles.card}>
					<TextInput
						style={styles.input}
						placeholder="Movie title"
						placeholderTextColor="#9c8cad"
						value={title}
						onChangeText={setTitle}
					/>

					<TextInput
						style={styles.input}
						placeholder="Genre"
						placeholderTextColor="#9c8cad"
						value={genre}
						onChangeText={setGenre}
					/>

					<TextInput
						style={styles.input}
						placeholder="Rating"
						placeholderTextColor="#9c8cad"
						value={rating}
						onChangeText={setRating}
					/>

					<Pressable style={styles.button} onPress={addMovie}>
						<Text style={styles.buttonText}>Add Movie</Text>
					</Pressable>
				</View>

				{loading && <ActivityIndicator color="#ffffff" />}

				{error && <Text style={styles.error}>{error}</Text>}

				<FlatList
					data={movies}
					keyExtractor={(item) => item._id}
					ListEmptyComponent={
						<Text style={styles.emptyText}>
							No movies added yet.
						</Text>
					}
					renderItem={({ item }) => (
						<Pressable
							style={styles.movieCard}
							onPress={() =>
								navigation.navigate("Movie", {
									movieId: item._id,
								})
							}>
							<Text style={styles.movieTitle}>{item.title}</Text>
							<Text style={styles.movieText}>{item.genre}</Text>
							<Text style={styles.movieText}>
								Rating: {item.rating}
							</Text>
						</Pressable>
					)}
				/>
			</View>

			<Text style={styles.footer}>
				Built by Stephanie Olivares | SOLINYC LLC
			</Text>
		</View>
	);
}
