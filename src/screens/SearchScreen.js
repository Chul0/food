import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = (searchTerm) => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (searchTerm) => {
		try {
			//for Error handling
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose",
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			console.log(err);
			setErrorMessage("Something went wrong"); //if err occurs, print this message
		}
	};

	//Call searchApi when component is first rendered.
	//BAD CODE! because it will fire this function multiple times.
	// searchApi("pasta");

	useEffect(() => {
		searchApi("pasta"); //Run this once when this cmp is first rendered
	}, []); //re run every time this changes.

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)} //need an arrow to pass arg
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
