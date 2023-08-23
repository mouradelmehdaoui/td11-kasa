import { React, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../service/Context";

const LogementDetail = () => {
  const { id } = useParams();
  const logementId = id;

  const logements = useContext(Context); // Use the useContext hook to access the context data

  const logement = logements.find((logement) => logement.id === logementId);


  console.log(logements);
  console.log(logementId);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={logement.cover}
            alt={`Cover for ${logement.title}`}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{logement.title}</h2>
          <p>{logement.description}</p>
          {/* Add more details */}
        </div>
      </div>
    </div>
  );
};

export default LogementDetail;
