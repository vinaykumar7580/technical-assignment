import * as types from "./actionTypes";
import axios from "axios";

const getProducts = (payload) => {
  return {
    type: types.GETALLPRODUCTS,
    payload,
  };
};

const getSingleProduct = (payload) => {
  return {
    type: types.GETSINGLEPRODUCT,
    payload,
  };
};

export const handleAllProducts = (dispatch) => {
  axios
    .get(`https://fakestoreapi.com/products`)
    .then((res) => {
      dispatch(getProducts(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleSingleProduct = (id) => (dispatch) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      dispatch(getSingleProduct(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
