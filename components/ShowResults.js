import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ShowResult = ({title, results}) => {

    return <View>
        <Text style = {styles.titleStyle}> {title} </Text>
        <Text> {results.length}</Text>
    </View>; 
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ShowResult;