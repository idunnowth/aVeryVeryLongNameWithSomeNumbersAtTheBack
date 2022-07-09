import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, tabBarIcon } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./Components/Home/Homescreen";
import FriendsNavigator from "./Components/Friends/Mainfriends";
import SearchNavigator from "./Components/Search/MainSearch";
import RecordsNavigator from "./Components/Records/MainRecords";
import ProfileNavigator from "./Components/Profile/MainProfile";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { Octicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from "@expo/vector-icons";
import * as SQLite from 'expo-sqlite';


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
          Name TEXT NOT NULL, 
          Password TEXT NOT NULL,
          Age INTEGER NOT NULL
          );`
      )
    })
  }
  
  const createTableOrganisation = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Records,
        (Id INTEGER PRIMARY KEY AUTOINCREMENT, 
          OrganisationName TEXT NOT NULL,
          Description TEXT NOT NULL,
          Target TEXT NOT NULL,
          Contact TEXT NOT NULL
          );`
      )
    })
  }
  
  const createTableEvents = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Events
        (Id INTEGER PRIMARY KEY AUTOINCREMENT, 
          OrganisationId INTEGER NOT NULL, 
          EventName TEXT NOT NULL,
          EventDetails TEXT NOT NULL,
          Role TEXT NOT NULL,
          Date REAL NOT NULL,
          NoOfPplRequired INTEGER NOT NULL
        `
      )
    })
  }
  const createTableRecords = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Records,
        (Id INTEGER PRIMARY KEY AUTOINCREMENT, 
          UsersId INTEGER NOT NULL, 
          DateOfCompletion REAL NOT NULL,
          OrganisationId INTEGER NOT NULL,
          Role TEXT NOT NULL,
          Event TEXT NOT NULL,
          NumberOfHours FLOAT NOT NULL,
          Remarks TEXT NOT NULL,
          );`
      )
    })
  }
  
  const createTablePeopleAndEvents = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS PeopleAndEvents
          PeopleId INTEGER NOT NULL,
          EventsId INTEGER NOT NULL
        `
      )
    })
  }

  const addUsers1 = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT OR IGNORE INTO Users (Name,Password,Age) VALUES (Thomas,12345678,18)
        `,
      )
    })
  }

  const addUsers2 = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT OR IGNORE INTO Users (Name,Password,Age) VALUES (Thoma,12345678,19)
        `,
      )
    })
  }

  const addUsers3 = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT OR IGNORE INTO Users (Name,Password,Age) VALUES (Thom,12345678,20)
        `,
      )
    })
  }

  // const addOrganisation1 = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       `INSERT OR IGNORE INTO Organisation (OrganisationName,Description,) VALUES (Thom,12345678,20)
  //       `,
  //     )
  //   })
  // }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "royalblue",
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "#584AF9",
            },
            tabBarLabel:() => {return null},
            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome name="home" size={24} color="black" />
              </View>
            ),

            // tabBarStyle: { backgroundColor: '#009999' },
          }}
        />

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

        <Tab.Screen
          name="Explore"
          component={SearchNavigator}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "royalblue",
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "#584AF9",
            },
            tabBarLabel:() => {return null},

            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome name="search" size={24} color="black" />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Organisations"
          component={RecordsNavigator}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "royalblue",
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "#584AF9",
            },
            tabBarLabel:() => {return null},

            tabBarIcon: ({ focused }) => (
              <View>
                <Octicons name="organization" size={24} color="black" />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "royalblue",
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "#584AF9",
            },
            tabBarLabel:() => {return null},

            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("./assets/Group.svg")}
                />
              </View>
            ),
          }}
        />
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
