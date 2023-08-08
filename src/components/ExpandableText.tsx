import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = expanded
    ? children
    : children.substring(0, limit).concat("...");
  if (!children) return null;
  if (children.length <= limit) return <Text> {children}</Text>;
  return (
    <>
      <Text>
        {summary}
        <Button
          size="sm"
          ml={2}
          colorScheme="green"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
