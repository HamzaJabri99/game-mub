import { useParams } from "react-router-dom";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
const GameDetailPage = () => {
  const { slug } = useParams();
  const apiClient = new APIClient(`games/${slug}`);
  const { data, isLoading } = useQuery({
    queryKey: ["game"],
    queryFn: apiClient.getGame,
  });
  if (isLoading) return <Spinner />;
  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
