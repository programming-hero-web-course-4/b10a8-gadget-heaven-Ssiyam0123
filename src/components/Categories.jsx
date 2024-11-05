// /* eslint-disable react/prop-types */

// import { NavLink } from "react-router-dom";
// import AllCards from "./AllCards";
// import Card from "./Card";
// import { useEffect, useState } from "react";
// export default function Categories({ categories }) {
//   const [buttons, setButtons] = useState([]);
// console.log(buttons)
// useEffect(() => {
//   fetch('../category.json')
//       .then((res) => res.json())
//       .then((data) => setButtons(data)); // Assume data is an array here
// }, []);

// return (
//   <div className="sm:grid sm:grid-cols-1 p-4 rounded-2xl bg-white">
//       {buttons.map((ctg) => (
//           <NavLink 
//               key={ctg.categoryId}
//               to={`/category/${ctg.categoryName}`}
//               className='btn mb-3 hover:bg-[#9538E2] rounded-full hover:text-white'
//           >
//               {ctg.categoryName}
//           </NavLink>
//       ))}
//   </div>
// );

// }



















// import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function Categories() {
//   const [buttons, setButtons] = useState([]);

//   useEffect(() => {
//     fetch('../category.json')
//       .then((res) => res.json())
//       .then((data) => setButtons(data));
//   }, []);

//   return (
//     <div className="sm:grid sm:grid-cols-1 p-4 rounded-2xl bg-white">
//       {buttons.map((ctg) => (
//         <NavLink 
//           key={ctg.categoryId}
//           to={`/category/${ctg.categoryName.toLowerCase()}`} // Ensure category name is lowercase in the URL
//           className='btn mb-3 hover:bg-[#9538E2] rounded-full hover:text-white'
//         >
//           {ctg.categoryName}
//         </NavLink>
//       ))}
//     </div>
//   );
// }





















import { NavLink } from "react-router-dom";
;

export default function Categories({categories}) {

  return (
    <div className="sm:grid sm:grid-cols-1 p-4 rounded-2xl bg-white">

          <NavLink to={'/'} className='btn mb-3 hover:bg-[#9538E2] rounded-full hover:text-white'>All Products</NavLink>
      {categories.map((ctg) => (
        <NavLink 
          key={ctg.categoryId}
          to={`/category/${ctg.categoryName}`} 
          className='btn mb-3 hover:bg-[#9538E2] rounded-full hover:text-white'
        >
          {ctg.categoryName}
        </NavLink>
      ))}
    </div>
  );
}
