import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <Box w="100%" h="100vh" display="flex">
      <Sidebar />
      <Box padding={10}>
        <Heading>Halaman Utama</Heading>
        <Table marginTop={10} size="lg" variant="simple">
          <Thead>
            <Tr>
              <Th>Informasi Singkat</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Nama:</Td>
              <Td>Ditya Athallah</Td>
            </Tr>
            <Tr>
              <Td>Jenis Kamar:</Td>
              <Td>6x4m</Td>
            </Tr>
            <Tr>
              <Td>Status:</Td>
              <Td>Aktif</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
