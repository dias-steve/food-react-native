import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'; 
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ShowResults from '../components/ShowResults'
const INITIALSEARCH = "Asian food"

const SearchScreen = () => {
    const [term, setTerm] = useState();
    const [results, errorMessage, searchAPI] = useResult(INITIALSEARCH);

    console.log(results);
    const resultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return <View style = {styles.View }>
        <SearchBar 
            term = {term}
            onTermChange= {setTerm}
            onTermSubmit = {() => {searchAPI(term)}}
            initialSearch= {INITIALSEARCH}
            />
        {errorMessage ? <Text>{errorMessage}</Text>:null}
        <Text> We have found {results.length} results</Text>
        <ScrollView>
        <ShowResults  results = {resultsByPrice('$')} title = "Cost Efficient"/>
        <ShowResults results = {resultsByPrice('$$')} title = "Bit Pricer"/>
        <ShowResults results = {resultsByPrice('$$$')} title = "Big Spender!"/>
        </ScrollView>
    </View>;
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: "white",
        ...StyleSheet.absoluteFillObject
        
    }
});

export default SearchScreen;
