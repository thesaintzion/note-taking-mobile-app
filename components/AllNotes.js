import React from 'react'
import { View, Text, StatusBar } from 'react-native';
import { allNotesStyles } from '../styles/styles';

const AllNotes = () => {
    return (
        <View style={allNotesStyles.main}>
            <StatusBar barStyle="dark-content" animated={true} showHideTransition="slide" backgroundColor="#fdd400"/>
            <Text style={allNotesStyles.title}>Notes</Text>
        </View>
    )
}

export default AllNotes;
