import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [product, setProduct] = useState(""); // State to store the current product data
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cart"));
        console.log('Data from localStorage:', data); // Debug: Display data from localStorage
        if (data) {
            setProduct(data); // Save product data to state
        } else {
            console.log('No product data found in localStorage.');
        }
    }, []);

    // If no product is found in localStorage, show a fallback message
    if (!product) {
        return <p>Product not found in cart.</p>;
    }

    const close = () => {
        localStorage.removeItem("cart");
        navigate("/");
    };

    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem("cart-product")) || [];

        // Add the new product to the existing cart array
        const updatedCart = [...existingCart, product];

        // Save the updated cart array back to localStorage
        localStorage.setItem("cart-product", JSON.stringify(updatedCart));
    };

    return (
        <main className="flex justify-center my-8">
            <a href="#" className="group relative block overflow-hidden rounded-md">
                <button
                    className={`absolute end-4 top-4 z-10 rounded-s-full rounded-r-full bg-white p-1.5 transition hover:text-gray-900/75`}
                    onClick={close}
                >
                    X
                </button>

                <img
                    src={product[0].imageUrl}
                    alt={product[0].name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                    <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
                    <h3 className="mt-4 text-lg font-bold text-gray-900">{product[0].name}</h3>
                    <p className="mt-1.5 text-sm text-gray-700 font-medium">{product[0].price}</p>

                    <form className="mt-4">
                        <button
                            type="button"
                            className="block w-full rounded bg-indigo-600 p-4 text-sm font-medium transition hover:scale-105"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </form>
                </div>
            </a>
        </main>
    );
}

export default Cart;
