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

import Sidebar from "../components/sidebar";

export default function Record() {
  return (
    <Box w="100%" h="100vh" display="flex">
      <Sidebar />
      <Box padding={10}>
        <Heading>Pembayaran Bulanan</Heading>
        <Table marginTop={10} size="lg" variant="simple">
          <Thead>
            <Tr>
              <Th>Periode</Th>
              <Th>Tanggal</Th>
              <Th>Pelunasan</Th>
              <Th isNumeric>Jumlah</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1 Bulan</Td>
              <Td>20 Januari 2020 - 20 Februari 2020</Td>
              <Td>Lunas</Td>
              <Td isNumeric>Rp.850.000,00</Td>
            </Tr>
            <Tr>
              <Td>1 Bulan</Td>
              <Td>20 Februari 2020 - 20 Maret 2020</Td>
              <Td>Lunas</Td>
              <Td isNumeric>Rp.850.000,00</Td>
            </Tr>
            <Tr>
              <Td>1 Bulan</Td>
              <Td>20 Maret 2020 - 20 April 2020</Td>
              <Td>Lunas</Td>
              <Td isNumeric>Rp.850.000,00</Td>
            </Tr>
            <Tr>
              <Td>1 Bulan</Td>
              <Td>20 April 2020 - 20 Mei 2020</Td>
              <Td>Lunas</Td>
              <Td isNumeric>Rp.850.000,00</Td>
            </Tr>
            <Tr>
              <Td>1 Bulan</Td>
              <Td>20 Mei 2020 - 20 Juni 2020</Td>
              <Td>Lunas</Td>
              <Td isNumeric>Rp.850.000,00</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
