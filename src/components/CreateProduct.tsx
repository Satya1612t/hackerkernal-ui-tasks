import { useState } from "react";
import toast from "react-hot-toast";
import { ProductsProps, ProductsDetailedProps } from "../utils/types";
import LabelInput from "./LabelInput";

export default function CreateProduct({ setProducts, products }: ProductsDetailedProps) {
    const [productInputs, setProductInputs] = useState<ProductsProps>({ name: "", price: "" });

    const handleAddProduct = () => {
        const isDuplicate = products.some(product => product.name === productInputs.name)

        if (!productInputs.name || !productInputs.price) {
            toast.error('please fill in both fields')
        }
        else if (isDuplicate) {
            toast.error('product already present')
        }
        else {
            setProducts([...products, productInputs]);
            setProductInputs({ name: "", price: "" });
            toast.success('Successfully Added');
        }
    };

    return (
        <div className="w-full border flex justify-center items-center h-[calc(100vh-80px)]">
            <div className="max-w-80 text-wrap text-left py-4 px-8 border border-gray-400 rounded-md hover:shadow-md">
                <h1 className="text-black  font-bold text-2xl mb-2 ">Add a product</h1>
                <div className="space-y-3">

                    <LabelInput
                        name="Name"
                        placeholder="Enter product name"
                        value={productInputs.name}
                        onChange={(e) =>
                            setProductInputs({ ...productInputs, name: e.target.value })
                        }
                    />
                    <LabelInput
                        name="Price"
                        placeholder="Enter product price"
                        value={productInputs.price}
                        onChange={(e) =>
                            setProductInputs({ ...productInputs, price: e.target.value })
                        }
                    />
                    <button
                        className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-xs px-3 py-2  me-2 "
                        onClick={handleAddProduct}
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}


