import {
    Text,
    Flex,
  } from "@chakra-ui/react";
import ViewCart from "./ViewCart";
const NavBar =() =>{
    return (<Flex justifyContent="space-between" alignContent="center">
    <Text
      as="a"
      href="/"
      fontSize="2rem"
      color="gray.900"
      fontFamily="Robo"
      my="5px"
    >
      Shoes Sales
    </Text>
    <ViewCart/>
  </Flex>
)
}

export default NavBar;