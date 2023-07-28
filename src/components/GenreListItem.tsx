import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/img-url";
import { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreListItem = ({ genre, onSelectGenre, selectedGenre }: Props) => {
  return (
    <ListItem paddingY="10px">
      <HStack>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize="32px"
          borderRadius={8}
          objectFit="cover"
        />
        <Button
          onClick={() => onSelectGenre(genre)}
          fontSize="lg"
          variant="link"
          whiteSpace="normal"
          textAlign="left"
          fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
