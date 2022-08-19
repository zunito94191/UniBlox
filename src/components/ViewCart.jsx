import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    Flex,
    Spacer,
    Text,
    Circle,
    Box,
    Center,
    HStack
  } from '@chakra-ui/react'
import { FiShoppingBag } from "react-icons/fi";
import {EmptyFooter} from './EmptyCart';
import {useRef,useContext} from 'react'; 
import {BiRightArrowAlt} from "react-icons/bi"
import { CartBody } from "./FilledCart";
import { ProductContext } from '../App';

  const ViewCart = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const cart = useContext(ProductContext)
    return (
      <>
        <Button
        ref={btnRef}
      my="5px"
      colorScheme="green"
      position="relative"
      variant="ghost"
      leftIcon={<FiShoppingBag size="24px" />}
      size="lg"
      p={2}
      onClick={onOpen}
    >
      <HStack>
      <Circle position="absolute" margin="-1rem" top="1.5rem" left="2.3rem" bg="pink" color="black" py="0.3rem" px="0.4rem"> <Text m="0px" p="0px" fontSize="8px">{cart.count.current}</Text></Circle>
      </HStack>
      View Cart
    </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            
            <Box borderBottom="1px" color="blackAlpha.200">
            <DrawerHeader> <Flex><Box alignSelf="center" onClick={onClose}><BiRightArrowAlt size="42px" fontWeight="1rem" color='black'/></Box><Spacer/>
      <Text
      fontSize="2rem"
      fontWeight="normal"
      color="gray.900"
      fontFamily='Recoleta'
      my="5px"
    >
      My Bag
    </Text><Spacer/><Box alignSelf="center" position="relative"><HStack>
      <Circle position="absolute" margin="-1rem" top="0.6rem" left="1.9rem" bg="pink" color="black" py="0.3rem" px="0.4rem"> <Text m="0px" p="0px" fontSize="8px">{cart.count.current}</Text></Circle>
      </HStack><FiShoppingBag size="24px" color='black'/></Box></Flex>
      <Flex direction="column" color="black" fontFamily="Founders Grotesk" fontSize="1rem" fontWeight="normal">
          <Center>
        Your order qualifies for <span style={{fontWeight:"bold",marginLeft:"0.3rem"}}>discount coupon</span>
        </Center>
        <Center>
      {cart.count.current<9?<span>Add {9-cart.count.current} items to avail<span style={{fontWeight:"bold",marginLeft:"0.3rem"}}>10% discount</span></span>:<span></span>}
      </Center>
      </Flex>
      </DrawerHeader></Box>      
            <DrawerBody>
            <CartBody cart={cart} addToCart={cart.addToCart}/>
            </DrawerBody>
            <EmptyFooter count={cart.count} totalPrice={cart.totalPrice}/>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default ViewCart;