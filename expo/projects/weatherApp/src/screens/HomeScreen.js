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
		<View style={{ flex: 1, position: "relative" }}>
			<StatusBar style="light" />
			<Image
				blurRadius={10}
				source={require("../../assets/img/bro-takes-photos-nd9s9CPxnGc-unsplash.jpg")}
				style={{ flex: 1, position: "absolute" }}
			/>

			<SafeAreaView style={{ display: "flex", flex: 1 }}>
				{/* Search section */}
				<View
					style={{
						height: "7%",
						marginLeft: "16px",
						marginRight: "16px",
						position: "relative",
						zIndex: 50,
					}}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
							borderRadius: "9999px",
							// margin: 18,
							backgroundColor: theme.bgWhite(0.2),
						}}>
						{showSearch ? (
							<TextInput
								placeholder="Search city"
								placeholderTextColor={"lightgray"}
								style={{
									paddingLeft: "24px",
									height: 10,
									flex: 1,
									// backgroundColor: "rgba(255, 255, 255, 0.2)",
									borderRadius: 12,
									fontSize: "16px",
									lineHeight: "28px",
									color: "white",
									// marginRight: 10,
								}}
							/>
						) : null}
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
									onPress={() => handleLocation(loc)}
									key={index}
									style={{
										flexDirection: "row",
										alignItems: "center",
										border: 0,
										padding: 8,
										marginBottom: 10,
										top: 4,
										borderRadius: 10,
										opacity: 0.8,
									}}>
									<MapPinIcon size={20} color="grey" />
									<Text
										style={{ marginLeft: 10, color: "white", fontSize: 18 }}>
										London, United Kingdom
									</Text>
								</TouchableOpacity>
							))}
						</View>
					)}
				</View>

				{/* Forecast Section */}
				<View
					style={{
						position: "absolute",
						bottom: "28%", // Adjusted to 10%
						left: "12%",
						bottom: "12%",
						alignItems: "center", // Align items to center
					}}>
					<View>
						<Text
							style={{
								color: "white",
								fontSize: 32,
								textAlign: "center", // Center text
							}}>
							London,{"  "}
							<Text
								style={{
									fontSize: 25,
									fontWeight: "500",
									color: "grey",
								}}>
								United Kingdom
							</Text>
						</Text>

						{/* Weather Image */}
						<View style={{ alignItems: "center", marginTop: 40 }}>
							{/* Adjusted marginTop */}
							<Image
								source={require("../../assets/icons/theme1-3d/WeatherIcon - 1-39.png")}
								style={{ width: 150, height: 110 }}
							/>
							{/* Degree Celsius */}
							<View style={{ marginBottom: 5, alignItems: "center" }}>
								{/* Center text */}
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										fontSize: 65,
									}}>
									23°C
								</Text>
								<Text
									style={{
										fontWeight: "bold",
										color: "white",
										fontSize: 18,
										marginBottom: 35,
									}}>
									Partly Cloudy
								</Text>
							</View>

							{/* Other Stats */}
							<View
								style={{
									marginHorizontal: 20,
									flexDirection: "row",
									justifyContent: "space-between",
								}}>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Image
										source={require("../../assets/icons/theme1-3d/WeatherIcon-1-6.png")}
										style={{ width: 24, height: 24, marginRight: 8 }}
									/>
									<Text
										style={{
											color: "white",
											fontWeight: "bold",
											fontSize: 16,
										}}>
										22km
									</Text>
								</View>
								{/* Add an empty view to create space */}
								<View style={{ width: 28 }} />
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Image
										source={require("../../assets/icons/theme1-3d/WeatherIcon-1-17.png")}
										style={{ width: 20, height: 30, marginRight: 8 }}
									/>
									<Text
										style={{
											color: "white",
											fontWeight: "bold",
											fontSize: 16,
										}}>
										24%
									</Text>
								</View>
								{/* Add an empty view to create space */}
								<View style={{ width: 28 }} />
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Image
										source={require("../../assets/icons/theme1-3d/WeatherIcon-1-22.png")}
										style={{ width: 24, height: 24, marginRight: 8 }}
									/>
									<Text
										style={{
											color: "white",
											fontWeight: "bold",
											fontSize: 16,
										}}>
										6:05 AM
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}
