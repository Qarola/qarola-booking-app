import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderTittle from "../../components/header/HeaderTittle";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import "./home.css";
import Footer from "../../components/footer/Footer";

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
      <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedProperties /> 
      <MailList />
  <Footer />
      </div>
    </div>
  );
};
export default Home;
