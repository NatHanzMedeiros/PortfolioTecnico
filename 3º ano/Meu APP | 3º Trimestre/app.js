const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone13Mini6 from "./screens/IPhone13Mini6";
import IPhone13Mini5 from "./screens/IPhone13Mini5";
import IPhone13Mini4 from "./screens/IPhone13Mini4";
import IPhone13Mini3 from "./screens/IPhone13Mini3";
import IPhone13Mini2 from "./screens/IPhone13Mini2";
import IPhone13Mini1 from "./screens/IPhone13Mini1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone13Mini6"
              component={IPhone13Mini6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini5"
              component={IPhone13Mini5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini4"
              component={IPhone13Mini4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini3"
              component={IPhone13Mini3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini2"
              component={IPhone13Mini2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13Mini1"
              component={IPhone13Mini1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
