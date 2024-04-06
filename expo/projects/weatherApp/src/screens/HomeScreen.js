import React, { useState } from "react";
import {
	StatusBar,
	SafeAreaView,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	Image,
} from "react-native";
import { theme } from "../themes/index";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
	const [showSearch, toggleSearch] = useState(true);
	const [locations, setLocations] = useState([1, 2, 3]);
	const handleLocation = (loc) => {
		console.log("location", loc);
	};

	return (
		<View style={{ flex: 1 }} className="relative">
			<StatusBar style="light" />
			<Image
				blurRadius={6}
				source={require("../../assets/img/bro-takes-photos-nd9s9CPxnGc-unsplash.jpg")}
				style={{ flex: 1 }}
			/>

			{/* Search section */}
			<View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingHorizontal: 15,
						marginTop: 40,
					}}>
					{showSearch && (
						<TextInput
							placeholder="Search city"
							placeholderTextColor="lightgray"
							style={{
								flex: 1,
								height: 54,
								backgroundColor: "rgba(255, 255, 255, 0.2)",
								borderRadius: 12,
								paddingLeft: 18,
								fontSize: 18,
								color: "white",
								marginRight: 10,
							}}
						/>
					):null
					}
					<TouchableOpacity
						onPress={() => toggleSearch(!showSearch)}
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.2)",
							borderRadius: 12,
							padding: 16,
						}}>
						<MagnifyingGlassIcon size={24} color="white" />
					</TouchableOpacity>
				</View>
				{locations.length > 0 && showSearch && (
					<View style={{ marginTop: 40, paddingHorizontal: 16 }}>
						{locations.map((loc, index) => (
							<TouchableOpacity
								key={index}
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 12,
								}}>
								<MapPinIcon size={20} color="grey" />
								<Text style={{ marginLeft: 10, color: "white", fontSize: 18 }}>
									London, United Kingdom
								</Text>
							</TouchableOpacity>
						))}
					</View>
				)}
			</View>
		</View>
	);
}
