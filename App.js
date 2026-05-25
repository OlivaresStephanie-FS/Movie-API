import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DashboardScreen from "./screens/DashboardScreen";
import MovieScreen from "./screens/MovieScreen";



const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#12061f",
					},
					headerTintColor: "#ffffff",
					contentStyle: {
						backgroundColor: "#1b102b",
					},
				}}
			>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>

				<Stack.Screen
					name="Dashboard"
					component={DashboardScreen}
				/>

				<Stack.Screen
					name="Movie"
					component={MovieScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}