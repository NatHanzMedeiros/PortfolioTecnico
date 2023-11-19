import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone13Mini6 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone13Mini6, styles.iconLayout]}>
      <View style={styles.iphone13Mini6Child} />
      <Text style={[styles.ratanab, styles.ratanabClr]}>RATANABÁ</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={styles.iphone13Mini6Item}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={styles.search}
        onPress={() => navigation.navigate("IPhone13Mini1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1291358200-2.png")}
      />
      <Text style={[styles.desculpeLocalInvlidoContainer, styles.ratanabClr]}>
        <Text style={styles.desculpe}>{`DESCULPE
`}</Text>
        <Text style={styles.localInvlido}>LOCAL INVÁLIDO!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  ratanabClr: {
    color: Color.black,
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  iphone13Mini6Child: {
    top: 127,
    left: 40,
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    width: 296,
    height: 460,
    position: "absolute",
  },
  ratanab: {
    top: 162,
    left: 97,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameIcon: {
    top: 156,
    left: 65,
    width: 31,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13Mini6Item: {
    height: "3.94%",
    width: "8.53%",
    top: "19.21%",
    right: "17.6%",
    bottom: "76.85%",
    left: "73.87%",
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
    left: 284,
    top: 163,
    width: 18,
    height: 18,
    position: "absolute",
  },
  vectorIcon: {
    top: 210,
    left: 102,
    width: 172,
    height: 174,
    position: "absolute",
  },
  icon1: {
    top: 260,
    left: 147,
    width: 75,
    height: 75,
    position: "absolute",
  },
  desculpe: {
    fontSize: 24,
  },
  localInvlido: {
    fontSize: FontSize.size_mini,
  },
  desculpeLocalInvlidoContainer: {
    top: 391,
    left: 127,
    textAlign: "center",
  },
  iphone13Mini6: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default IPhone13Mini6;
