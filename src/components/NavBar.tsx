import { HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <HStack paddingY={4} paddingX={8}>
      <Link to="/">
        <Heading letterSpacing="2px">GaMub</Heading>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
