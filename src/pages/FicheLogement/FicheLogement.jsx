import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";
import getLogementByID from "../../service/logementService";

export default function FicheLogement() {
  const params = useParams();
  const navigate = useNavigate();
  const [pickedAppart, setPickedAppart] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const picked = await getLogementByID(params.id); // Use the external function
        setPickedAppart(picked);
      } catch (error) {
        navigate("/404", { state: { message: error.message } });
      }
    };
    getData();
  }, [params.id, navigate]);

  const slidePics = pickedAppart && pickedAppart.pictures;
  const tags = pickedAppart && pickedAppart.tags;
  const equipments = pickedAppart && pickedAppart.equipments;
  const equip =
    pickedAppart &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ));
  return (
    pickedAppart && (
      <div key={params.id} className="fiche-container">
        <Carrousel slides={slidePics} />
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{pickedAppart.title}</h1>
              <h3>{pickedAppart.location}</h3>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                hostName={pickedAppart.host.name}
                hostPic={pickedAppart.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={pickedAppart.rating} />
            </div>
          </div>
        </section>
        <div className="row collapse-fiche-container">
          <div className="col-6 description">
            <Collapse
              aboutTitle="Description"
              aboutText={pickedAppart.description}
            />
          </div>
          <div className="col-6 equipement">
            <Collapse aboutTitle="Équipements" aboutText={equip} />
          </div>
        </div>
      </div>
    )
  );
}
