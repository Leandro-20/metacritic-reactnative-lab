import { Children } from "react";
import { View } from "react-native";

const Screen = ({ children }) => {
  return <View className="flex-1 bg-black">{children}</View>;
};

export default Screen;
