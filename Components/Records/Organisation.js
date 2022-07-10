//import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import * as SQLite from "expo-sqlite";
import { createStackNavigator } from "@react-navigation/stack";
import RecordsNavigator from "./MainRecords";

const Stack = createStackNavigator();

export default function OragnisationScreen() {
  const name = "ACRES";
  const tagline =
    "A world where animals are treated with compassion and respect.";
  const whoAreWe =
    "ACRES is an animal protection organisation, driven by our concern for animals. We adopt research projects on the use of animals in various fields. Research findings are then used to educate the public to promote active community involvement in the animal protection movement, as well as strive towards synergistic partnerships with authorities and related parties.    We strongly believe in promoting community involvement in addressing animal protection issues and in building partnerships with all related bodies to improve animal welfare.";
  const weNeed = "Old Newspapers \nTrash Bags \nStamps";
  return (
    <ScrollView>
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
            <Text>{tagline}</Text>
          </View>
          {/* up to you to insert a line */}
        </View>
        <View style={styles.secondaryContainer}>
          <View style={styles.horizontalBar}></View>
          <View>
            <Text>Who are we?</Text>
            <View style={styles.space}></View>
            <Text>{whoAreWe}</Text>
          </View>
          <View style={styles.horizontalBar}></View>
          <View>
            <Text>Items Needed:</Text>
            <View style={styles.space}></View>
            <Text>{weNeed}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Contact Us!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  horizontalBar: {
    width: "100%",
    height: 7,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  space: {
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: "43%",
    backgroundColor: "blue",
    borderRadius: 35,
    marginHorizontal: "auto",
    alignContent: "center",
    marginTop: 60,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    marginVertical: "auto",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
