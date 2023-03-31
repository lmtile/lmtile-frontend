import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/axios';


const ProductsCard = ({ products }) => {
    const { cover_image, name, color,_id } = products;

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this product');
        if (proceed) {
            axios.delete(`/api/product/product/:${id}`, products,{
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "delete product",
        },
      })
                .then((response) => {
                    console.log('Product Delete:', response.data);
                })
                .catch((error) => {
                    console.error('Error deleting product:', error);
                });
        }
    }
    return (
        <div className='hover:shadow-xl shadow-2xl shadow-black bg-base-100'>
            <div className='flex justify-between mb-5 p-2'>
                <img src={cover_image} alt="" className='w-[50px]' />
                <p className='text-xl- font-bold'>{name}</p>
                <p className='text-xl- font-bold'>{color}</p>
                <div>
                    <button onClick={() => handleDelete(_id)} className='btn btn-outline mr-5'>Delete</button>
                    <Link><button className='btn btn-outline '>Edit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;



// import React, { useState } from 'react';

// const ProductFilter = ({ products }) => {
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [colorFilter, setColorFilter] = useState('');

//     const filteredProducts = products.filter((product) => {
//         if (categoryFilter && product.category !== categoryFilter) {
//             return false;
//         }
//         if (colorFilter && !product.colors.includes(colorFilter)) {
//             return false;
//         }
//         return true;
//     });

//     return (
//         <div>
//             <h2>Product Filter</h2>
//             <div>
//                 <label htmlFor="categoryFilter">Filter by category:</label>
//                 <input type="text" id="categoryFilter" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} />
//             </div>
//             <div>
//                 <label htmlFor="colorFilter">Filter by color:</label>
//                 <input type="text" id="colorFilter" value={colorFilter} onChange={(e) => setColorFilter(e.target.value)} />
//             </div>
//             <ul>
//                 {filteredProducts.map((product) => (
//                     <li key={product.id}>
//                         {product.name} ({product.category}, {product.colors.join(', ')})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductFilter;