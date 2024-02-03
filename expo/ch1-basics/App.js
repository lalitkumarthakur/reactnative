import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<Text> This is my first React Native AMobile App!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#15E77B",
		color: "white",
		alignItems: "center",
		justifyContent: "center",
	},
});
