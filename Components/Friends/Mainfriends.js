import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function FriendsNavigator() {
  return <Mainfriends />;
}
const friend1 = {
  name: "Johnnny Dough",
  lastMessage: "See You Next Week",
  timeStamp: "2wk",
  picLink: "./../assets/innocent_cat.jpg",
};

const friend2 = {
  name: "Johnnie Dough",
  lastMessage: "See You Next Week",
  timeStamp: "2wk",
  picLink: "../../assets/innocent_cat.jpg",
};

const friend3 = {
  name: "Joenie Dough",
  lastMessage: "See You Next Week",
  timeStamp: "2wk",
  picLink: "../../assets/innocent_cat.jpg",
};
const friends = [friend1, friend2, friend3];
function Mainfriends() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Search</Text>
      </View>
      <View style={styles.secondaryContainer}>
        {friends.length === 0 ? (
          <Text>There are no new activities at the moment</Text>
        ) : (
          friends.map((friend) => {
            return (
              <FriendCard
                name={friend.name}
                lastMessage={friend.lastMessage}
                timeStamp={friend.timeStamp}
                picLink={friend.picLink}
              />
            );
          })
        )}
      </View>
    </View>
  );
}

function FriendCard(props) {
  return (
    <View style={styles.card}>
      {/* <View>
        <Image />
      </View> */}
      <View>
        <Image
          //source={props.picLink}
          source={require("../../assets/innocent_cat.jpg")}
          style={{
            width: 50,
            height: 50,
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
      <View style={styles.cardTextContainer}>
        <Text style ={{fontWeight: "700",}}>{props.name}</Text>
        <View>
          <Text>{props.lastMessage}</Text>
          <Text>{props.timeStamp}</Text>
        </View>
      </View>
      <View style={styles.cardIconContainer}>
        <MaterialCommunityIcons name="send" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    padding: 5,
  },
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderRadius: 5,
    shadowColor: "#efefef",
    shadowOffset: 2,
    shadowOpacity: 0.7,
    padding: 3,
    height: 70,
  },
  cardTextContainer: {
    width: "60%",
  },
  cardIconContainer: {
    // alignItems: "center",
    marginVertical: "auto",
  },
});
