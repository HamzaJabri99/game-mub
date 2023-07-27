import { List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import GenreListItem from "./GenreListItem";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from(Array(19).keys());
  if (error) return <Text color="red">Something Went Wrong</Text>;
  return (
    <List marginTop="4rem">
      {isLoading &&
        skeletons.map((skeleton) => <GenreListItemSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <GenreListItem key={genre.id} genre={genre} />
      ))}
    </List>
  );
};

export default GenreList;
