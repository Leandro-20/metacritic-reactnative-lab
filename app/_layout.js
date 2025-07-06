import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { CircleInfoIcon } from "../components/Icons";
import MyIcon from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <MyIcon />,
          // headerRight: () => (
          //   <Link asChild href="/about">
          //     <Pressable>
          //       {({ pressed }) => (
          //         <CircleInfoIcon
          //           style={{
          //             opacity: pressed ? 0.5 : 1,
          //           }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
    </View>
  );
}
