import React from 'react'
import {
    Container,
    Box,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  } from "@chakra-ui/react";
import BabySitterLogin from './BabySitterLogin';
import BabySitterSignUp from './BabySitterSignup';
const BabySitterAuthentication = () => {
  return (
    <div className="hero min-h-[85vh]">
    <Container maxW="xl" centerContent>
      <Box
        bg="white"
        p={4}
        my={16}
        color="black"
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="0 0.25em 0.25em -0.125em rgba(0, 0, 0, 0.25),
      0 0.5em 1.25em rgba(0, 0, 0, 0.5);"
      >
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="0 0 16px 0"
          borderRadius="lg"
          borderWidth="1px"
          background="#463AA1"
        >
          <Text fontSize="4xl" color="white" fontWeight="bold">
            Baby Sitter App
          </Text>
        </Box>
        <Tabs variant="soft-rounded">
          <TabList marginBottom="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sing Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BabySitterLogin />
            </TabPanel>
            <TabPanel>
              <BabySitterSignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  </div>
  )
}

export default BabySitterAuthentication