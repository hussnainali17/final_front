import React, { createContext, useState } from 'react'

export const ProductDataContext = createContext()


const ProductContext = ({ children }) => {

    const [product, setProduct] = useState({
        id: '',
        title: '',
        price: '',
        stock: 0,
        description: '',
        images: [],
        category: '',
        
    })

    return (
        <div>
            <ProductDataContext.Provider value={{ product, setProduct }}>
                {children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext

  