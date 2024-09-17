import React from "react"
import './App.css'

//Importing Componenets here...
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import Destinations from "./Components/Destinations/Destinations";
import Guide from "./Components/Guide/Guide";
import Sponsors from "./Components/Sponsors/Sponsors";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

function App(){
  return (
    <div>
      <Header />
      <Home />
      <Categories />
      <Destinations />
      <Guide />
      <Sponsors />
      <Subscribe />
      <Footer /> 
  </div>
  );
}

export default App;