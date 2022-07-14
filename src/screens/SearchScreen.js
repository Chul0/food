import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "../api/yelp";
//import api env here

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]); //if you look at the yelp api doc, the response body will is in an array, hence useState should be [] array.

	const searchApi = async () => {
		const response = await yelp.get("/search", {
			params: {
				//if you add params it will automatically add to the end of the params like .. e.g., '/search?limit=50'
				limit: 50,
				term, //es15 syntax same as term:term
				location: "san jose",
			},
		});
		setResults(response.data.businesses);
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={searchApi} //passing a reference that should be invoked
			/>
			<Text>Search Screen</Text>
			<Text>We have found {results.length}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
