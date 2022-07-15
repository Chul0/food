import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = (searchTerm) => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults(); //these are going to come from calling useResults.

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
