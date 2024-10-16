/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cta from './Cta';

const ProductCard = ({ product }) => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const toggleClick = () => setClicked(!clicked);

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        navigate("/cart");
    };

    return (
        <a href="#" className="group relative block overflow-hidden">
            <button
                className={`absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 transition hover:text-gray-900/75 ${clicked ? 'bg-red-500' : 'text-gray-900'}`}
                onClick={toggleClick}
            >
                <span className="sr-only">Wishlist</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
            </button>

            <img
                src={product.imageUrl}
                alt={product.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="mt-1.5 text-sm text-gray-700 font-medium">{product.price}</p>

                <form className="mt-4">
                    <button
                        type="button"
                        className="block w-full rounded bg-indigo-600 p-4 text-sm font-medium transition hover:scale-105"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </form>
            </div>
        </a>
    );
};

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-3 gap-8 container max-w-5xl mx-auto py-5">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

// Example usage with a list of products
const products = [
    {
      id: 1,
      name: "Iphone 12 Pro",
      price: 12000000,
      imageUrl: "https://images.unsplash.com/photo-1699892131446-3aebcff41fb1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "New"
    },
    {
      id: 2,
      name: "Laptop Asus ROG",
      price: 18000000,
      imageUrl: "https://cdn.infobrand.id/images/img/posts/2023/06/08/baru-diluncurkan-ini-spek-dan-banderol-kelima-laptor-asus-rog-terbaru.jpeg",
      badge: "New"
    },
    {
      id: 3,
      name: "PlayStation 6",
      price: 3929000,
      imageUrl: "https://pict.sindonews.net/dyn/850/pena/news/2023/03/15/123/1047001/playstation-6-segera-diluncurkan-tahun-depan-nasib-ps-5-paling-tragis-aza.jpeg",
      badge: "New"
    },
    {
      id: 4,
      name: "Charge Automotive",
      price: 5300000000000,
      imageUrl: "https://cms.dailysocial.id/wp-content/uploads/2019/07/9b6aef39b11a41dbb5ef4e7b62691486_charge-mustang-02.jpg",
      badge: "New"
    },
    {
      id: 5,
      name: "Vespa Clasik",
      price: 48500000,
      imageUrl: "https://images.pexels.com/photos/221299/pexels-photo-221299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      badge: "New"
    },
    {
      id: 6,
      name: "Honda CB Clasik",
      price: 25000000,
      imageUrl: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/1/4/99c72255-6c8e-4eb8-bdf4-9418b66b05d9.jpg",
      badge: "New"
    }
  ];

export default function App() {
    return (
        <main>
            <Cta />
            <ProductList products={products} />
        </main>
    );
}
