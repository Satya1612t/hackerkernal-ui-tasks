import Products from "./Products"
import CreateProducts from "./CreateProduct"
import { useState } from "react"

function Body({ activeMenuItem }: { activeMenuItem: string }) {
    const [products, setProducts] = useState([{
        name: 'Python Courses',
        price: '999'
    }])

    const renderContent = () => {
        switch (activeMenuItem) {
            case "Products":
                return <Products products={products} setProducts={setProducts} />
            case "Create Products":
                return <CreateProducts setProducts={setProducts} products={products} />
            case "Settings":
                return <div className="w-full border border-slate-600 text-center p-2 text-sm font-normal rounded-md">Page is currently under maintainance...</div>
            default:
                return <div></div>
        }
    }

    return (
        <div className="w-full">
            {renderContent()}
        </div>
    )
}

export default Body