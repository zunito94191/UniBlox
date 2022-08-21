import {
    Text,
    Flex,
    Img,
  } from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";
import ViewCart from "./cart/ViewCart";
const NavBar =() =>{
    return (<Flex justifyContent="space-between" alignContent="center">
    <Flex align="center">
      <Img src={logo} boxSize="3rem" mr="2rem"></Img>
    <Text
      as="a"
      href="/"
      fontSize="2rem"
      color="gray.900"
      fontFamily="Robo"
      my="5px"
    >
      UniBlox
    </Text>
    </Flex>
    <ViewCart/>
  </Flex>
)
}

export default NavBar;