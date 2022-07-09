import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react';



export default function RecordsNavigator(){
    return(
            <Mainfriends/>
    );
}

function RecordsScreen(){
    return(
        <View>
            <Text>Records</Text>
        </View>

    );
}