import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ShowResult = ({title}) => {
    return <View>
        <Text style = {styles.titleStyle}>{title}</Text>
    </View>;
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ShowResult;