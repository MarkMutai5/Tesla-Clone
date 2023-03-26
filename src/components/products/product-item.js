import Image from "next/image";
import React from "react";

const ProductItem = (props) => {
  const { product } = props;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${product.image})` }}
        className="flex bg-center bg-cover justify-center h-screen snap-start snap-always"
      >
        <div className="text-center  pt-28">
          <h1 className="text-4xl font-semibold">{product?.name}</h1>
          <p className="text-1xl">{product?.desc}</p>
          <div className="justify-between flex md:space-x-8  space-x-4 sm:pt-80 pt-96 md:mt-4 mt-20">
            <button className="sm:px-28 px-10 sm:py-4 py-4 bg-black text-white">Custom Order</button>
            <button className="sm:px-28 px-10 sm:py-4 py-4 bg-gray text-black">Demo Drive</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
