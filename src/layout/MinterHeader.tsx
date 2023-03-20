import React from 'react';
import { Container, Spacer, HStack, Text, Flex, Box } from '@chakra-ui/react';
import { Authenticate } from '../components/Authenticate';
import { Connect } from '../components/Connect';
import { MoralisLogo } from '../assets/MoralisLogo';
import { Navigation } from './Navigation';
import { ToogleThemeButton } from '../components/DarkmodeButton'

const Header = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <HStack>
        <Flex wrap="nowrap" alignItems={'start'} mr={4} direction="column">
         <Box bg="brand.100">box in header</Box>
          <MoralisLogo />
          <Text fontSize={'xl'} fontWeight="800">
            {"NFT's are the shizle"}
          </Text>
        </Flex>
        <Navigation />
        <Spacer />
        <Authenticate />
        <Connect />
        <ToogleThemeButton />
      </HStack>
    </Container>
  );
};

export default Header;
