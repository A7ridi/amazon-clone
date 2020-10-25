export const initialState = {
  basket: [
    // {
    //   id:"45456567",
    //   title:"HP 15 10th Gen Intel Core i5 Processor 15.6-inch FHD Laptop (8GB/1TB HDD/Win 10 Home/)",
    //   price:999.00,
    //   rating:4,
    //   image:"https://c.s-microsoft.com/en-us/CMSImages/1083_Panel1_Hero_Laptop.jpg?version=bf45ebfb-eeae-5be9-d5a4-f7fcc36c7215"
    // },
    // {
    //   id:"45456567",
    //   title:"HP 15 10th Gen Intel Core i5 Processor 15.6-inch FHD Laptop (8GB/1TB HDD/Win 10 Home/)",
    //   price:999.00,
    //   rating:4,
    //   image:"https://c.s-microsoft.com/en-us/CMSImages/1083_Panel1_Hero_Laptop.jpg?version=bf45ebfb-eeae-5be9-d5a4-f7fcc36c7215"
    // },
  ],
  user: null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'ADD_TO_BASKET':
      return { 
        ...state,
        basket: [...state.basket, action.item],  
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }
  
    case 'REMOVE_FROM_BASKET':
      // Removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove item`
        )
      }

      return { 
        ...state,
        basket: newBasket,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}

export default reducer;