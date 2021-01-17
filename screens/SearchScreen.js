import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'; 
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ShowResults from '../components/ShowResults'
const INITIALSEARCH = "Asian food"
const LOCATION = "NEW YORK"

const SearchScreen = () => {
    const [term, setTerm] = useState();
    const [results, errorMessage, searchAPI] = useResult(INITIALSEARCH,LOCATION);

    console.log(results);
    const resultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    //<>paspoas
    return <View style = {styles.View }>
        <SearchBar 
            term = {term}
            onTermChange= {setTerm}
            onTermSubmit = {() => {searchAPI(term)}}
            initialSearch= {INITIALSEARCH}
            ok = {5}
            />
           
        {errorMessage ? <Text>{errorMessage}</Text>:null}
        
        <ScrollView>
        <ShowResults  
            results = {resultsByPrice('$')} 
            title = "Cost Efficient"
          
            />
        <View style= {styles.lineStyle}/>
        <ShowResults 
            results = {resultsByPrice('$$')} 
            title = "Bit Pricer"
            
            />
        <View style= {styles.lineStyle}/>
        <ShowResults 
            results = {resultsByPrice('$$$')} 
            title = "Big Spender!"
           
            />
        </ScrollView>
    </View>;
    //</> Pour éviter d'utiliser </View> 
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: "white",
        flex : 1,
       
        
    },
    lineStyle: {
        borderBottomColor: '#F0EEEE',
        borderWidth: 0.5,
        marginLeft: 16,
        marginBottom: 6
    
    }
});

export default SearchScreen;
