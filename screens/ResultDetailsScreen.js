import React, { useEffect,useState } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import useResultDetail from '../hooks/useResultDetail';
//import useResultDetail from '../hooks/useResultDetail';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultDetailsScreen = ({navigation}) => {
   
    const id = navigation.getParam('id');
    const [results, error, getResult] = useResultDetail(id);
    //const [results, setResults] = useState([]);
    //const [errorMessage,setErrorMessage] = useState('');
    //const address = results.location.display_address;
    console.log(`[[${results.name}]]]`)
    return <View style = {styles.container}>
        <FlatList 
             showsHorizontalScrollIndicator = {false}
             horizontal
             keyExtractor = {(results) => results.photos}
             data = {results.photos}
             renderItem = {({item})=>{
                 return  <Image 
                     source={{uri: item}}
                    style = {styles.imageStyle}
                /> }}
        />
        <Text style = {styles.title}> {results.name} </Text>
        <Text>{results.rating} starts</Text>
        
    </View>;
    ;
};

const styles = StyleSheet.create({
    container: {
        

        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 500,
        height: 320,
    },
});

export default ResultDetailsScreen;
