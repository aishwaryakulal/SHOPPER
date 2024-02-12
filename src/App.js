
// // import './App.css';
// // import Navbar from './Components/Navbar/Navbar';

// // import{BrowserRouter,Routes,Route} from 'react-router-dom'
// // import ShopCategory from './Pages/ShopCategory';
// // import LoginSignup from './Pages/LoginSignup';
// // import Shop from './Pages/Shop';
// // import Product from './Pages/Product';
// // import Cart from './Pages/Cart';
// // import ShopContextProvider from './ShopContextProvider.js';

// // import Footer from './Components/Footer/Footer';
// // import kids_banner from './Components/Assets/banner_kids.png'
// // import men_banner from './Components/Assets/banner_mens.png'
// // import women_banner from './Components/Assets/banner_women.png'
// // function App() {
// //   return (
// //     <div>
// //       <BrowserRouter>
// //     <Navbar/>
// // <Routes>

// // <Route path='/' element={<Shop/>}/>
// // <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />}/>
// // <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>}/>

// // <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>



// // <Route path='/product' element={<Product/>}>

// // <Route path=':productId' element={<Product/>}/>
// // </Route>


// // <Route path='/cart' element={<Cart/>}/>

// // <Route path='/login' element={<LoginSignup/>}/>












// // <Router>
// //       <ShopContextProvider>
// //         <Routes>
// //           <Route path="/" element={<Shop />} />
// //           <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
// //           {/* ... Other routes ... */}
// //         </Routes>
// //       </ShopContextProvider>
// //     </Router>




// // </Routes>
// // <Footer/>
// //     </BrowserRouter>
    
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ShopCategory from './Pages/ShopCategory';
// import LoginSignup from './Pages/LoginSignup';
// import Shop from './Pages/Shop';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import ShopContextProvider from './ShopContextProvider.js';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// import kids_banner from './Components/Assets/banner_kids.png';
// import men_banner from './Components/Assets/banner_mens.png';
// import women_banner from './Components/Assets/banner_women.png';

// import './App.css';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Shop />} />
//           <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
//           <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
//           <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
//           <Route path='/product' element={<Product />}>
//             <Route path=':productId' element={<Product />} />
//           </Route>
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/login' element={<LoginSignup />} />
//           <Route path='/'>
//             <ShopContextProvider>
//               <Routes>
//                 <Route path="/" element={<Shop />} />
//                 <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
//                 {/* ... Other routes ... */}
//               </Routes>
//             </ShopContextProvider>
//           </Route>
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import ShopCategory from './Pages/ShopCategory';
// import LoginSignup from './Pages/LoginSignup';
// import Shop from './Pages/Shop';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// import kids_banner from './Components/Assets/banner_kids.png';
// import men_banner from './Components/Assets/banner_mens.png';
// import women_banner from './Components/Assets/banner_women.png';

// import './App.css';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Shop />} />
//           <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
//           <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
//           <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
//           <Route path='/product' element={<Product />}>
//             <Route path=':productId' element={<Product />} />
//           </Route>
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/login' element={<LoginSignup />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ShopContextProvider from './Context/ShopContext';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import kids_banner from './Components/Assets/banner_kids.png';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </Router>
    </div>
  );
}

export default App;
