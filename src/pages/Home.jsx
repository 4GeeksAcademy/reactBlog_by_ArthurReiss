import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; 

export const Demo = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="col-9">
        <div className="bg-dark bg-opacity-50 mb-5">
          <h1 className="mx-3 text-light">Personajes</h1>
          <div className="d-flex overflow-x-auto gap-3 pb-4">
            <div className="card homeCard flex-shrink-0 mx-3">
              <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
              <div className="card-footer d-flex justify-content-between text-body-secondary">
                <button type="button" className="btn btn-primary">
                  Ver más
                </button>
                <button type="button" className="btn btn-warning">
                  <i className="fa-regular fa-star"></i>{" "}
                  <i className="fa-solid fa-star"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark bg-opacity-50 mb-5">
          <h1 className="mx-3 text-light">Ubicaciones</h1>
          <div className="d-flex flex-nowrap overflow-x-auto gap-3 pb-4">
            <div className="card homeCard flex-shrink-0 mx-3">
              <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
              <div className="card-footer d-flex justify-content-between text-body-secondary">
                <button type="button" className="btn btn-primary">
                  Ver más
                </button>
                <button type="button" className="btn btn-warning">
                  <i className="fa-regular fa-star"></i>{" "}
                  <i className="fa-solid fa-star"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark bg-opacity-50 mb-5">
          <h1 className="mx-3 text-light">Episodios</h1>
          <div className="d-flex flex-nowrap overflow-x-auto gap-3 pb-4">
            <div className="card homeCard flex-shrink-0 mx-3">
              <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
              <div className="card-footer d-flex justify-content-between text-body-secondary">
                <button type="button" className="btn btn-primary">
                  Ver más
                </button>
                <button type="button" className="btn btn-warning">
                  <i className="fa-regular fa-star"></i>{" "}
                  <i className="fa-solid fa-star"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
