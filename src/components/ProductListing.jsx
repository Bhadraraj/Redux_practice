import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {setProducts} from '../redux/actions/ProductAction'
const ProductListing = () => {
  const products = useSelector((state) => state);
  
  const dispatch =useDispatch();

  console.log(products);
  
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error : " + err);
      });
    console.log(response.data);
    // dispatch(response.data); 
    dispatch(setProducts(response.data)); 
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>ProductListing</h1>
    </div>
  );
};

export default ProductListing;
