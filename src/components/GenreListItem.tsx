import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/img-url";
import { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
}
const GenreListItem = ({ genre, onSelectGenre }: Props) => {
  return (
    <ListItem paddingY="10px">
      <HStack>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize="32px"
          borderRadius={8}
          objectFit="fill"
        />
        <Button
          onClick={() => onSelectGenre(genre)}
          fontSize="lg"
          variant="link"
          whiteSpace="pre-wrap"
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
