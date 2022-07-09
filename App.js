import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./Components/Home/Homescreen";
import FriendsNavigator from "./Components/Friends/Mainfriends";
import SearchNavigator from "./Components/Search/MainSearch"; 
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
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
        <Tab.Screen name="Friends" component={FriendsNavigator} 
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
        }}/>

      <Tab.Screen name="Search" component={SearchNavigator} 
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
