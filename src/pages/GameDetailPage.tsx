import { useParams } from "react-router-dom";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

import GameAttributes from "../components/GameAttributes";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isError } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (isError || !game) throw Error;
  return (
    <Box>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
