import useSize from "@/src/helpers/useSize";
import Theme from "@/src/theme/theme";
import { useState } from "react";
import {
  Image,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Index() {
  const [theme, setTheme] = useState(new Theme(false));
  const [display, setDisplay] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const size = new useSize();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />
      <View
        style={{
          height: 72,
          width: size.wp(1),
          paddingHorizontal: 16,
          paddingTop: 18,
          borderBottomWidth: 2,
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.button_secondary_background,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: theme.colors.foreground,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Calculator
        </Text>

        <TouchableWithoutFeedback
          onPress={() => setTheme(new Theme(!theme.dark))}
        >
          <View>
            <Image
              style={{
                height: 24,
                width: 24,
                resizeMode: "cover",
              }}
              source={
                theme.dark
                  ? require("../assets/images/light_mode.png")
                  : require("../assets/images/dark_mode.png")
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          paddingBottom: 32,
        }}
      >
        <View
          style={{
            paddingVertical: 16,
            width: size.wp(0.95),
            maxWidth: 400,
            paddingHorizontal: 0,
            alignSelf: "center",
          }}
        >
          <View>
            {history &&
              history.map((item, index) => {
                return (
                  <Text
                    key={index}
                    style={{
                      color: theme.colors.foreground,
                      fontSize: index === history.length - 1 ? 48 : 16,
                      fontWeight: "300",
                      textAlign: "right",
                    }}
                  >
                    {item}
                  </Text>
                );
              })}
            {display && (
              <Text
                style={{
                  color: theme.colors.foreground,
                  fontSize: 48,
                  fontWeight: "300",
                  textAlign: "right",
                }}
              >
                {display}
              </Text>
            )}
          </View>
          <View
            style={{
              paddingTop: 24,
              borderTopWidth: 2,
              borderColor: theme.colors.button_secondary_background,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
              gap: 12,
            }}
          >
            {["C", "X", "%", "/"].map((label) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (label.toLowerCase() === "x") {
                    setDisplay((prev) => prev.slice(0, -1));
                  } else if (label.toLowerCase() === "c") { 
                    setDisplay("");
                  } else {
                    setDisplay((prev) => prev + label);
                  }
                }}
                key={label}
              >
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    backgroundColor:
                      label === "%" || label === "/"
                        ? theme.colors.primary_50
                        : theme.colors.button_primary_background,
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 56,
                  }}
                >
                  <Text
                    style={{
                      color:
                        label === "%" || label === "/"
                          ? theme.colors.primary
                          : theme.colors.foreground,
                      fontSize: 26,
                      fontWeight: "600",
                    }}
                  >
                    {label}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
              gap: 12,
            }}
          >
            {["7", "8", "9", "*"].map((label, index) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  setDisplay((prev) => prev + label);
                }}
                key={label}
              >
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    backgroundColor:
                      index === 3
                        ? theme.colors.primary_50
                        : theme.colors.button_secondary_background,
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 56,
                  }}
                >
                  <Text
                    style={{
                      color:
                        index === 3
                          ? theme.colors.primary
                          : theme.colors.foreground,
                      fontSize: 26,
                      fontWeight: "600",
                    }}
                  >
                    {label}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
              gap: 12,
            }}
          >
            {["4", "5", "6", "-"].map((label, index) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  setDisplay((prev) => prev + label);
                }}
                key={label}
              >
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    backgroundColor:
                      index === 3
                        ? theme.colors.primary_50
                        : theme.colors.button_secondary_background,
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 62,
                  }}
                >
                  <Text
                    style={{
                      color:
                        index === 3
                          ? theme.colors.primary
                          : theme.colors.foreground,
                      fontSize: 26,
                      fontWeight: "600",
                    }}
                  >
                    {label}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
              gap: 12,
            }}
          >
            {["1", "2", "3", "+"].map((label, index) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  setDisplay((prev) => prev + label);
                }}
                key={label}
              >
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    backgroundColor:
                      index === 3
                        ? theme.colors.primary_50
                        : theme.colors.button_secondary_background,
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 56,
                  }}
                >
                  <Text
                    style={{
                      color:
                        index === 3
                          ? theme.colors.primary
                          : theme.colors.foreground,
                      fontSize: 26,
                      fontWeight: "600",
                    }}
                  >
                    {label}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
              gap: 12,
            }}
          >
            {["0", ".", "="].map((label, index) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (label === "=") {
                    if (!display) {
                      return;
                    }
                    setHistory((prev) => [
                      ...prev.slice(0, 9),
                      "=" + eval(display.replace("=", "")),
                    ]);
                    setDisplay("");
                  } else {
                    setDisplay((prev) => prev + label);
                  }
                }}
                key={label}
              >
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    width: index === 0 ? "45%" : 56,
                    backgroundColor:
                      index === 2
                        ? theme.colors.primary
                        : theme.colors.button_secondary_background,
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 64,
                  }}
                >
                  <Text
                    style={{
                      color: index === 2 ? "#fff" : theme.colors.foreground,
                      fontSize: 26,
                      fontWeight: "600",
                    }}
                  >
                    {label}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
      </View>
    </>
  );
}
