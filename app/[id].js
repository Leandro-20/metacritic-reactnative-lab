import { Stack } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

const Detail = () => {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGemeInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGemeInfo);
    }
  }, [id]);

  useEffect(() => {
    console.log(gameInfo);
  }, [gameInfo]);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: gameInfo?.title,
        }}
      />
      {gameInfo === null ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <View className="justify-center items-center text-center flex-1">
            <Image
              className="mt-4 mb-4 rounded"
              source={{ uri: gameInfo.img }}
              style={{ width: 294, height: 294 }}
            />
            <Score score={gameInfo.score} maxScore={100} />
            <Text className="text-white font-bold mb-2 text-2xl text-center">
              {gameInfo.title}
            </Text>
            <Text className="text-white/70 mt-4 font-bold mb-8 text-center text-base">
              {gameInfo.description}
            </Text>
          </View>
        </ScrollView>
      )}
    </Screen>
  );
};

export default Detail;
