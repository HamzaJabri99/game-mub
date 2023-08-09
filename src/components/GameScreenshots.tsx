import { Img, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  console.log(data);
  if (isLoading) return null;
  if (error) throw Error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {data?.results.map((file) => (
        <Img key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
