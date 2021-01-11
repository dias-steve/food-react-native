import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ShowResult = ({title, results}) => {

    return <View>
        <Text style = {styles.titleStyle}> {title} </Text>
        <Text> {results.length}</Text>
        <FlatList
            horizontal
            keyExtractor = {results => results.id}
            data = {results}
            renderItem = {({item})=>{
                return <Text> {item.name}</Text>;
            }}
        />
    </View>; 
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ShowResult;