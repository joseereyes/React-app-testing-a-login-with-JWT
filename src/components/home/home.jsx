import React from "react";
import ArticlesContainer from "../articles/articlesContainer";
import AsideHome from "./asideHome";
import NavBar from "./navbar";


const Home = () => {

    return (

        <div className="home-container">
            <NavBar></NavBar>
            <AsideHome></AsideHome>
            <ArticlesContainer></ArticlesContainer>
        </div>

    );
}

export default Home;