import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone13Mini3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone13Mini3, styles.iconLayout]}>
      <View style={styles.iphone13Mini3Child} />
      <Text style={[styles.kmhVelVentoContainer, styles.cTypo]}>
        <Text style={styles.kmh}>{`5Km/h
`}</Text>
        <Text style={styles.velVento}>Vel Vento</Text>
      </Text>
      <Text style={[styles.chuva, styles.cTypo]}>
        <Text style={styles.kmh}>{`60%
`}</Text>
        <Text style={styles.velVento}>Chuva</Text>
      </Text>
      <Text style={styles.florianpolis}>FLORIANÓPOLIS</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={styles.iphone13Mini3Item}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={styles.search}
        onPress={() => navigation.navigate("IPhone13Mini4")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
      </Pressable>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1-1.png")}
      />
      <Text style={[styles.c, styles.cTypo]}>24°C</Text>
      <Text style={[styles.parcialmenteNublado, styles.cTypo]}>
        PARCIALMENTE NUBLADO
      </Text>
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={styles.cloudDrizzleIcon}
        contentFit="cover"
        source={require("../assets/clouddrizzle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  cTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  iphone13Mini3Child: {
    top: 127,
    left: 40,
    borderRadius: Border.br_mini,
    backgroundColor: Color.white,
    width: 296,
    height: 460,
    position: "absolute",
  },
  kmh: {
    fontSize: FontSize.size_base,
  },
  velVento: {
    fontSize: FontSize.size_sm,
  },
  kmhVelVentoContainer: {
    top: 508,
    left: 233,
  },
  chuva: {
    top: 509,
    left: 116,
  },
  florianpolis: {
    top: 162,
    left: 97,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  frameIcon: {
    top: 156,
    left: 65,
    width: 31,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13Mini3Item: {
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
  icon1: {
    top: 210,
    left: 95,
    width: 186,
    height: 196,
    position: "absolute",
  },
  c: {
    top: 376,
    left: 143,
    fontSize: FontSize.size_21xl,
  },
  parcialmenteNublado: {
    top: 423,
    left: 98,
    fontSize: FontSize.size_mini,
  },
  frameIcon1: {
    top: 507,
    left: 199,
    width: 33,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  cloudDrizzleIcon: {
    top: 511,
    left: 86,
    width: 28,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13Mini3: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default IPhone13Mini3;
