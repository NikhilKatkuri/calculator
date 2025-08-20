import useSize from "@/src/helpers/useSize";
import Theme from "@/src/theme/theme";
import { useState } from "react";
import {
  Button,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Index() {
  const [theme, setTheme] = useState(new Theme(false));
  const size = new useSize();
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          paddingBottom: 32,
        }}
      >
        <Button
          onPress={() => setTheme(new Theme(!theme.dark))}
          title="Toggle Theme"
        />
        <View
          style={{
            paddingVertical: 16,
            width: size.wp(0.95),
            maxWidth: 400,
            paddingHorizontal: 0,
            alignSelf: "center",
          }}
        >
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
              <TouchableWithoutFeedback key={label}>
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
              <TouchableWithoutFeedback key={label}>
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    backgroundColor:
                      index === 3
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
              <TouchableWithoutFeedback key={label}>
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    backgroundColor:
                      index === 3
                        ? theme.colors.primary_50
                        : theme.colors.button_primary_background,
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
              <TouchableWithoutFeedback key={label}>
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    backgroundColor:
                      index === 3
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
              <TouchableWithoutFeedback key={label}>
                <View
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    width: index === 0 ? "45%" : 56,
                    backgroundColor:
                      index === 2
                        ? theme.colors.primary
                        : theme.colors.button_primary_background,
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
