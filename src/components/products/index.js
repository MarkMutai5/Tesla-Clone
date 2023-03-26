import React from "react";
import ProductItem from "./product-item";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Model 3",
      image: "/static/Homepage-Model-3-Desktop-LHD.jpeg",
      desc: "Leasing starting at $349/mo",
    },
    {
      id: 2,
      name: "Model Y",
      image: "/static/Homepage-Model-Y-Global-Desktop.jpeg",
      desc: "",
    },
    {
      id: 3,
      name: "Model S",
      image: "/static/Homepage-Model-S-Desktop-LHD.jpeg",
      desc: "Schedule a demo drive",
    },
    {
      id: 4,
      name: "Model X",
      image: "/static/Homepage-Model-X-Desktop-LHD.jpeg",
      desc: "Schedule a demo drive",
    },
    {
      id: 5,
      name: "Solar Panels",
      image: "/static/_25-HP-SolarPanels-D.jpeg",
      desc: "Lowest Cost Solar Panels in America",
    },
    {
      id: 6,
      name: "Solar Roof",
      image: "/static/Homepage-SolarRoof-Desktop-Global.jpeg",
      desc: "Produce Clean Energy From Your Roof",
    },
    {
      id: 5,
      name: "Accessories",
      image: "/static/dd739764-bcaa-4263-9488-8c73bc9fb046.jpeg",
      desc: "",
    },
  ];

  return (<>
    <div className="flex flex-col">
        {products?.map((product) => (
          <div key={product.id}>
          <ProductItem  {...{product}}/>
          </div>
        ))}
    </div>
  </>);
};

export default Products;
