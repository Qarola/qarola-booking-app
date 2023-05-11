import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderTittle from "../../components/header/HeaderTittle";
import "./home.css";
import Header from "../../components/header/Header";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <HeaderTittle />
        </div>
    )
}
export default Home;