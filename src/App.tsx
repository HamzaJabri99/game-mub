import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import useGameQueryStore from "./store";

const App = () => {
  const { gameQuery } = useGameQueryStore();
  console.log(gameQuery);
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const handleGenreChange = (genreId: number) => {
  //   setGameQuery({ ...gameQuery, genreId });
  // };
  // const handlePlatformChange = (platform: Platform) => {
  //   setGameQuery({ ...gameQuery, platformId: platform.id });
  // };
  // const handleSortOrderChange = (sortOrder: string) => {
  //   setGameQuery({ ...gameQuery, sortOrder });
  // };
  // const handleSearch = (searchText: string) => {
  //   setGameQuery({ ...gameQuery, searchText: searchText });
  // };
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={4}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
