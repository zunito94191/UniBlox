import { 
    Button,
    Center,
    Flex,
    Text,
    Box,
    Spacer,
    
} from "@chakra-ui/react";
import {AiTwotoneLock} from "react-icons/ai"
import { ItemCart } from "./ItemCart";
import {useContext} from "react";
import { ProductContext } from "../../HomePage";
export const CartBody =() =>{
    const cart = useContext(ProductContext)
    return(<>{cart.cart.map((kart) =><ItemCart key={kart.id} cart={kart} addToCart={cart.addToCart} removeFromCart={cart.removeFromCart}/>)}</>)
}

export const CartFooter = ()=>{
    const cart = useContext(ProductContext);
    return (<Box borderTop="1px" color="blackAlpha.400" p="1rem">
    {cart.isApplied&&<><Flex><Text color="black" fontFamily="Founders Grotesk" fontSize="1rem" fontWeight="light">Order Subtotal</Text><Spacer/><Text color="blackAlpha.900" fontWeight="bold" fontFamily="Founders Grotesk" fontSize="1.2rem">₹{parseInt(cart.totalPrice).toLocaleString('en-IN')}</Text></Flex>
    <Flex><Text color="black" fontFamily="Founders Grotesk" fontSize="1rem" fontWeight="light">Discount Applied</Text><Spacer/><Text color="blackAlpha.900" fontWeight="bold" fontFamily="Founders Grotesk" fontSize="1.2rem">-₹{parseInt(cart.discount).toLocaleString('en-IN')}</Text></Flex></>}
    <Flex><Text color="black" fontFamily="Founders Grotesk" fontSize="1rem" fontWeight="light">Amount Payable</Text><Spacer/><Text color="blackAlpha.900" fontWeight="bold" fontFamily="Founders Grotesk" fontSize="1.2rem">₹{parseInt(cart.totalPrice-cart.discount).toLocaleString('en-IN')}</Text></Flex>
    <Center><Button backgroundColor="#CC2323" size="lg" mt="1rem"borderRadius="none" rightIcon={<AiTwotoneLock/>} width="100%" fontSize="1rem" color="white">CHECKOUT</Button></Center>
</Box>)
}