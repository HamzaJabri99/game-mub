import { List, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import GenreListItem from "./GenreListItem";
interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from(Array(19).keys());
  if (error) return <Text color="red">Something Went Wrong</Text>;
  if (isLoading)
    return skeletons.map((skeleton) => (
      <List marginTop="4rem" key={skeleton}>
        <GenreListItemSkeleton />
      </List>
    ));

  return (
    <List marginTop="4rem">
      {data.map((genre) => (
        <GenreListItem key={genre.id} genre={genre} onSelectGenre={onSelectGenre} />
      ))}
    </List>
  );
};

export default GenreList;
