import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const productStore = create(devtools((set) => ({
    productList : [],
    detailProduct : null,
    searchedProduct : [], 
    queryString : "",
    error : "",

    fetchProducts : async() => {
        try {
            let url = "https://my-json-server.typicode.com/chocozzangzzang/choco-todays-house/products";
            let response = await axios.get(url);
            let data = response.data;
            set(() => ({productList : data}));
        } catch (e) {
            set(() => ({ error : e.message }))
        }
    },

    getProductDetail : async(id) => {
        try {
            let url = `https://my-json-server.typicode.com/chocozzangzzang/choco-todays-house/products/${id}`;
            let response = await axios.get(url);
            let data = response.data;
            set(() => ({detailProduct : data}));
        } catch(e) {
            set(() => ({ error : e.message}));
        }
    },

    searchProducts : async(searchQuery) => set((state) => ({
        searchedProduct : state.productList.filter((product) => product.title.includes(searchQuery)),
        queryString : searchQuery,
    }))
})))