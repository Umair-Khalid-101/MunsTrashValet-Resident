import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import Back from "../Svgs/Back";
import { AntDesign } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constans/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function GenerateRequest() {
  const navigation = useNavigation();
  const [loaded, setloaded] = useState(false);

  const loadfonts = async () => {
    await Font.loadAsync({
      CircularStd: require("../../assets/CircularStd.ttf"),
      "CircularStd-Bold": require("../../assets/CircularStd-Bold.otf"),
      Montserrat: require("../../assets/Montserrat.ttf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <View>
            <Back
              style={styles.back}
              onPress={() => navigation.navigate("TabNavigator")}
            />
          </View>
        </TouchableOpacity>
        {loaded ? <Text style={styles.text1}>Request Pickup</Text> : ""}
      </View>
      <View style={styles.greyline}></View>
      <TouchableOpacity
        style={styles.filebox}
        onPress={() => navigation.navigate("Notification")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.colorbox}>
            <AntDesign name="clockcircleo" size={24} color="white" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {loaded ? (
                <Text style={styles.text3}>9 minutes left for the pickup</Text>
              ) : (
                ""
              )}
            </View>
            {loaded ? (
              <Text style={styles.text5}>
                After that it won't be possible for us to pickup
              </Text>
            ) : (
              ""
            )}
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        {loaded ? <Text style={styles.text8}>Location</Text> : ""}
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.primary,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("EditPickupLocation")}
        >
          <MaterialIcons name="edit" size={16} color={colors.primary} />
          {loaded ? <Text style={styles.text2}>Edit</Text> : ""}
        </TouchableOpacity>
      </View>
      <View style={styles.dataview}>
        {loaded ? <Text style={styles.text7}>Property</Text> : ""}
        {loaded ? <Text style={styles.text9}>Lake Fairway</Text> : ""}
      </View>
      <View style={styles.dataview}>
        {loaded ? <Text style={styles.text7}>Apartment #</Text> : ""}
        {loaded ? <Text style={styles.text9}>267-ADK</Text> : ""}
      </View>
      <View style={styles.dataview}>
        {loaded ? <Text style={styles.text7}>City</Text> : ""}
        {loaded ? <Text style={styles.text9}>El Paso</Text> : ""}
      </View>
      <View style={styles.dataview}>
        {loaded ? <Text style={styles.text7}>State</Text> : ""}
        {loaded ? <Text style={styles.text9}>Texas</Text> : ""}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PickupRequestSent")}
      >
        {loaded ? <Text style={styles.text10}>Request Pickup</Text> : ""}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  nav: {
    display: "flex",
    marginTop: 60,
  },
  text1: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 16,
    position: "absolute",
  },
  text2: {
    fontFamily: "CircularStd",
    fontSize: 14,
    color: colors.primary,
  },
  back: {
    alignSelf: "flex-start",

    position: "absolute",

    left: 16,
  },
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 50,
  },
  greyline2: {
    width: "90%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 10,
    alignSelf: "center",
  },
  filebox: {
    display: "flex",
    width: "90%",
    height: 70,
    alignSelf: "center",
    backgroundColor: colors.lightyellow,

    borderRadius: 16,
    marginTop: 10,

    justifyContent: "center",
  },

  colorbox: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: colors.yellow,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
    marginLeft: 10,
  },
  text9: {
    fontFamily: "CircularStd",
    fontSize: 14,
    marginTop: 10,
  },

  text5: {
    fontSize: 10,
    color: colors.grey,
    fontFamily: "CircularStd",
    marginLeft: 10,
    marginTop: 2,
  },
  text7: {
    fontSize: 12,
    color: colors.grey,
    fontFamily: "CircularStd",

    marginTop: 2,
  },
  text6: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,

    color: "white",
  },
  viewbutton: {
    width: "90%",
    height: 50,
    backgroundColor: colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 12,
    marginTop: 20,
  },
  text8: {
    fontSize: 16,
    fontFamily: "CircularStd",
  },
  dataview: {
    display: "flex",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
  button: {
    width: "90%",
    display: "flex",
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 16,
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text10: {
    color: "white",
    fontFamily: "CircularStd",
  },
});
