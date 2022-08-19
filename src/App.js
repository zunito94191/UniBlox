import {
  Container,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductWindow from "./components/ProductWindow";
import { useState,useRef,createContext } from "react";

export const ProductContext = createContext();
function App() {
  const [products, setProducts] = useState(()=>[
   {id:1,
    image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0063168a-f5e5-4257-b6bf-d7bf97bf194a/waffle-one-se-shoes-wtgBSd.png",
    images:["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aa8169b4-2cca-409e-90bd-e5b92d86e8c3/waffle-one-se-shoes-wtgBSd.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5f264f4a-8353-4496-b48b-857a344f31e0/waffle-one-se-shoes-wtgBSd.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/909e3bc7-fe3f-4d40-87d6-c07ce7c0067c/waffle-one-se-shoes-wtgBSd.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ac47598d-4b15-4cc8-aeff-1a0d09e7f4c4/waffle-one-se-shoes-wtgBSd.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/01da891a-92b8-4fa4-bf33-6fe519b3a5b0/waffle-one-se-shoes-wtgBSd.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dae7e390-59eb-4a2a-92f4-9fa886c005d2/waffle-one-se-shoes-wtgBSd.png"
  ],
    name:"Nike Waffle One SE",
    url:"/",
    description:"Bringing a new look to the Waffle franchise, the Nike Waffle One balances everything you love about heritage Nike running with fresh innovation. A plastic heel clip brings energy while a mixture of transparent mesh and retro suede add texture and depth. The Waffle outsole provides a level of support and traction you have to feel to believe.",
    price:9965,
    inCart:false
  },
    {id:2,
      image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a9d0e38c-89c2-42d5-a352-0b582adfbe3b/air-max-koko-sandals-TL4Vw1.png",
      images:["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ee81e5f-716c-4699-af70-1550f6220a5f/air-max-koko-sandals-TL4Vw1.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a7186141-71aa-4616-89cd-181b3e268c3c/air-max-koko-sandals-TL4Vw1.png",
  "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/04c15f35-7277-4852-b1ee-04585cc7d65d/air-max-koko-sandals-TL4Vw1.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2d4dfe68-4030-4a61-9383-e7f66849c34a/air-max-koko-sandals-TL4Vw1.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/04c15f35-7277-4852-b1ee-04585cc7d65d/air-max-koko-sandals-TL4Vw1.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5263d0d6-5b30-4f37-ad3f-245c9acd197f/air-max-koko-sandals-TL4Vw1.png"],
      name:"Nike Air Max Koko",
      url:"/",
      description:"Heat up the streets in the Nike Air Max Koko Sandals. With a Max Air unit in the heel, this fun platform sandal is deceptively comfortable. A thick, layered foam midsole helps provide a smooth and flexible ride while premium cord lace details on the upper lend a playful, sporty edge to your look.",
      price:9195,
      inCart:false
    },
      {id:3,
        image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5d1f1d4f-27b6-471f-a105-8797d0c93dc3/dunk-high-retro-se-shoes-Cwr9mf.png",
        images:["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/87b09ee3-9d5b-413a-8fc2-1eeed3f49d93/dunk-high-retro-se-shoes-Cwr9mf.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1b3a8dde-60e7-4201-8980-981485c09eab/dunk-high-retro-se-shoes-Cwr9mf.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1b3a8dde-60e7-4201-8980-981485c09eab/dunk-high-retro-se-shoes-Cwr9mf.png",
  "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/052bfefd-72a2-4d8f-9af6-fda7f605d157/dunk-high-retro-se-shoes-Cwr9mf.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/23c49007-81b0-4cf7-b26c-146db8cc9bac/dunk-high-retro-se-shoes-Cwr9mf.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e00375a1-a914-4be8-8f24-5be5919f680b/dunk-high-retro-se-shoes-Cwr9mf.png"],
        name:"Nike Dunk High Retro SE",
        url:"/",
        description:"Created for the hardwood but taken to the streets, the '80s b-ball icon returns with classic details and throwback hoops flair. Channelling vintage style back onto the streets, it ups your ante with a padded, high-top collar, so you can take your game anywhere—in comfort.",
        price:10795,
        inCart:false
      },
        {id:4,
          image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/79a016d7-a1dc-4720-83a9-e829ce44eee5/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
          images:["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c9a853d1-9f4c-4d69-9d0d-2d7bb885f5cf/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0308d452-8201-4f1e-9044-4e60bc4995c7/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/608d1272-75bd-4418-b56d-7f6e5dabe031/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c57e880f-e7aa-47b6-b7e4-97be9fe234cb/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
  "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/55c063d1-be3e-4ce7-80c3-29fe9268886a/air-jordan-5-retro-low-psg-shoes-bpsqMw.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f21eb70c-2319-48c9-9d78-cd46259cfa7c/air-jordan-5-retro-low-psg-shoes-bpsqMw.png"],
          name:"Air Jordan 5 Retro Low PSG",
          url:"/",
          description:"Jordan and Paris Saint-Germain come together again, this time with an update to the AJ5. This low-top pair looks fresh while featuring the best elements from the original, like lace toggles, rich leather and the iconic WWII Mustang fighter plane-inspired graphic. The stamped PSG logo on the heel subtly reps your favourite club.",
          price:18395,
          inCart:false
        },
        {
          id:5,
          image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d646b481-eece-4618-83b6-2aef6bb85047/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
          images:["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9418ec0c-18d1-4af9-b24d-4ae51cf879e8/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1146d0d8-3641-431c-a80c-e83f5ccd7c6d/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fe2307b9-a38b-4839-935a-5390d4ca48f8/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/251e205c-1d87-4881-bd0a-82d6c6b8b1a2/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
  "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/63b22cce-dc86-4192-b6da-609d463d6b8b/zoom-metcon-turbo-2-training-shoes-jPvmwl.png",
"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8c957f93-4e02-4889-b341-544f0c1a677a/zoom-metcon-turbo-2-training-shoes-jPvmwl.png"],
          name:"Nike Zoom Metcon Turbo 2",
          price:13995,
          inCart:false,
          description:"The Nike Zoom Metcon Turbo 2 puts a shot of adrenalizing speed into your everyday workout. It combines stability and responsiveness in a lightweight package to help you move quickly during circuit training, high-intensity intervals on the treadmill, a cardio workout you've squeezed in on the way home—whatever you choose. From the Zoom Air cushioning underfoot to the rope wrap at the instep, every detail is pared down to minimise weight while maximising function and durability. Lighter, stronger materials are built for speed and strength."
        },{
          id:6,
          image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c7a66d26-e3be-4035-b956-e1385c9a7450/offcourt-slides-ZBxx9j.png",
          images:["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c198cf87-8d09-4b8d-9b7b-33166e246a7d/offcourt-slides-ZBxx9j.png",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ace2c4af-b32e-47ed-99d4-d16d9f6a3f94/offcourt-slides-ZBxx9j.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c898caad-cd9a-4045-8125-058fe3c569c6/offcourt-slides-ZBxx9j.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/db7580ee-e325-4580-b59e-506a0a15dbf1/offcourt-slides-ZBxx9j.png"],
          name:"Nike Offcourt",
          price:2495,
          description:"These slides are designed to help you relax and recharge. Innovative dual-layered foam underfoot pairs with a plush strap to bring the comfort, while the iconic AF-1 pivot circle pattern on the outsole and block-letter branding casually nod to heritage hoops. What are you waiting for? Get lounging."
        }
  ]);
  const [cart, setCart] = useState([]);
  const count = useRef(0);
  const totalPrice = useRef(0);

const addToCart =(id,increment)=>{
    const newItem = products.filter((product)=>product.id===id)
    if(increment){
      count.current++
      totalPrice.current +=newItem[0].price
    }
    else {
      totalPrice.current -=newItem[0].price
      count.current--
    }

    setCart(cart=> {
      let refreshedCart =[]
      let done = false;
      for(let index = 0; index< cart.length; index++){
        if(cart[index].id === id) {
          done = true
          if(increment){
            refreshedCart.push({...cart[index],count:cart[index].count+1})
          }
          else if(cart[index].count-1>0){
            refreshedCart.push({...cart[index],count:cart[index].count-1})
          }

  
        }else{
          refreshedCart.push({...cart[index]})
        }
      }

      if(!done){     
          refreshedCart.push({...newItem[0],count:1}) 
      }
        return refreshedCart;
      })
      
  
    setProducts(products => products.map((product)=>{
    if (product.id===id){
      if(increment){
        let count = product.count || 0;
        count +=1;
        return {...product,inCart:true,count:count}
      }
      else{
        let count = product.count;
        count = count-1
        if(count>0){
          return {...product,inCart:true,count:count}
        }
        else{
          return {...product,inCart:false,count:0}
        }
      }
    }
   
    return product}));
  
}
  return (
    
    <Container maxW="container.xl" h="100vh" >
      <ProductContext.Provider value={{cart,addToCart,count,totalPrice: totalPrice.current}}>
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

export default App;
