import { ScrollView, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import Screen from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <View
          style={{
            paddingTop: 40,
            paddingLeft: 10,
          }}
        >
          {/* <Link asChild href="/">
            <Pressable>
              {({ pressed }) => (
                <HomeIcon
                  style={{
                    opacity: pressed ? 0.5 : 1,
                  }}
                />
              )}
            </Pressable>
          </Link> */}
          <Text className="text-white font-bold mb-8 text-2xl">About</Text>
          <Text className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Text className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
