import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
const SearchInput = () => {
  return (
    <InputGroup w="60%" margin="2rem auto">
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder="Search games..." borderRadius={80} variant="filled"  />
    </InputGroup>
  );
};

export default SearchInput;
