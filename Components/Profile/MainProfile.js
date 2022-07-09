import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase({
  name: 'MainDB',
  location:'default',
},
() => {},
error => {console.log(error)}
);
export default function ProfileNavigator() {
  return <ProfileScreen />;
}

function ProfileScreen() {
    
  const name = "John Doe";
  const tagline = "Lorem ipsum ipsum lorem lorem ipsum Lorem ipsum ipsum lorem lorem ipsum";
  const record = {
    org: "ACRES",
    role: "entertainer",
    contribution: "8 hours",
    date: "1 Jan 2022",
  };
  const records = [record];
  return (
    <View style={styles.container}>
      <View style={[styles.secondaryContainer, styles.headerContainer]}>
        <View>
          <Image
            //source={props.picLink}
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              overflow: "hidden",
              borderWidth: 3,
              borderColor: "red",
              marginRight: 10,
              marginVertical: "auto",
              //alignContent: "flex-start",
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 700 }}>{name}</Text>
          <Text >{tagline}</Text>
        </View>
        {/* up to you to insert a line */}
        
      </View>
      <View></View>
      <View style ={[styles.secondaryContainer] }>
        {records.length === 0 ? (
          <Text>Volunteer at Events to get a record</Text>
        ) : (
          records.map((reconrd) => {
            return (
              <UpcomingActivitiesCard2
                org={record.org}
                contribution={record.contribution}
                date={record.date}
                role={record.role}
              />
            );
          })
        )}
      </View>
    </View>
  );
}

function UpcomingActivitiesCard2(props) {
  return (
    <View>
      <View style={styles.card}>
        <Image
          //source={props.picLink}
          source={require("../../assets/acres_logo.png")}
          style={{
            width: 50,
            height: 50,
            //borderRadius: "50%",
            //overflow: "hidden",
            resizeMode: "contain",
            //borderWidth: 3,
            borderColor: "red",
            marginRight: 10,
            marginVertical: "auto",
            //alignContent: "flex-start",
          }}
        />
        <View style={styles.cardTextContainer}>
          <Text style={{ fontWeight: 600 }}>{props.org}</Text>
          <Text>Role: {props.role}</Text>
          <Text>Contribution: {props.contribution}</Text>
          <Text>Date: {props.date}</Text>
        </View>
        {/* <View style={styles.cardButtonContainer}></View> */}
        {/* <Text>I am here!</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: 'center',
    //margin : "20 0 0 0",
    paddingTop: 20,
    paddingbottom: 20,
  },
  secondaryContainer: {
    width: "85%",
    marginTop: 30,

    //maringBottom: 10,
    //padding: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent:"space-around",
  },
  welcomeText: {
    textAlign: "center",
    fontWeight: "800",
    font: 30,
  },
  titleText2: {
    textAlign: "left",
    fontWeight: "500",
  },
  cardContainer: {
    marginTop: 15,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fcfcfc",
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: "#efefef",
    shadowOffset: 2,
    shadowOpacity: 0.7,
    padding: 3,
    paddingHorizontal: "auto",
    height: 100,
    borderColor: "blue",
    //alignContent: "center",
  },
  cardTextContainer: {
    width: "60%",
    marginVertical: "auto",
  },
  cardButtonContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "25%",
    marginVertical: "auto",
    marginHorizontal: 5,
    //backgroundColor: "#498feb",
    backgroundColor: "#fefefe",
    paddingHorizontal: "auto",
    borderRadius: 3,
    fontWeight: 900,
    paddingVertical: 5,
  },
  cardButtonText: {
    color: "#52BAEB",
    fontsize: 14,
  },
});
