import React from 'react'

export default function Profile() {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
    { id: 6, name: 'Product 6', price: 600 },
    { id: 7, name: 'Product 7', price: 700 },
    { id: 8, name: 'Product 8', price: 800 },
    { id: 9, name: 'Product 9', price: 900 },
    { id: 10, name: 'Product 10', price: 1000 },
];


  return (
    <div className='w-1/2 h-full mx-auto '>
      <div className='font-bold text-3xl mt-20'>UserName</div>
      <hr />
      <div className='font-bold text-xl mt-5'>Products purchase history</div>
      <div className='mt-10'>
        {products.map((product) => (
          <div key={product.id} className='flex justify-between border-b-2 p-3 m-2 bg-gray-300 '>
            <div>{product.name}</div>
            <div>Price: {product.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
