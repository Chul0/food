import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; //this is how to import vector-icons lib

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} /> 
        {/* How to add vector-icons */}
      <TextInput 
        style={styles.inputStyle} 
        placeholder='Search' />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#E5E1E1',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center', //to position Search icon to the center
        marginHorizontal: 15
    }
});

export default SearchBar;
