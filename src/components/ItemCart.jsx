import { 
    Flex,
    Text,
    Box,
    Spacer,
    Image,
    ButtonGroup,
    IconButton,
    
} from "@chakra-ui/react";
import {AiOutlinePlus,AiOutlineMinus,AiOutlineClose} from "react-icons/ai"


export const ItemCart =({cart,addToCart}) =>{
    return(<Box border="1px" borderRadius="md" mt="0.5rem" borderColor="blackAlpha.200">
    <Box p="1rem">
    <Flex><Image src={cart.image} alt='Dan Abramov' boxSize="8rem" /><Spacer/><Flex direction="column" justify="space-between" margin="0.2rem">
        <Text>{cart.name}</Text>
        <ButtonGroup size="sm" py="0.1rem" isAttached variant='outline' border="1px" borderColor="blackAlpha.200" borderRadius="sm">
        <IconButton border="0px" aria-label='Add to friends' fontSize="0.5rem" onClick={()=>addToCart(cart.id,false)} icon={<AiOutlineMinus/>} />
        <Box alignSelf="center" px="1.5rem" fontSize="0.8rem" fontWeight="bold">{cart.count}</Box>
        <IconButton border="0px" aria-label='Add to friends' fontSize="0.5rem" onClick={()=>addToCart(cart.id,true)} icon={<AiOutlinePlus/>} />
        </ButtonGroup>
        </Flex><Spacer/><Spacer/><Flex direction="column"><Box alignSelf="end"><AiOutlineClose /></Box><Spacer/><Text color="blackAlpha.900" fontWeight="bold" fontFamily="Founders Grotesk" fontSize="1.2rem">₹{cart.price}</Text></Flex></Flex>
        </Box>
        <Box borderTop="1px" p="1rem" borderColor="blackAlpha.200">
            <Flex>
            Your sub total
            <Spacer/>
            ₹{cart.price*cart.count}
            </Flex>
        </Box>
</Box>)
}