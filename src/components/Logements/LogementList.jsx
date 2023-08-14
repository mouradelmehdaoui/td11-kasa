import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

//Return LogementsList list
//The list can be render filtered by tag
const LogementsList = ({ logement, index }) => {
  return (
    <div class="col">
    <Card
      style={{ width: "18rem" }}
      className={`logements__main fade-in-delay-${index}`}
    >
      <Link to={`/logements/${logement.id}`}>
        <Card.Img
          src={`${logement.cover}`}
          alt="Fond Logement page"
          className="logements__main__img"
        />
        <Card.Text className="logements__title">{logement.title}</Card.Text>
      </Link>
    </Card>
    </div>
  );
};

export default LogementsList;
