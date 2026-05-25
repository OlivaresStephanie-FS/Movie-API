import { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	Pressable,
	ActivityIndicator,
} from "react-native";

import styles from "./Appstyles";

const API_BASE =
	"https://movies-api-dwa-assignment-1b9df33548df.herokuapp.com/api/v1/";

export default function MovieScreen({ route, navigation }) {
	const { movieId } = route.params;

	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState("");
	const [rating, setRating] = useState("");

	const getMovie = async () => {
		setLoading(true);

		try {
			const response = await fetch(`${API_BASE}movies/${movieId}`);
			const data = await response.json();

			setMovie(data);

			setTitle(data.title);
			setGenre(data.genre);
			setRating(data.rating);
		} catch (error) {
			setError(error.message || "Failed to fetch movie");
		} finally {
			setLoading(false);
		}
	};

	const updateMovie = async () => {
		try {
			const response = await fetch(`${API_BASE}movies/${movieId}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title,
					genre,
					rating,
				}),
			});

			const data = await response.json();
			console.log(data);

			navigation.goBack();
		} catch (error) {
			setError(error.message || "Failed to update movie");
		}
	};

	const deleteMovie = async () => {
		try {
			await fetch(`${API_BASE}movies/${movieId}`, {
				method: "DELETE",
			});

			navigation.navigate("Dashboard");
		} catch (error) {
			setError(error.message || "Failed to delete movie");
		}
	};

	useEffect(() => {
		getMovie();
	}, []);

	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator color="#ffffff" />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.screenContent}>
				<Text style={styles.title}>Movie Details</Text>

				{error && <Text style={styles.error}>{error}</Text>}

				<View style={styles.card}>
					<TextInput
						style={styles.input}
						value={title}
						onChangeText={setTitle}
						placeholder="Title"
						placeholderTextColor="#9c8cad"
					/>

					<TextInput
						style={styles.input}
						value={genre}
						onChangeText={setGenre}
						placeholder="Genre"
						placeholderTextColor="#9c8cad"
					/>

					<TextInput
						style={styles.input}
						value={rating}
						onChangeText={setRating}
						placeholder="Rating"
						placeholderTextColor="#9c8cad"
					/>

					<Pressable style={styles.button} onPress={updateMovie}>
						<Text style={styles.buttonText}>Update Movie</Text>
					</Pressable>

					<Pressable
						style={[
							styles.button,
							{ backgroundColor: "#b83250", marginTop: 12 },
						]}
						onPress={deleteMovie}>
						<Text style={styles.buttonText}>Delete Movie</Text>
					</Pressable>
				</View>
			</View>
			<Text style={styles.footer}>
				Built by Stephanie Olivares | SOLINYC LLC
			</Text>
		</View>
	);
}
