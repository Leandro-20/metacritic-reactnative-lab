import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { AnimetedGameCard } from "./GameCard";

import Screen from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      <StatusBar style="light" />
      {games.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimetedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
