import axios from "axios";

//Type
import { Value } from "@/components/content/ModalCreate";


//Create Product
export const createProduct = async (value:any) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API}/api/product`, value)
}

//Create Product
export const updateProduct = async (value:any, id:string) => {
    return await axios.put(`${process.env.NEXT_PUBLIC_API}/api/product/${id}`, value)
}