import { HStack, Image, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/img-url";
import { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre;
}
const GenreListItem = ({ genre }: Props) => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Image
          src={getCroppedImageUrl(genre.image_background)}
          boxSize="32px"
          borderRadius={8}
        />
        <Text fontSize="lg">{genre.name}</Text>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
