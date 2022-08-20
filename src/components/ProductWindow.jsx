import {
    Text,
    Box,
    Image,
    Button,
    Flex,
    ButtonGroup,
    IconButton,
    Spacer
  } from "@chakra-ui/react";
import {FiShoppingCart} from "react-icons/fi";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
const ProductWindow = ({product,addToCart,count}) =>{
    return (<Box
        bg="white"
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        _hover={{ shadow: "dark-lg" }}
      >
        <Image
          mt="3rem"
          h="350px"
          fit="cover"
          src={product.image}
          alt={`Picture of ${product.name}`}
          roundedTop="lg"
          rounded="lg"
        />

        <Box p="6">
          <Flex
            mt="1"
            justifyContent="space-between"
            alignContent="center"
          >
            <Text
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              height="5rem"
              textAlign="left"
              // textTransform="uppercase"
              lineHeight="tight"
              fontFamily="Roboto"
            >
              {product.name}
            </Text>
            <Text
              as="h4"
              fontSize="xl"
              fontWeight="bold"
              color="teal.600"
            >
              ₹{parseInt(product.price).toLocaleString('en-IN')}
            </Text>
          </Flex>

          <Text
            mt={2}
            color="gray.500"
            height="15rem"
            display={{ base: "none", md: "flex" }}
          >
            {product.description}
          </Text>
        {product.inCart?<ButtonGroup size="lg" border="1px" px="3rem" isAttached width="100%" color="blue.500" borderRadius="md" mt={4}><Spacer/>
        <IconButton border="0px" aria-label='Add to friends' fontSize="0.5rem" backgroundColor="transparent" onClick={()=>addToCart(product.id,false)} icon={<AiOutlineMinus/>} />
        <Box alignSelf="center" px="1.5rem" fontSize="0.8rem" fontWeight="bold">{product.count}</Box>
        <IconButton border="0px" aria-label='Add to friends' fontSize="0.5rem" backgroundColor="transparent" onClick={()=>addToCart(product.id,true)} icon={<AiOutlinePlus/>} />
        <Spacer/>
        </ButtonGroup>:<Button
            leftIcon={<FiShoppingCart size="24px" />}
            size="lg"
            mt={4}
            isFullWidth
            colorScheme="blue"
            variant="outline"
            alignSelf={"center"}
            onClick={()=>addToCart(product.id,true)}
          >
            Add To Cart
          </Button>}
          
        </Box>
      </Box>
    )
}
export default ProductWindow;