import { StyleSheet, View, Text } from "react-native";

const card = () => {
	return (
		<View style={styles.container}>
			<Text> This is a Card</Text>
		</View>
	);
};

// css for react native app
const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		border: "2px solid black",
		marginTop: "12px !important",
		height: "3rem",
		width: "10rem",
		padding: "20px 30px",
		fontSize: "18px",
	},
});

export default card;
