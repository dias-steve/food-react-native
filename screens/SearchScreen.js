import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native'; 
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';

const INITIALSEARCH = "Asian food"

const SearchScreen = () => {
    const [term, setTerm] = useState();
    const [results, errorMessage, searchAPI] = useResult();
    console.log(results)

    return <View style = {styles.View }>
        <SearchBar 
            term = {term}
            onTermChange= {setTerm}
            onTermSubmit = {() => {searchAPI(term)}}
            initialSearch= {INITIALSEARCH}
            />
        {errorMessage ? <Text>{errorMessage}</Text>:null}
        <Text> We have found {results.length} results</Text>
    </View>;
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: "white",
        ...StyleSheet.absoluteFillObject
        
    }
});

export default SearchScreen;
