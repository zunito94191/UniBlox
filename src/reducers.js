export function cartReducers(state,action){
    switch(action.type){
        
       case "addToCart":
        let isPresent = false;
        state = state.map((kart)=>{
          if(kart.id===action.payload.id){
            isPresent = true;
            return {...kart,count:kart.count+1}
          }
          return kart;
        });
        if (!isPresent){
          state.push({...action.payload,count:1})
        }
        return state 

        case "removeFromCart":
          return state.filter((kart)=>kart.id!==action.payload.id?true:kart.count-1>0)
          .map((kart)=>{
            if(kart.id===action.payload.id){
              return {...kart,count:kart.count-1}
            }
            return kart;
          })
        default:
          return state;
    }
  }
  export function productReducers(state,action){
    switch (action.type){
      case "addToCart":
      return state.map((product)=>product.id===action.payload.id?{...product,count:product.count+1,inCart:true}:product)
      case "removeFromCart":
        return state.map((product)=>product.id===action.payload.id?{...product,count:product.count-1}:product)
      default:
        return state
    }
  }