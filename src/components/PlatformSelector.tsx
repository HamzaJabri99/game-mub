import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Platforms");
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Box marginTop="4rem">
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform}
        </MenuButton>
        <MenuList onClick={(e) => setSelectedPlatform(e.target.value)}>
          {data.map((platform) => (
            <MenuItem value={platform.name}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
