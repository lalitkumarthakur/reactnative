// In this example we will create component and import in this App.js for ch1

// import { StatusBar } from "expo-status-bar"; // status bar of androi os
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/card/card";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hellow World !</Text>
			<Card />
		</View>
	);
}

// css for react native app
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
