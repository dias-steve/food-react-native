import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';

const ShowResult = ({title, results, navigator}) => {

    return <View style = {styles.container}>
        <Text style = {styles.titleStyle}> {title} </Text>
        <FlatList
            showsHorizontalScrollIndicator = {false}
            horizontal
            keyExtractor = {results => results.id}
            data = {results}
            renderItem = {({item})=>{
                return <TouchableOpacity onPress={()=> (navigator.navigate('DetailScreen'))}>
                    <ResultDetail result = {item}/>
                    </TouchableOpacity>;
            }}
        />
    </View>; 
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        

    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ShowResult;