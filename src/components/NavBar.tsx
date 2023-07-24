import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>GameMub</Text>
    </HStack>
  );
};

export default NavBar;
