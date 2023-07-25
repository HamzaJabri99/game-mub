import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>GameMub</Text>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </Button>
    </HStack>
  );
};

export default NavBar;
