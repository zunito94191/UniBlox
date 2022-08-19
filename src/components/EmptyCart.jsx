import { 
    Button,
    Center,
    Flex,
    Text,
    Box,
    Spacer
} from "@chakra-ui/react";
import {AiTwotoneLock} from "react-icons/ai"
export const EmptyBody = ({onClose})=>{
    return (<Center>
        <Flex direction="column" mt="10rem">
        <Text fontSize="1.2rem">Your bag is empty</Text>
        <Button mt="2rem" variant="outline" colorScheme="black" borderRadius="sm" onClick={onClose}><Text fontSize=".8rem">Let's Shop</Text></Button>
        </Flex>
      </Center>)
}
export const EmptyFooter = ({totalPrice,count})=>{
    return (<Box borderTop="1px" color="blackAlpha.400" p="1rem">
    <Flex><Text color="black" fontFamily="Founders Grotesk" fontSize="1rem" fontWeight="light">Order Subtotal</Text><Spacer/><Text color="blackAlpha.900" fontWeight="bold" fontFamily="Founders Grotesk" fontSize="1.2rem">₹{parseInt(totalPrice).toLocaleString('en-IN')}</Text></Flex>
    <Center><Button backgroundColor="#CC2323" size="lg" mt="1rem"borderRadius="none" rightIcon={<AiTwotoneLock/>} width="100%" fontSize="1rem" color="white">CHECKOUT</Button></Center>
</Box>)
}

