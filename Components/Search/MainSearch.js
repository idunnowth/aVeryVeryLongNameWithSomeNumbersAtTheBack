import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
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
export default function SearchNavigator() {
  return <SearchScreen />;
}

function SearchScreen1() {
  return (
    <View>
      <Text>Hello is this working?</Text>
      {/* <Homescreen1 /> */}
    </View>
  );
}

function SearchScreen() {
  const [text, onChangeText] = useState("");
  const name = "John Doe";
  const UpcomingActivities = [{ org: "ACRES", role: "Animal Caretaker" }];
  //const UpcomingActivities = [];
  const NewActivities = ["Money washing", "Money drying"];
  //const NewActivities = [];

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.welcomeText}>Hi, {name}!</Text>
      </View> */}
      <View>
        {/* <Text>Search</Text> */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.secondaryContainer}>
        {/* <Text style={styles.titleText2}>Upcoming Activities</Text> */}
        <View style={styles.cardContainer}>
          {/* <Text>{UpcomingActivities.length}</Text> */}
          {UpcomingActivities.length === 0 ? (
            <Text>There are no upcoming activites</Text>
          ) : (
            UpcomingActivities.map((activity) => {
              return (
                <UpcomingActivitiesCard2
                  eventname={activity.role}
                  org={activity.org}
                />
              );
            })
          )}
          {/* <UpcomingActivitiesCard eventname = "hello" />   */}
        </View>
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
          <Text>{props.eventname}</Text>
        </View>
        <View style={styles.cardButtonContainer}>
          <View>
            <TouchableOpacity>
              <Text style={styles.cardButtonText}>Register</Text>
              {/* <Text style={styles.cardButtonText}>More</Text> */}
            </TouchableOpacity>
          </View>
        </View>
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
    justifyContent: "space-between",
    backgroundColor: "#fcfcfc",
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: "#efefef",
    shadowOffset: 2,
    shadowOpacity: 0.7,
    padding: 3,
    height: 70,
    //alignContent: "center",
  },
  cardTextContainer: {
    width: "45%",
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
