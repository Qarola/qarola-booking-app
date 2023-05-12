import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderTittle from "../../components/header/HeaderTittle";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HeaderTittle />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList />
      </div>
    </div>
  );
};
export default Home;
