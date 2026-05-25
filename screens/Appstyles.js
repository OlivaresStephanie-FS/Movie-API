import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#12061f",
		paddingHorizontal: 24,
		paddingTop: 60,
	},

	screenContent: {
		flex: 1,
	},

	logo: {
		color: "#ffffff",
		fontSize: 22,
		fontWeight: "700",
		marginBottom: 24,
	},

	card: {
		backgroundColor: "#241632",
		borderRadius: 24,
		padding: 24,
		marginBottom: 24,
	},

	title: {
		color: "#ffffff",
		fontSize: 34,
		fontWeight: "700",
		marginBottom: 12,
	},

	text: {
		color: "#d8cce8",
		fontSize: 16,
		lineHeight: 24,
		marginBottom: 24,
	},

	input: {
		backgroundColor: "#1b102b",
		borderWidth: 1,
		borderColor: "#4a2a75",
		borderRadius: 14,
		paddingHorizontal: 16,
		paddingVertical: 14,
		marginBottom: 14,
		color: "#ffffff",
		fontSize: 16,
	},

	button: {
		backgroundColor: "#7c3aed",
		padding: 16,
		borderRadius: 16,
		alignItems: "center",
	},

	buttonText: {
		color: "#ffffff",
		fontSize: 16,
		fontWeight: "700",
	},

	movieCard: {
		backgroundColor: "#241632",
		borderRadius: 18,
		padding: 18,
		marginBottom: 14,
		borderWidth: 1,
		borderColor: "#38214f",
	},

	movieTitle: {
		color: "#ffffff",
		fontSize: 18,
		fontWeight: "700",
		marginBottom: 8,
	},

	movieText: {
		color: "#d8cce8",
		fontSize: 14,
		marginBottom: 4,
	},

	error: {
		color: "#ff6b6b",
		marginTop: 12,
		marginBottom: 12,
	},

	emptyText: {
		color: "#b9a9cb",
		fontSize: 16,
		textAlign: "center",
		marginTop: 40,
	},

	footer: {
		color: "rgba(255,255,255,0.5)",
		textAlign: "center",
		marginTop: 30,
		marginBottom: 20,
		fontSize: 13,
	},
});

export default styles;
