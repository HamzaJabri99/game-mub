import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      bg={colorMode === "dark" ? "gray.700" : "gray.200"}
      aria-label="Switch Mode"
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ColorModeSwitch;
