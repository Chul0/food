import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "./components/ResultsList";

const SearchScreen = (searchTerm) => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<View style={{ flex: 1 }}>
			{/* Only use the screen that's available  */}
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length}</Text>
			<ScrollView>
				{/* Good practice to add scroll view so smaller device user can see too */}
				<ResultsList
					results={filterResultsByPrice("$")}
					title="Cost Effective"
				/>
				<ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
				<ResultsList
					results={filterResultsByPrice("$$$")}
					title="Big Spender"
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
