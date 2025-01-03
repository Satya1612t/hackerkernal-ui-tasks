import { ChangeEvent } from "react";

export interface ProductsProps {
    name: string;
    price: string;
}

export interface ProductsDetailedProps {
    products: ProductsProps[];
    setProducts: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
}

export interface LabelInputProps {
    name: string;
    type?: string;
    placeholder: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ActiveMenuItemProps {
    activeMenuItem?: string;
    setActiveMenuItem: React.Dispatch<React.SetStateAction<string>>
}

export interface QuoteProps {
        text: string;
        author: string;
        role: string;
};