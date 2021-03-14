import React from 'react'
import { View, Text, StatusBar, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { authPageStyles } from '../styles/styles';

const  AuthPage = () =>{

const savedUser = () => {
    
}

    return (
        <>
        <View style={authPageStyles.main}>
            <StatusBar barStyle="dark-content" animated={true} showHideTransition="slide" backgroundColor="#fdd400"/>
            <Text style={authPageStyles.formTitle}>What's Your Name?</Text>

            <TouchableOpacity  style={authPageStyles.btn}          
                onPress={() => {
                    Alert.alert('You tapped the Decrypt button!');
                }}>
                <Text>Continued</Text>
            </TouchableOpacity>
        </View>
</>
    )
}

export default AuthPage;
