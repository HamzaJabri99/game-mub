import { useParams } from "react-router-dom";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isError } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (isError || !game) throw Error;
  return (
    <Box>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
