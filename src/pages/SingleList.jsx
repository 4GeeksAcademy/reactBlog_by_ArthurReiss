import React from "react";
import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const SingleList = () => {
  const { store } = useGlobalReducer();
  const { type } = useParams();

  let dataToRender = [];
  let pageTitle = "";
  if (type === "character") {
    dataToRender = store.characters;
    pageTitle = "Personajes";
  } else if (type === "location") {
    dataToRender = store.locations;
    pageTitle = "Ubicaciones";
  } else if (type === "episode") {
    dataToRender = store.episodes;
    pageTitle = "Episodios";
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="page_3 bg-dark bg-opacity-50">
        <h1 className="text-white m-3">{pageTitle}</h1>
        <div className="row justify-content-center g-4">
          {dataToRender && dataToRender.length > 0 ? (
            dataToRender.map((item) => (
              <div className="card mx-2 mb-3 col-auto" key={item.id}>
                <img
                  className="card-img-top imgCard"
                  src={
                    item.image ||
                    "https://thumbs.dreamstime.com/b/portal-en-el-espacio-otros-universos-sobre-vector-de-fondo-negro-aislado-252551834.jpg"
                  }
                  alt={item.name}
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title text-truncate" title={item.name}>
                    {item.name}
                  </h4>
                  {type === "character" && (
                    <>
                      <p className="card-text mb-1">Especie: {item.species}</p>
                      <p className="card-text">Estado: {item.status}</p>
                    </>
                  )}
                  {type === "location" && (
                    <>
                      <p className="card-text mb-1">Tipo: {item.type}</p>
                      <p className="card-text">Dimensión: {item.dimension}</p>
                    </>
                  )}
                  {type === "episode" && (
                    <>
                      <p className="card-text mb-1">Episodio: {item.episode}</p>
                      <p className="card-text">Emisión: {item.air_date}</p>
                    </>
                  )}
                  <div className="mt-auto pt-3 text-center">
                    <Link
                      to={`/SingleItem/${type}/${item.id}`}
                      className="btn btn-primary w-100"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="spinner-border text-light my-5" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleList;
