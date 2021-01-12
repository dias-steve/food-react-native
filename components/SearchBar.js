import React from 'react';
import { Text, View, StyleSheet} from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';
import{Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style = {styles.backgroundStyle}>
    <Feather name = "search" style = {styles.iconStyle}/>
    <TextInput
        autoCapitalize = "none"
        autoCorrect = {false}
        style = {styles.textInputStyle} 
        placeholder = "Asian food"
        value = {term}
        onChangeText = {onTermChange}
        onEndEditing = {onTermSubmit}
        
    />
    </View>;
}

const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor: '#F0EEEE',
        borderRadius: 50,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 15
    }, 
    textInputStyle: {
        
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize : 37,
        alignSelf: 'center',
        marginHorizontal: 12
    }
});

export default SearchBar;
