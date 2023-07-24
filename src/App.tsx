import { Grid, GridItem, Show } from "@chakra-ui/react";
const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav""aside main"`,
        }}
        
      >
        <GridItem bg="yellow.500" area={"nav"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem bg="red.500" area={"aside"}>
            Aside
          </GridItem>
        </Show>

        <GridItem bg="blue.500" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
