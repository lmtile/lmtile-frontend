import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = ({ product }) => {
    const { images, name, category, color,_id } = product;
    return (
        <Link to={`/singleProduct/${_id}`}>
            <div className='hover:shadow-xl shadow-2xl shadow-black  p-5 bg-base-100'>
                <div>
                    <img src={images[1]} alt="" className='' />
                    <p className='text-xl font-bold'>{name}</p>
                    <p className=''>{color}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductsPage;



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