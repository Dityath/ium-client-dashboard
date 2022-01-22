import { Box, Heading } from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <Box w="100%" h="100vh" display="flex">
      <Sidebar />
      <Box>hi</Box>
    </Box>
  );
}
