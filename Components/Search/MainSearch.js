import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useState} from 'react';



export default function SearchNavigator(){
    return(
            <SearchScreen/>
    );
}

function SearchScreen(){
    return(
        <View>
            <Text>Search</Text>
        </View>

    );
}