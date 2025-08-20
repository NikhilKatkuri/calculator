import Theme from "@/src/theme/theme";
import { useState } from "react";
import { Button, StatusBar, Text, View } from "react-native";

export default function Index() {
  const [theme, setTheme] = useState(new Theme(false));
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: theme.colors.foreground,
          }}
        >
          A calculator app
        </Text>
        <Text style={{ color: theme.colors.button_secondary_background }}>
          built with Expo
        </Text>
        <Button
          onPress={() => {
            setTheme(new Theme(!theme.dark));
          }}
          title="toggle"
        />
      </View>
    </>
  );
}
