import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    Center,
    useDisclosure,
    Flex,
    Text,
    Box
  } from '@chakra-ui/react'
import {useRef,useContext} from "react";
import { ProductContext } from '../HomePage';

const Coupon = ()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const cart = useContext(ProductContext);
    const applyDiscount =() =>{
      onClose();
      cart.setApplied(true);
      cart.setDiscount(cart.totalPrice/10);
    }
    return (
        <>
        <Button onClick={onOpen} mt="0.5rem" borderRightRadius="20" borderLeftRadius="20" backgroundColor="#ece8d3">Avail Discount</Button>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
    
          <AlertDialogContent width="25rem" height="25rem" color="	#B8860B" borderRadius="20">
            <AlertDialogHeader></AlertDialogHeader>
            <AlertDialogBody justifyItems="center" p="5rem">
                <Flex direction="column">
                <Center><Text fontSize="1rem" color="black">A little something just for you!</Text></Center>
              <Center><Text fontSize="2.3rem" fontWeight="extrabold">10% off</Text></Center>
              <Center><Text fontWeight="extrabold">your entire purchase!</Text></Center>
              <Center>
              <Button mt="1.2rem" mb="0.5rem"width="15rem"ref={cancelRef} onClick={applyDiscount} borderRightRadius="20" borderLeftRadius="20" backgroundColor="#B8860B" color="white">
                Apply Coupon
              </Button>
              </Center>
              <Center>
                <Box color="black" onClick={onClose}>Nah, I don't like saving money</Box>
              </Center>
              </Flex>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }

  export default Coupon;