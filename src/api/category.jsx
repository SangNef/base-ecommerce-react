import { get, post } from "./index";

export const getCategories = async (page, page_size, id_desc) => {
  return get(`/category/get-list/page=${page}/page_size=${page_size}?id_desc=${id_desc}`);
}

export const createCategory = async (data) => {
  return post("/category/add-new", data);
}
