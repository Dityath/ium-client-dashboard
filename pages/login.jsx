import {
  Box,
  Center,
  Heading,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <Center backgroundColor="orange.100" w="100%" h="100vh">
      <Container
        maxW="96"
        backgroundColor="white"
        centerContent
        borderRadius="2xl"
        boxShadow="lg"
        padding="5"
        display="flex"
        flexDir="column"
        gridGap="2"
      >
        <Heading as="h1" size="xl">
          Login
        </Heading>
        <Heading as="h2" size="xs">
          Silahkan masuk untuk melanjutkan
        </Heading>
        <Input
          type="text"
          focusBorderColor="red.400"
          placeholder="Username"
          size="md"
          maxW="80"
        />
        <InputGroup size="md" maxW="80">
          <Input
            pr="4.5rem"
            type={showPass ? "text" : "password"}
            placeholder="Masukkan password"
            focusBorderColor="red.400"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPass(!showPass)}
              _focus={{
                boxShadow: "0 0 1px 2px #F56565, 0 1px 1px #F56565",
              }}
            >
              {showPass ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          type="submit"
          w="80"
          _focus={{
            boxShadow: "0 0 1px 2px #F56565, 0 1px 1px #F56565",
          }}
        >
          Masuk
        </Button>
      </Container>
    </Center>
  );
}

export default Login;
