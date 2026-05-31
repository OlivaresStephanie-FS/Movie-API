import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import styles from "./Appstyles";

const API_BASE = "http://localhost:8000/api/v1/";

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const login = async () => {
		try {
			const response = await fetch(`${API_BASE}auth/login`, {
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
				setError(data.message || "Login failed");
				return;
			}

			setEmail("");
			setPassword("");
			setError(null);

			navigation.replace("Home", { token: data.token });
		} catch (error) {
			setError(error.message || "Login failed");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.screenContent}>
				<Text style={styles.logo}>MovieVault</Text>
				<Text style={styles.title}>Login</Text>

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

					<Pressable style={styles.button} onPress={login}>
						<Text style={styles.buttonText}>Login</Text>
					</Pressable>

					<Pressable onPress={() => navigation.navigate("Register")}>
						<Text style={styles.linkText}>
							Need an account? Register
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
