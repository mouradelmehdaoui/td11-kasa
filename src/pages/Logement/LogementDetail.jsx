import React, { useEffect, useContext} from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useHistory
import { Context } from "../../service/Context";

const LogementDetail = () => {
  const { id } = useParams();
  const logementId = id;
  const navigate = useNavigate(); // Initialize the useHistory hook

  const logements = useContext(Context);

  const logement = logements.find((logement) => logement.id === logementId);

  useEffect(() => {
    // Check if logement is not found and redirect to 404 page
    if (!logement) {
      navigate("/Error404"); 
    }
  }, [logement, navigate]);

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
