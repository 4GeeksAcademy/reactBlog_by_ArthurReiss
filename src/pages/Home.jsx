import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

// Finalmente lo terminé. Me ha costado demasiado, necesito mucha practica y honestamente no me siento
// satisfecho con como ha quedado, siento que puedo hacer algo mejor jajaj, pero
// ya estoy lo suficientemente atrasado.


export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="col-9">
        <div className="bg-dark bg-opacity-50 mb-5">
          <Link to="list/character" className="text-decoration-none">
            <h1 className="mx-3 text-light">Personajes</h1>
          </Link>
          <div className="d-flex overflow-x-auto gap-3 pb-4">
            {store.characters && store.characters.length > 0 ? (
              store.characters.map((item) => {
                const isFav = store.favorites.find(
                  (fav) => fav.name === item.name,
                );
                return (
                  <div
                    className="card homeCard flex-shrink-0 mx-3"
                    key={item.id}
                  >
                    <img
                      className="card-img-top imgCard"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{item.name}</h4>
                      <p className="card-text">
                        Estado: {item.status}
                        <br></br>
                        Especie: {item.species}
                        <br></br>
                        Género: {item.gender}
                        <br></br>
                        Origen: {item.origin?.name}
                        <br></br>
                        Ubicación actual: {item.location?.name}
                      </p>
                    </div>
                    <div className="card-footer d-flex justify-content-between text-body-secondary">
                      <Link
                        to={`/SingleItem/character/${item.id}`}
                        className="btn btn-primary"
                      >
                        Ver más
                      </Link>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          if (isFav) {
                            dispatch({
                              type: "REMOVE_FAVORITE",
                              payload: item.name,
                            });
                          } else {
                            dispatch({ type: "ADD_FAVORITE", payload: item });
                          }
                        }}
                      >
                        {isFav ? (
                          <i className="fa-solid fa-star"></i>
                        ) : (
                          <i className="fa-regular fa-star"></i>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="spinner-border text-light mx-3" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            )}
          </div>
        </div>
        <div className="bg-dark bg-opacity-50 mb-5">
          <Link to="list/location" className="text-decoration-none">
            <h1 className="mx-3 text-light">Ubicaciones</h1>
          </Link>
          <div className="d-flex flex-nowrap overflow-x-auto gap-3 pb-4">
            {store.locations && store.locations.length > 0 ? (
              store.locations.map((item) => {
                const isFav = store.favorites.find(
                  (fav) => fav.name === item.name,
                );
                return (
                  <div
                    className="card homeCard flex-shrink-0 mx-3"
                    key={item.id}
                  >
                    <img
                      className="card-img-top imgCard"
                      src="https://makerworld.bblmw.com/makerworld/model/USaec6c3842358a1/design/2024-07-04_281d88027b3bb.png?x-oss-process=image/resize,w_1000/format,webp"
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{item.name}</h4>
                      <p className="card-text">
                        Tipo: {item.type}
                        <br></br>
                        Dimensión: {item.dimension}
                      </p>
                    </div>
                    <div className="card-footer d-flex justify-content-between text-body-secondary">
                      <Link
                        to={`/SingleItem/location/${item.id}`}
                        className="btn btn-primary"
                      >
                        Ver más
                      </Link>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          if (isFav) {
                            dispatch({
                              type: "REMOVE_FAVORITE",
                              payload: item.name,
                            });
                          } else {
                            dispatch({ type: "ADD_FAVORITE", payload: item });
                          }
                        }}
                      >
                        {isFav ? (
                          <i className="fa-solid fa-star"></i>
                        ) : (
                          <i className="fa-regular fa-star"></i>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="spinner-border text-light mx-3" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            )}
          </div>
        </div>
        <div className="bg-dark bg-opacity-50 mb-5">
          <Link to="list/episode" className="text-decoration-none">
            <h1 className="mx-3 text-light">Episodios</h1>
          </Link>
          <div className="d-flex flex-nowrap overflow-x-auto gap-3 pb-4">
            {store.episodes && store.episodes.length > 0 ? (
              store.episodes.map((item) => {
                const isFav = store.favorites.find(
                  (fav) => fav.name === item.name,
                );
                return (
                  <div
                    className="card homeCard flex-shrink-0 mx-3"
                    key={item.id}
                  >
                    <img
                      className="card-img-top imgCard"
                      src="https://makerworld.bblmw.com/makerworld/model/USaec6c3842358a1/design/2024-07-04_281d88027b3bb.png?x-oss-process=image/resize,w_1000/format,webp"
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{item.name}</h4>
                      <p className="card-text">
                        Episodio: {item.episode}
                        <br></br>
                        Emisión: {item.air_date}
                      </p>
                    </div>
                    <div className="card-footer d-flex justify-content-between text-body-secondary">
                      <Link
                        to={`/SingleItem/episode/${item.id}`}
                        className="btn btn-primary"
                      >
                        Ver más
                      </Link>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          if (isFav) {
                            dispatch({
                              type: "REMOVE_FAVORITE",
                              payload: item.name,
                            });
                          } else {
                            dispatch({ type: "ADD_FAVORITE", payload: item });
                          }
                        }}
                      >
                        {isFav ? (
                          <i className="fa-solid fa-star"></i>
                        ) : (
                          <i className="fa-regular fa-star"></i>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="spinner-border text-light mx-3" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
