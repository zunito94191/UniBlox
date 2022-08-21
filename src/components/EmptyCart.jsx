import { 
    Button,
    Center,
    Flex,
    Text,
} from "@chakra-ui/react";

export const EmptyBody = ({onClick})=>{
    return (<Center>
        <Flex direction="column" mt="10rem">
        <Text fontSize="1.2rem">Your bag is empty</Text>
        <Button mt="2rem" variant="outline" colorScheme="black" borderRadius="sm" onClick={onClick}><Text fontSize=".8rem">Let's Shop</Text></Button>
        </Flex>
      </Center>)
}
export const EmptyFooter = ()=>{
    return (<></>)
}

