import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			{/* How to add vector-icons */}
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				onChangeText={onTermChange}
				//same as onChange
				onEndEditing={onTermSubmit}
				//For when user hits enter button
				//We want to show search results only when user hits enter.
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 10,
		backgroundColor: "#E5E1E1",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center", //to position Search icon to the center
		marginHorizontal: 15,
	},
});

export default SearchBar;
