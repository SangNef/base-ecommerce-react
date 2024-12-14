import { get, post, put } from "./index"

export const getProducts = async (page, page_size, search, min_price, max_price, categpry_id, id_desc) => {
  return get(`/product/get-list/page=${page}/page_size=${page_size}?search=${search}&min_price=${min_price}&max_price=${max_price}&category_id=${categpry_id}&id_desc=${id_desc}`);
}

export const createProduct = async (data) => {
  return post("/product/add-new", data);
}

export const updateProduct = async (data) => {
  return put("/product/update", data);
}