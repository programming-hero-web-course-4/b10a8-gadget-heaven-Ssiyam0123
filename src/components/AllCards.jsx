// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import Card from "./Card";

// export default function AllCards() {
//   const data = useLoaderData();

//   const { categoryName } = useParams();


//   const [products, setProducts] = useState([]);
//   console.log(products);

//   useEffect(() => {
//     const filteredByCaategory = [...data].filter(
//       (product) => product.category === categoryName
//     );
//     setProducts(filteredByCaategory);
//   }, [categoryName, data]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//       {data.map((product, i) => (
//         <Card key={i} product={product}></Card>
//       ))}
//     </div>
//   );
// }

// // import React, { useEffect, useState } from 'react';
// // import { useLoaderData, useParams } from 'react-router-dom';
// // import Card from './Card';

// // export default function AllCards() {
// //   const data = useLoaderData();
// //   const { category } = useParams();
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     const filteredByCategory = data.filter(product => product.category === category);
// //     setProducts(filteredByCategory);
// //   }, [category, data]);

// //   return (
// //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
// //       {products.map((product, i) => (
// //         <Card key={i} product={product} />
// //       ))}
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import Card from './Card';

// export default function AllCards() {
//   const data = useLoaderData();
//   const { category } = useParams(); // Expect category to be lowercase

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Filter products based on category parameter
//     const filteredByCategory = data.filter(product => product.category.toLowerCase() === category.toLowerCase());
//     setProducts(filteredByCategory);
//   }, [category, data]);

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//       {products.map((product, i) => (
//         <Card key={i} product={product} />
//       ))}
//     </div>
//   );
// }











// const [products, setProducts] = useState([]);
// console.log(products);

// useEffect(() => {
//   const filteredByCaategory = [...data].filter(
//     (product) => product.category === categoryName
//   );
//   setProducts(filteredByCaategory);
// }, [categoryName, data]);





// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import Card from './Card';

// export default function AllCards() {
//   const data = useLoaderData();
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (data) {
//       const filteredProducts =  [...data].filter(product => product.category.toLowerCase() === category.toLowerCase());
//       setProducts(filteredProducts);
//     }
//     else{
//       setProducts(data)
//     }
//   }, [category, data]);

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//       {
//         products.map((product, i) => <Card key={i} product={product} />)
//       }
//     </div>
//   );
// }














import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

export default function AllCards() {
  const data = useLoaderData(); // Load all products data
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      // If category is provided, filter by category; otherwise, use all data
      const filteredProducts = category 
        ? data.filter(product => product.category.toLowerCase() === category.toLowerCase())
        : data; // Show all products if no category
      setProducts(filteredProducts);
    }
  }, [category, data]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {products.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </div>
  );
}



