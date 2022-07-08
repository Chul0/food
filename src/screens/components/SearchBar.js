import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; //this is how to import vector-icons lib

const SearchBar = () => {
  return (
    <View style={styles.background}>
        <Feather name="search" size={30} /> 
        {/* How to add vector-icons */}
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
});

export default SearchBar;
