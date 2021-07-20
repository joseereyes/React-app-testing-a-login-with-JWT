import React from "react";
import ArticlesContainer from "../articles/articlesContainer";
import AsideHome from "./asideHome";
import NavBar from "./navbar";
import VerifyAuth from "../../auth/auth";

const Home = () => {

    return (

        <div className="home-container">

            <VerifyAuth></VerifyAuth>
            <NavBar></NavBar>
            <AsideHome></AsideHome>
            <ArticlesContainer></ArticlesContainer>
        </div>

    );
}

export default Home;