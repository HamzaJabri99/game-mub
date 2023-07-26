import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        margin={"4rem auto"}
        padding="1rem"
        spacing={10}
      >
        {games.map((game) =>
          isLoading === true ? (
            <GameCardSkeleton />
          ) : (
            <GameCard key={game.id} game={game} />
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
