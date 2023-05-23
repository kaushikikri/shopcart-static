import { useTitle } from "../hook/useTitle"
import { Cartcard } from "../components";
// import { Context } from "../context/CartContext";
// import { useContext } from "react";

export const Cart = ({ title }) => {
  useTitle(title);

  const products = [
    {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/1001.png",}, 
    {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/1002.png",}, 
  ]

  return (
    <main>

      <div className="flex flex-col justify-center items-center my-7">

        <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Cart Items:2 / $199</h2>

        <div className="w-full my-5">

          {products.map((product) => (<Cartcard key={product.id} product={product} />))}


        </div>

      </div>

    </main>
  )
}
