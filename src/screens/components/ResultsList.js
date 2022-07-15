import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal //same as horizontal={true} //by default, it renders vertically
				data={results}
				keyExtractor={(result) => result.id} //it will map through whatever you pass in 'data' prop. 'results' in this case
				renderItem={({ item }) => {
					//it has two properties:index, item. basically item is an object of 'results'
					return <Text>{item.name}</Text>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default ResultsList;
