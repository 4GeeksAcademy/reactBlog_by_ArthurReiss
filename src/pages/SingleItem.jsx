import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../index.css";

const SingleItem = () => {
  const { store } = useGlobalReducer();
  const { type, theId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (type === "character") {
      setItem(store.characters.find((c) => c.id === parseInt(theId)));
    } else if (type === "location") {
      setItem(store.locations.find((c) => c.id === parseInt(theId)));
    } else if (type === "episode") {
      setItem(store.episodes.find((c) => c.id === parseInt(theId)));
    }
  }, [store, type, theId]);

  if (!item) return <div className="text-white text-center mt-5 fs-3">Cargando datos del portal...</div>;

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="page_2 d-flex p-5 mb-4 bg-dark bg-opacity-50 rounded-3">
        <img
          src={
            item.image ||
            "https://thumbs.dreamstime.com/b/portal-en-el-espacio-otros-universos-sobre-vector-de-fondo-negro-aislado-252551834.jpg"
          }
          className="img-fluid imgJumbo rounded-top me-4"
          alt={item.name}
          style={{ objectFit: "cover", minWidth: "300px" }}
        />

        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-white">{item.name}</h1>
          <p className="col-md-8 text-white fs-4">
            Explora los detalles de este{" "}
            {type === "character"
              ? "personaje"
              : type === "location"
                ? "lugar"
                : "episodio"}{" "}
            del universo de Rick and Morty.
          </p>
          <div className="d-flex stacks">
            {type === "character" && (
              <>
                <div className="card text-center mx-2">
                  <div className="card-body">
                    <h4 className="card-title">Estado</h4>
                    <p className="card-text">{item.status}</p>
                  </div>
                </div>
                <div className="card text-center mx-2">
                  <div className="card-body">
                    <h4 className="card-title">Género</h4>
                    <p className="card-text">{item.gender}</p>
                  </div>
                </div>
                <div className="card text-center mx-2">
                  <div className="card-body">
                    <h4 className="card-title">Especie</h4>
                    <p className="card-text">{item.species}</p>
                  </div>
                </div>
              </>
            )}
            {type === "location" && (
              <>
                <div className="card text-center mx-2">
                  <div className="card-body">
                    <h4 className="card-title">Tipo</h4>
                    <p className="card-text">{item.type}</p>
                  </div>
                </div>
                <div className="card text-center mx-2">
                  <div className="card-body">
                    <h4 className="card-title">Dimensión</h4>
                    <p className="card-text">{item.dimension}</p>
                  </div>
                </div>
              </>
            )}
            {type === "episode" && (
              <>
                <div className="card text-center mx-2">
                  <div className="card-body">
                    <h4 className="card-title">Episodio</h4>
                    <p className="card-text">{item.episode}</p>
                  </div>
                </div>
                <div className="card text-center mx-2">
                  <div className="card-body">
                    <h4 className="card-title">Emisión</h4>
                    <p className="card-text">{item.air_date}</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <Link to="/" className="btn btn-outline-light mt-4">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
