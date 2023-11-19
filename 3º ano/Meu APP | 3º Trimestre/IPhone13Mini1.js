import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13Mini1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13Mini1}>
      <View style={styles.iphone13Mini1Child} />
      <Pressable
        style={[styles.coloqueSuaLocalizaoContainer, styles.searchIconPosition]}
        onPress={() => navigation.navigate("IPhone13Mini2")}
      >
        <Text style={styles.coloqueSuaLocalizao}>Coloque sua localização</Text>
      </Pressable>
      <Image
        style={styles.iphone13Mini1Item}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.searchIcon, styles.searchIconPosition]}
        contentFit="cover"
        source={require("../assets/search1.png")}
      />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchIconPosition: {
    top: 357,
    position: "absolute",
  },
  iphone13Mini1Child: {
    top: 321,
    left: 44,
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    width: 286,
    height: 85,
    position: "absolute",
  },
  coloqueSuaLocalizao: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.black,
    textAlign: "left",
  },
  coloqueSuaLocalizaoContainer: {
    left: 99,
  },
  iphone13Mini1Item: {
    height: "3.94%",
    width: "8.53%",
    top: "43.1%",
    right: "16.8%",
    bottom: "52.96%",
    left: "74.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchIcon: {
    left: 287,
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  frameIcon: {
    top: 350,
    left: 67,
    width: 31,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13Mini1: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default IPhone13Mini1;
