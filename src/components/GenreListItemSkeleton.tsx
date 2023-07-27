import {
  HStack,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListItemSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <Skeleton height={"30px"}>
        <HStack>
          <SkeletonCircle size="4" />
          <SkeletonText noOfLines={2} fontSize="lg">loading</SkeletonText>
        </HStack>
      </Skeleton>
    </ListItem>
  );
};

export default GenreListItemSkeleton;
