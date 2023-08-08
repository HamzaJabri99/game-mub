import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import getCroppedImageUrl from "../services/img-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
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
          <ListItem key={genre.id} paddingY="10px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
