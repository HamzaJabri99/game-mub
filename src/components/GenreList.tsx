import { Heading, List, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import GenreListItem from "./GenreListItem";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
    <>
      <Heading fontSize="2xl">Genres </Heading>
      <List marginTop={3}>
        {data?.results.map((genre: Genre) => (
          <GenreListItem
            key={genre.id}
            genre={genre}
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
