import axios from "axios";

const IMAGE_API_URL = import.meta.env.VITE_IMAGE_API_URL;

const api = axios.create({
    baseURL: IMAGE_API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
})

export const uploadImage = async (data) => {
    try {
        const response = await api.post("/upload-new", data);
        return response.data;
    } catch (error) {
        console.error("POST image error: ", error);
        throw error;
    }
}