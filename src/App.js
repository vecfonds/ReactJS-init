import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

// <div className="container-fluid">
//   <div className="row">
//     <div className="col-2 bg-dark min-height-100vh">
//       <Sidebar />
//     </div>
//     <main className="col-10">
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/customers" element={<Customers />} />
//       </Routes>
//     </main>
//   </div>
// </div>
