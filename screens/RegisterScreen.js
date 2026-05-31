import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import styles from "./Appstyles";

const API_BASE = "http://localhost:8000/api/v1/";

export default function RegisterScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const register = async () => {
		try {
			const response = await fetch(`${API_BASE}auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.message || "Registration failed");
				return;
			}

			setEmail("");
			setPassword("");
			setError(null);

			navigation.navigate("Login");
		} catch (error) {
			setError(error.message || "Registration failed");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.screenContent}>
				<Text style={styles.logo}>MovieVault</Text>
				<Text style={styles.title}>Register</Text>

				<View style={styles.card}>
					<TextInput
						style={styles.input}
						placeholder="Email"
						placeholderTextColor="#9c8cad"
						value={email}
						onChangeText={setEmail}
						autoCapitalize="none"
						keyboardType="email-address"
					/>

					<TextInput
						style={styles.input}
						placeholder="Password"
						placeholderTextColor="#9c8cad"
						value={password}
						onChangeText={setPassword}
						secureTextEntry
					/>

					{error && <Text style={styles.error}>{error}</Text>}

					<Pressable
						style={styles.button}
						onPress={register}
					>
						<Text style={styles.buttonText}>Register</Text>
					</Pressable>

					<Pressable
						onPress={() => navigation.navigate("Login")}
					>
						<Text style={styles.linkText}>
							Already have an account? Login
						</Text>
					</Pressable>
				</View>
			</View>

			<Text style={styles.footer}>
				Built by Stephanie Olivares | SOLINYC LLC
			</Text>
		</View>
	);
}