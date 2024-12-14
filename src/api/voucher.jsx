import { get, post, put, del } from "./index";

export const getVouchers = async (page, page_size, search, end_date, id_desc) => {
  return get(`/voucher/get/page=${page}/page_size=${page_size}?search=${search}?end_date=${end_date}&id_desc=${id_desc}`);
}

export const createVoucher = async (data) => {
  return post("/voucher/create", data);
}

export const updateVoucher = async (data) => {
  return put("/voucher/update", data);
}

export const deleteVoucher = async (id) => {
  return del(`/voucher/delete/${id}`);
}