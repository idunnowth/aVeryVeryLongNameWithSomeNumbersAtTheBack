import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./Components/Home/Homescreen";
import FriendsNavigator from "./Components/Friends/Mainfriends";
import SearchNavigator from "./Components/Search/MainSearch"; 
import RecordsNavigator from "./Components/Records/MainRecords";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import * as SQLite from 'expo-sqlite';
import { useEffect } from "react";
import RecordsNavigator from "./Components/Records/MainRecords";
import { Octicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 

const db = SQLite.openDatabase({
  name: 'MainDB',
  location:'default',
},
() => {},
error => {console.log(error)}
);

//const db = SQLite.openDatabase("db.db");







const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() =>{
    createTableUsers();
    createTableOrganisation();
    createTableRecords();
    createTableEvents();
    createTablePeopleAndEvents();
  },[]);

  const createTableUsers = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Users
        (Id INTEGER PRIMARY KEY AUTOINCREMENT, 
          Name TEXT, 
          Password TEXT,
          Age INTEGER
          );`
      )
    })
  }
  
  const createTableOrganisation = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Records,
        (Id INTEGER PRIMARY KEY AUTOINCREMENT, 
          OrganisationName TEXT,
          Description TEXT,
          Target TEXT,
          Contact TEXT
          );`
      )
    })
  }
  
  const createTableEvents = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Events
        (Id INTEGER PRIMARY KEY AUTOINCREMENT, 
          OrganisationId INTEGER,
          EventName TEXT,
          EventDetails TEXT,
          Role TEXT,
          Date REAL,
          NoOfPplRequired INTEGER
        `
      )
    })
  }
  const createTableRecords = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Records,
        (Id INTEGER PRIMARY KEY AUTOINCREMENT, 
          UsersId INTEGER, 
          DateOfCompletion REAL,
          OrganisationId INTEGER,
          Role TEXT,
          Event TEXT,
          NumberOfHours FLOAT,
          Remarks TEXT,
          );`
      )
    })
  }
  
  const createTablePeopleAndEvents = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS PeopleAndEvents
          PeopleId INTEGER,
          EventsId INTEGER
        `
      )
    })
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Home" component={HomeNavigator} 
        options={{
          headerTitleAlign: "center",
          headerTintColor: 'royalblue',
          headerTitleStyle: {
            color: "#fff"
          },
          headerStyle:{
            backgroundColor: "#584AF9",
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="home" size={24} color="black" />
            </View>
          ),

          // tabBarStyle: { backgroundColor: '#009999' },
        }}/>




        {/* <Tab.Screen name="Friends" component={FriendsNavigator} 
        options={{
          headerTitleAlign: "center",
          headerTintColor: 'royalblue',
          headerTitleStyle: {
            color: "#fff"
          },
          headerStyle:{
            backgroundColor: "#584AF9",
          },
          
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5 name="user-friends" size={20} color="black" />
            </View>
          ),
        }}/> */}

      <Tab.Screen name="Explore" component={SearchNavigator} 
        options={{
          headerTitleAlign: "center",
          headerTintColor: 'royalblue',
          headerTitleStyle: {
            color: "#fff"
          },
          headerStyle:{
            backgroundColor: "#584AF9",
          },
          
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="search" size={24} color="black" />
            </View>
          ),
        }}/>


<Tab.Screen name="Organisations" component={RecordsNavigator} 
        options={{
          headerTitleAlign: "center",
          headerTintColor: 'royalblue',
          headerTitleStyle: {
            color: "#fff"
          },
          headerStyle:{
            backgroundColor: "#584AF9",
          },
          
          tabBarIcon: ({ focused }) => (
            <View>
              <Octicons name="organization" size={24} color="black" />
            </View>
          ),
        }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
