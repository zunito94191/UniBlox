import {
  Container,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState,createContext,useReducer } from "react";
import NavBar from "./components/NavBar";
import ProductWindow from "./components/ProductWindow";
import { cartReducers,productReducers } from "./reducers";
import { productInitial } from "./initialState";
export const ProductContext = createContext();
function HomePage() {
  const [count,setCount] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);
  const [cart,dispatchCart]= useReducer(cartReducers,[]);
  const [products,dispatchProducts] = useReducer(productReducers,productInitial);
  const [isApplied,setApplied] = useState(false)
  const [discount,setDiscount] = useState(0);
  const cartFunction =(increment)=>{
   return function(product){
    const newItem = products.filter((Product)=>Product.id===product.id)
    if(increment){
    const newTotalprice = totalPrice+newItem[0].price;
    setCount(count=>count+1);
    setTotalPrice(newTotalprice)
    dispatchCart({type:"addToCart",payload:product});
    dispatchProducts({type:"addToCart",payload:product});
    if(isApplied){
      setDiscount(newTotalprice/10);
    }
    }
    else {
      const newTotalprice = totalPrice-newItem[0].price;
      if(count-1<9){
        setDiscount(0);
        setApplied(false);
        setDiscount(0);
      }else if(isApplied){
        setDiscount(newTotalprice/10)
      }
      setCount(count=>count-1);
      setTotalPrice(newTotalprice);
      dispatchCart({type:"removeFromCart",payload:product});
      dispatchProducts({type:"removeFromCart",payload:product});
    }
    }
}
const addToCart = cartFunction(true);
const removeFromCart = cartFunction(false);
const storeValue={cart,addToCart,count,totalPrice,setTotalPrice,removeFromCart,isApplied,setApplied,discount,setDiscount}
  return (
    <Container maxW="container.xl" h="100vh" >
      <ProductContext.Provider value={storeValue}>
      <NavBar/>
      </ProductContext.Provider>
      <Box mt={4}>
        <SimpleGrid
          minChildWidth="300px"
          align="center"
          justify="center"
          spacing="40px"
          mb={32}>
          {products.map((product) => (<ProductWindow key={product.id} product={product} addToCart={addToCart} />
            ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default HomePage;
