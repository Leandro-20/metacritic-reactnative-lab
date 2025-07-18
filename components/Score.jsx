import { View, Text } from "react-native";

export function Score({ score, maxScore }) {
  const getColor = () => {
    const porcentaje = (score / maxScore) * 100;
    if (porcentaje < 40) return "bg-red-500";
    if (porcentaje < 98) return "bg-yellow-500";
    return "bg-green-500";
  };
  const color = getColor();
  return (
    <View
      className={`${color} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}
