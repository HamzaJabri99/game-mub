import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const handleGenreChange = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };
  const handlePlatformChange = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };
  const handleSortOrderChange = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };
  const handleSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText: searchText });
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={handleSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={handleGenreChange}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={4}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={handlePlatformChange}
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={handleSortOrderChange}
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
