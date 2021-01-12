import React, { useEffect,useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import useResultDetail from '../hooks/useResultDetail';
//import useResultDetail from '../hooks/useResultDetail';
import yelp from '../api/yelp';

const ResultDetailsScreen = ({navigation}) => {
   
    const id = navigation.getParam('id');
    const [results, error, getResult] = useResultDetail(id);
    //const [results, setResults] = useState([]);
    //const [errorMessage,setErrorMessage] = useState('');
    console.log(`[[${results.name}]]]`)
    return <View>
    <Text> ResultDetailsScreen id :{id} {results.name}</Text></View>
    ;
};

const styles = StyleSheet.create({

});

export default ResultDetailsScreen;
