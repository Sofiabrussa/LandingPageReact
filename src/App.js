/* eslint-disable no-unreachable */
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Products from "./components/Productos/Products";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero></Hero>
        <Categories></Categories>
        <Products></Products>
      </Layout> 
      <Footer></Footer>
    </>
  )


}

export default App