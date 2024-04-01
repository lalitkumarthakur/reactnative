import {
	SafeAreaView,
	Text,
	View,
	Image,
	TextInput,
	Touchable,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { theme } from "../themes/index";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function HomeScreen() {
	const [showSearch, toggleSearch] = useState(false);
	const [locations, setLocations] = useState([1, 2, 3]);
	return (
		<View className="flex-1 relative">
			<StatusBar style="light" />
			<Image
				blurRadius={70}
				source={require("../../assets/img/abstract slices from left to right in blue color.jpg")}
				className="absolute h-full w-full"
			/>

			<SafeAreaView className="flex flex-1">
				{/* search section */}
				<View style={{ height: "7%" }} className="mx-4 relative z-50">
					<View
						className="flex-row justify-end items-center rounded-full"
						style={{
							backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
						}}>
						{showSearch ? (
							<TextInput
								placeholder="Search city"
								placeholderTextColor={"lightgray"}
								className="pl-6 h-10 pb-1 flex-1 text-base text-white"
							/>
						) : null}
						<TouchableOpacity
							onPress={() => toggleSearch(!showSearch)}
							style={{ backgroundColor: theme.bgWhite(0.3) }}
							className="rounded-full p-3 m-1">
							<MagnifyingGlassIcon size="25" color="white" />
						</TouchableOpacity>
					</View>
					{locations.length > 0 && showSearch ? (
						<View className="absolute w-full bg-gray-300 top-16 rounded-3x1">
							{location.map((loc, index) => {
								return (
									<TouchableOpacity key={index}>
										<Text> London, United Kindom</Text>
									</TouchableOpacity>
								);
							})}
						</View>
					) : null}
				</View>
			</SafeAreaView>
		</View>
	);
}
