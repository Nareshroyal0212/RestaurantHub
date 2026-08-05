import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {

        const existing = cart.find(

            food => food.id === item.id

        );

        if (existing) {

            setCart(

                cart.map(food =>

                    food.id === item.id

                        ? {

                            ...food,

                            quantity: food.quantity + 1

                        }

                        : food

                )

            );

        }

        else {

            setCart([

                ...cart,

                {

                    ...item,

                    quantity: 1

                }

            ]);

        }

    };

    const removeFromCart = (id) => {

        setCart(

            cart.filter(

                item => item.id !== id

            )

        );

    };

    const increaseQuantity = (id) => {

        setCart(

            cart.map(item =>

                item.id === id

                    ? {

                        ...item,

                        quantity: item.quantity + 1

                    }

                    : item

            )

        );

    };

    const decreaseQuantity = (id) => {

        setCart(

            cart.map(item =>

                item.id === id

                    ? {

                        ...item,

                        quantity: item.quantity - 1

                    }

                    : item

            ).filter(item => item.quantity > 0)

        );

    };

    const clearCart = () => {

        setCart([]);

    };

    const totalPrice = cart.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0

    );

    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                removeFromCart,

                increaseQuantity,

                decreaseQuantity,

                clearCart,

                totalPrice

            }}

        >

            {children}

        </CartContext.Provider>

    );

}

export function useCart() {

    return useContext(CartContext);

}