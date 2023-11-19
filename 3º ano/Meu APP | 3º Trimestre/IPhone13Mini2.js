import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13Mini2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone13Mini2, styles.iconLayout]}>
      <View style={styles.iphone13Mini2Child} />
      <Text style={[styles.florianpolis, styles.searchPosition]}>
        Florianópolis
      </Text>
      <Image
        style={styles.iphone13Mini2Item}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={[styles.search, styles.searchPosition]}
        onPress={() => navigation.navigate("IPhone13Mini3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
      </Pressable>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  searchPosition: {
    top: 357,
    position: "absolute",
  },
  iphone13Mini2Child: {
    top: 321,
    left: 44,
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    width: 286,
    height: 85,
    position: "absolute",
  },
  florianpolis: {
    left: 99,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.black,
    textAlign: "left",
  },
  iphone13Mini2Item: {
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
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  search: {
    left: 287,
    width: 18,
    height: 18,
  },
  frameIcon: {
    top: 350,
    left: 67,
    width: 31,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13Mini2: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default IPhone13Mini2;
