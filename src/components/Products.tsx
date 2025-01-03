import { useState } from "react"
import { TABLE_HEADER } from "../utils/config"
import { ProductsDetailedProps } from "../utils/types"

function Products({ products, setProducts }: ProductsDetailedProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleDeleteProduct = (name: string) => {
    const updatedList = products.filter(product => product.name !== name)
    setProducts(updatedList)
  }

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <div className=" space-y-5 h-full overflow-scroll">
        <div className="w-full">
          <input className="w-full focus:outline-none p-2 placeholder:text-gray-500 rounded-md" type="text" placeholder="Search here..." onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <table className="min-w-full border-collapse border shadow-lg border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {TABLE_HEADER.map((val: string, index) => (
                <th key={index} className={`${index === TABLE_HEADER.length - 1 ? "text-end" : "text-left"} px-4 py-2  text-sm font-medium text-gray-700 border border-gray-200`} >
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length === 0 ?
              <tr className="text-center bg-white"><td className="py-2 text-xs font-semibold" colSpan={TABLE_HEADER.length}>No Products Found</td></tr>
              : filteredProducts.map((item, index) => (
                <tr className={index % 2 === 0 ? "odd:bg-white" : "even:bg-gray-100"} key={index}>
                  <td className="px-4 py-2 text-sm text-gray-900 border border-gray-200">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm capitalize text-gray-900 border border-gray-200">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 border border-gray-200">
                    &#8377; {item.price}
                  </td>
                  <td className="px-4 py-2 text-sm text-end text-gray-900 border border-gray-200">
                    <button onClick={() => handleDeleteProduct(item.name)} className="px-2 py-1 ml-2 font-medium text-xs text-white bg-red-800 rounded hover:bg-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default Products