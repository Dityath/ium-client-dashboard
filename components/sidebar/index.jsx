import React from "react";
import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CalendarIcon, BellIcon, AttachmentIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Box bgColor="orange.100" w="300px" h="100vh">
      <Box
        w="100%"
        h="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading size="lg">Nurul Qolbi</Heading>
      </Box>
      <Box padding="5">
        <List display="flex" flexDir="column" gridGap="5">
          <ListItem display="flex" alignItems="center">
            <ListIcon as={CalendarIcon} boxSize={5} />
            <Link href="/">Laman Utama</Link>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={AttachmentIcon} boxSize={5} />
            <Link href="/record">Pembayaran Bulanan</Link>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <Link href="https://nurul-qolbi.vercel.app/" passHref>
              Keluar
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
