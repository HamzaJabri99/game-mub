import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box  padding={5}>
        <Heading>W'oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page Doesn't Exist!"
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
