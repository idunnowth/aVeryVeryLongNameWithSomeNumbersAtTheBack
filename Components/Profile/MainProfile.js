import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react';



export default function ProfileNavigator(){
    return(
            <Mainfriends/>
    );
}

function ProfileScreen(){
    return(
        <View>
            <Text>Profile</Text>
        </View>

    );
}