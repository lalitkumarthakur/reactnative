import React, { useState, useCallback } from "react";
import {
	ScrollView,
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
import { CalculatorIcon, MapPinIcon } from "react-native-heroicons/solid";
import { debounce } from "lodash";
import { fetchLocations } from "../apis/Weather";



export default function HomeScreen() {
	const [showSearch, toggleSearch] = useState(false);
	const [locations, setLocations] = useState([]);

	const handleLocation = (loc) => {
		console.log("location", loc);
	};

	const handleSearch = value => {
		//fetch locations
		if ((value.lenght > 2)) {
			fetchLocations({ cityName: value }).then(data => {
				console.log("got location:", data);
			})
		}
	}
	const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
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
							borderRadius: 12,
							margin: 18,
							backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
						}}>
						{showSearch ? (
							<TextInput
								onChangeText={handleTextDebounce}
								placeholder="Search city"
								placeholderTextColor={"lightgray"}
								style={{
									display: showSearch ? "flex" : "none", // Show or hide based on showSearch state
									paddingLeft: 24,
									height: 20,
									flex: 1,
									borderRadius: 12,
									fontSize: 17,
									color: "black",
								}}
							/>
						) : null}
						<TouchableOpacity
							onPress={() => toggleSearch(!showSearch)}
							style={{
								backgroundColor: theme.bgWhite(0.5),
								borderRadius: 12,
								padding: 12,
								margin: 8,
							}}>
							<MagnifyingGlassIcon size={24} color="white" />
						</TouchableOpacity>
					</View>
					{locations.length > 0 && showSearch ? (
						<View
							style={{
								position: "absolute",
								width: "91%",
								backgroundColor: "rgba(133, 133, 133, 0.4)",
								top: 100,
								borderRadius: 12,
								left: 18,
								padding: 5,
								color: "black",
							}}>
							{locations.map((loc, index) => {
								return (
									<TouchableOpacity
										onPress={() => handleLocation(loc)}
										key={index}
										style={{
											flexDirection: "row",
											alignItems: "center",
											border: 0,
											// borderBottomWidth: 2,
											// borderColor: "rgba(225,225,300, 0.1)",
											padding: 3,
											marginBottom: 15,
											top: 4,
										}}>
										<MapPinIcon size={20} color="grey" />
										<Text
											style={{ marginLeft: 8, color: "white", fontSize: 19 }}>
											London, United Kingdom
										</Text>
									</TouchableOpacity>
								);
							})}
						</View>
					) : null}
				</View>

				{/* Forecast Section */}
				<View
					style={{
						marginTop: 100,
						marginLeft: 16,
						marginRight: 16,
						marginBottom: 0,
						display: "flex",
						flex: 1,
						justifyContent: "flex-start",
					}}>
					{/* location */}
					<Text
						style={{
							color: "white",
							textAlign: "center", // Center text
							fontSize: 28,
							fontWeight: "bold",
						}}>
						London,{" "}
						<Text
							style={{
								fontSize: 24,
								fontWeight: "600",
								color: "rgba(225,225,300, 0.6)",
							}}>
							United Kingdom
						</Text>
					</Text>

					{/* Weather Image */}
					<View
						style={{
							marginTop: 40,
							marginBottom: 0,
							flexDirection: "row",
							justifyContent: "center",
						}}>
						<Image
							source={require("../../assets/icons/theme1-3d/WeatherIcon-1-39.png")}
							style={{ width: 110, height: 90 }}
						/>
					</View>
					{/* Degree Celsius */}
					<View style={{ marginBottom: 5, alignItems: "center" }}>
						{/* Center text */}
						<Text
							style={{
								fontWeight: "bold",
								textAlign: "center",
								color: "white",
								fontSize: 90,
								marginLeft: 30,
								justifyContent: "center",
								display: "flex",
							}}>
							23&#176;
						</Text>
						<Text
							style={{
								fontWeight: "bold",
								color: "white",
								fontSize: 17,
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

					{/* forecast for next days */}
					<View style={{ marginBottom: 2, marginTop: 15 }}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								margin: (0, 14, 0, 14),
							}}>
							<CalculatorIcon size="22" color="white" />
							<Text style={{ color: "white", fontSize: 16 }}>
								{" "}
								Daily forecast
							</Text>
						</View>
						<ScrollView
							horizontal
							cpntentContainerStyle={{ paddingHorizontal: 15 }}
							showsHorizontalScrollIndicator={false}>
							<View
								style={{
									backgroundColor: theme.bgWhite(0.15),
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: 110,
									height: 145,
									borderRadius: 12,
									marginHorizontal: 5,
								}}>
								<Image
									source={require("../../assets/icons/theme1-3d/WeatherIcon-1-52.png")}
									style={{ height: 40, width: 40, marginBottom: 5 }}
								/>
								<Text style={{ color: "white" }}>Monday</Text>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
									13&#176;
								</Text>
							</View>
							<View
								style={{
									backgroundColor: theme.bgWhite(0.15),
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: 110,
									height: 145,
									borderRadius: 12,
									marginHorizontal: 5,
								}}>
								<Image
									source={require("../../assets/icons/theme1-3d/WeatherIcon-1-52.png")}
									style={{ height: 40, width: 40, marginBottom: 5 }}
								/>
								<Text style={{ color: "white" }}>Tuesday</Text>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
									12&#176;
								</Text>
							</View>
							<View
								style={{
									backgroundColor: theme.bgWhite(0.15),
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: 110,
									height: 145,
									borderRadius: 12,
									marginHorizontal: 5,
								}}>
								<Image
									source={require("../../assets/icons/theme1-3d/WeatherIcon-1-52.png")}
									style={{ height: 40, width: 40, marginBottom: 5 }}
								/>
								<Text style={{ color: "white" }}>Wednesday</Text>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
									0&#176;
								</Text>
							</View>
							<View
								style={{
									backgroundColor: theme.bgWhite(0.15),
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: 110,
									height: 145,
									borderRadius: 12,
									marginHorizontal: 5,
								}}>
								<Image
									source={require("../../assets/icons/theme1-3d/WeatherIcon-1-52.png")}
									style={{ height: 40, width: 40, marginBottom: 5 }}
								/>
								<Text style={{ color: "white" }}>Thursday</Text>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
									26&#176;
								</Text>
							</View>
							<View
								style={{
									backgroundColor: theme.bgWhite(0.15),
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: 110,
									height: 145,
									borderRadius: 12,
									marginHorizontal: 5,
								}}>
								<Image
									source={require("../../assets/icons/theme1-3d/WeatherIcon-1-52.png")}
									style={{ height: 40, width: 40, marginBottom: 5 }}
								/>
								<Text style={{ color: "white" }}>Friday</Text>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
									18&#176;
								</Text>
							</View>
							<View
								style={{
									backgroundColor: theme.bgWhite(0.15),
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: 110,
									height: 145,
									borderRadius: 12,
									marginHorizontal: 5,
								}}>
								<Image
									source={require("../../assets/icons/theme1-3d/WeatherIcon-1-52.png")}
									style={{ height: 40, width: 40, marginBottom: 5 }}
								/>
								<Text style={{ color: "white" }}>Saturday</Text>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
									11&#176;
								</Text>
							</View>
							<View
								style={{
									backgroundColor: theme.bgWhite(0.15),
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: 110,
									height: 145,
									borderRadius: 12,
									marginHorizontal: 5,
								}}>
								<Image
									source={require("../../assets/icons/theme1-3d/WeatherIcon-1-52.png")}
									style={{ height: 40, width: 40, marginBottom: 5 }}
								/>
								<Text style={{ color: "white" }}>Sunday</Text>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
									3&#176;
								</Text>
							</View>
						</ScrollView>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}
