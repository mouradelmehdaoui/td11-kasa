import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useHistory
import { Context } from "../../service/Context";
import Carrousel from "./Carrousel";
import Rates from "./Rates";
import { Collapse, Button } from "react-bootstrap";

const LogementDetail = () => {
  const { id } = useParams();
  const logementId = id;
  const navigate = useNavigate(); // Initialize the useHistory hook

  const logements = useContext(Context);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  const logement = logements.find((logement) => logement.id === logementId);

  console.log(logement);

  useEffect(() => {
    // Check if logement is not found and redirect to 404 page
    if (!logement) {
      navigate("/Error404");
    }
  }, [logement, navigate]);

  return (
    <>
      <div className="container">
        <div className="row">
          <Carrousel pictures={logement.pictures} className="col-sm-12" />
        </div>

        <div className="row">
          <div className="col-md-8">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <div className="col-md-4">
            <p>{logement.host.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {logement.tags.map((item, index) => (
              <Button key={index} variant="danger">
                {item}
              </Button>
            ))}
          </div>
          <div className="col-md-4">
            <Rates logementRates={logement.rating} />
          </div>
        </div>

        <div className="row">
      <div className="col-md-6">
        <button
          className="btn btn-link"
          onClick={() => setShowDescription(!showDescription)}
        >
          Toggle Description
        </button>
        <Collapse in={showDescription}>
          <p>{logement.description}</p>
        </Collapse>
      </div>
      <div className="col-md-6">
        <button
          className="btn btn-link"
          onClick={() => setShowEquipments(!showEquipments)}
        >
          Toggle Equipments
        </button>
        <Collapse in={showEquipments}>
          <p>{logement.equipments}</p>
        </Collapse>
      </div>
    </div>
      </div>
    </>
  );
};

export default LogementDetail;
