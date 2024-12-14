import AdminLayout from "~/layouts/AdminLayout";
import AdminProduct from "~/pages/admin/product/AdminProduct";
import AdminLogin from "../pages/admin/auth/AdminLogin";
import AdminCategory from "~/pages/admin/category/AdminCategory";
import AdminVoucher from "~/pages/admin/voucher/AdminVoucher";

const routes = [
    {
        path: "/admin/login",
        Component: AdminLogin,
    },
    {
        path: "/admin/products",
        Component: AdminProduct,
        Layout: AdminLayout,
    },
    {
        path: "/admin/categories",
        Component: AdminCategory,
        Layout: AdminLayout,
    },
    {
        path: "/admin/vouchers",
        Component: AdminVoucher,
        Layout: AdminLayout,
    }
]

export default routes;