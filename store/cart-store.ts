import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";


export interface CartProduct {
  id: string;
  title: string;
  price: number;
  category: string;
  discountedPrice?: number | null;
  quantity: number
  slug: string;
  number?: number | undefined | null;

}
interface CartState {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  deleteProduct: (id: string, number?: number) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(devtools(

  persist(

    (set, get) => ({

      cart: [],


      // Methods
      addProductToCart: (product) => {
        const { cart } = get();

        const productExists = cart.some((item) => item.id === product.id)

        if(product.category === 'Numbers'){
          const numberExists = cart.some((item) => item.id === product.id && item.number === product.number);
          if(!numberExists){
            set({cart: [...cart, product]})
            return;
          }
          const updatedCartProducts = cart.map((item) => {
            if(item.id === product.id && item.number === product.number){
              return {...item, quantity: item.quantity + product.quantity, number: product.number}
            }
            return item
          })
          set({ cart: updatedCartProducts })
          return;
        }

        if (!productExists) {
          set({ cart: [...cart, product] })
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + product.quantity }
          }

          return item
        })

        set({ cart: updatedCartProducts })
      },

      deleteProduct: (id, number) => {
        const {cart} = get();
        if(number === 0 || number !== undefined ){
          const newCart = cart.filter((product) => product.number !== number || product.id !== id)
          set({cart: newCart});
          return;
        }
        const newCart = cart.filter((product) => product.id !== id)
        set({cart: newCart});
      },

      clearCart: () => {
        const { cart } = get();
        set({cart: []});
      },

      updateProductQuantity: (product, quantity) => {
        const { cart } = get();
        if(product.category === 'Numbers'){
          const updatedProduct = cart.map((item) => {
            if(item.id === product.id && item.number === product.number){
              return {...item, quantity}
            }
            return item
          })
          set({cart: updatedProduct})
          return;
        }
        const updatedProduct = cart.map((item) => {
          if(item.id === product.id){
            return {...item, quantity}
          }
          return item
        })
        set({cart: updatedProduct})
        return;
      }


    })
    ,
    {
      name: 'shopping-cart'
    }
  )

))