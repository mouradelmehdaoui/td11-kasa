import React, { useState, useEffect } from "react";
import LogementsList from '../../components/Logements/LogementList';

const Home = () => {
  const urlAPI = "http://localhost:3000/api/estateData.json";

  const [logements, setLogements] = useState([]);

  //replace componentDidMonth
  useEffect(() => {
    fetchLogements();
  }, []);

  //Get the logements from API
  const fetchLogements = async () => {
    const response = await fetch(`${urlAPI}`);
    const data = await response.json();
    setLogements(data);
  };

  return (
    <>
      <div className="container">
        <div className="banner">
          <h1>Chez vous, partout et ailleurs</h1>
          <img
            src= {require('../../assets/images/photos/banner.png')}
            alt="Fôret et mer"
            className="banner__img"
          />
        </div>
      </div>
      <div className="mb-1rem"></div>

      <main className="container">
      <div className="logements ">{
                logements.map(( logement, index ) => (
                    <LogementsList logement={logement} key={index} index={index} />
                ))
            }</div>
      </main>
    </>
  );
};

export default Home;
