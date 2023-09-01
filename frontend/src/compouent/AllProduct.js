import React, { useEffect, useState } from 'react';
import FilterProduct from './FilterProduct';
import CartFeature from './CartFeature';
import { useSelector } from 'react-redux';

const AllProduct = ({ heading }) => {
    
  // Get product data from Redux store
  const productData = useSelector((state) => state.product.productList);

  // Initialize dataFilter with the initial productData
  const [dataFilter, setDataFilter] = useState(productData);

  // Function to filter products by category
  const handleFilterProduct = (category) => {
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter([...filter]);
  };
  useEffect(()=>{
    setDataFilter(productData)
    },[productData])

  // Extract unique categories from productData
  const categoryList = [...new Set(productData.map((el) => el.category))];

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] &&
          categoryList.map((el) => {
            return (
              <FilterProduct
                key={el}
                category={el}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter.map((el) => {
          return (
            <CartFeature
              key={el._id}
              id={el._id}
              name={el.name}
              category={el.category}
              price={el.price}
              image={el.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
