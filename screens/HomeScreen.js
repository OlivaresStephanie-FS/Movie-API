import { View, Text, Pressable } from "react-native";
import styles from "./Appstyles";

export default function HomeScreen({ route, navigation }) {
	const {token} = route.params;
	return (
		<View style={styles.container}>
			<View style={styles.screenContent}>
				<Text style={styles.logo}>MovieVault</Text>

				<View style={styles.card}>
					<Text style={styles.title}>Movie Collection</Text>

					<Text style={styles.text}>
						Manage your movie watchlist using your deployed CRUD
						API.
					</Text>

					<Pressable
						style={styles.button}
						onPress={() => navigation.navigate("Dashboard", { token })}>
						<Text style={styles.buttonText}>Open Dashboard</Text>
					</Pressable>
				</View>
			</View>

			<Text style={styles.footer}>
				Built by Stephanie Olivares | SOLINYC LLC
			</Text>
		</View>
	);
}
