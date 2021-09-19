import { Box, Flex, VStack, Stack, Heading, Center } from '@chakra-ui/layout';
import { flexbox } from '@chakra-ui/styled-system';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Center>
      <Flex p={5}>
        <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>
          <Link to='/'>Videos</Link>
        </Heading>
        <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>
          <Link to='/form'>Upload Videos</Link>
        </Heading>
      </Flex>
    </Center>
  );
};

export default Header;
