import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { useCart } from "../context/CartContext";
import { placeOrder } from "../services/orderService";

import "../styles/cart.css";

function Cart() {

    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            alert("Please login first.");

            navigate("/login");

        }

    }, [navigate]);

    const {

        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice

    } = useCart();

    const handleCheckout = async () => {

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        const customerName = localStorage.getItem("name");

        const email = localStorage.getItem("email");

        const phone = prompt("Enter your Phone Number");

        if (!phone) {

            alert("Phone Number is required.");

            return;

        }

        try {

            for (const item of cart) {

                const order = {

                    customerName,

                    email,

                    phone,

                    foodName: item.name,

                    quantity: item.quantity,

                    price: item.price

                };

                await placeOrder(order);

            }

            alert("Order Placed Successfully!");

            clearCart();

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

            alert("Failed to Place Order.");

        }

    };

    return (

        <MainLayout>

            <div className="cart-page">

                <h1>Your Cart</h1>

                {

                    cart.length === 0 ? (

                        <p className="empty-cart">

                            Your cart is empty.

                        </p>

                    ) : (

                        <>

                            {

                                cart.map((item) => (

                                    <div
                                        className="cart-item"
                                        key={item.id}
                                    >

                                        <div className="cart-left">

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />

                                            <div className="cart-details">

                                                <h3>{item.name}</h3>

                                                <p>₹{item.price}</p>

                                                <small>{item.desc}</small>

                                            </div>

                                        </div>

                                        <div className="quantity-box">

                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                            >
                                                -
                                            </button>

                                            <span>

                                                {item.quantity}

                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                        <div className="cart-price">

                                            ₹{item.price * item.quantity}

                                        </div>

                                        <button
                                            className="remove-btn"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >

                                            Remove

                                        </button>

                                    </div>

                                ))

                            }

                            <div className="cart-summary">

                                <h2>

                                    Total : ₹{totalPrice}

                                </h2>

                                <button
                                    className="checkout-btn"
                                    onClick={handleCheckout}
                                >

                                    Place Order

                                </button>

                            </div>

                        </>

                    )

                }

            </div>

        </MainLayout>

    );

}

export default Cart;