import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../index.css";
const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const [ searchBar, setSearchBar ] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchBar.trim() !== "") {
        navigate(`/search/${searchBar}`);
        setSearchBar("")
    }
  }
  return (
    <nav className="page_1 navbar-light bg-light navbar navbar-expand-sm navbar-light bg-dark bg-opacity-50 sticky-top mb-5">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <img
            className="navBarImg"
            src="../../rick-logo-removebg-preview.png"
            alt="Rick and Morty Logo"
          />
        </Link>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                to="/"
                aria-current="page"
              >
                Inicio
                <span className="visually-hidden"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/list/character">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/list/location">
                Ubicaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/list/episode">
                Episodios
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-white dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favoritos
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownId">
                {store.favorites.length === 0 ? (
                  <li>
                    <span className="dropdown-item text-muted">
                      Aún no hay favoritos
                    </span>
                  </li>
                ) : (
                  store.favorites.map((fav, index) => (
                    <li
                      key={index}
                      className="dropdown-item d-flex justify-content-between align-items-center"
                    >
                      <span className="text-dark">{fav.name}</span>
                      <button
                        className="btn btn-sm btn-danger ms-3"
                        onClick={(e) => {
                            e.stopPropagation()
                            dispatch({
                                type: "REMOVE_FAVORITE",
                                payload: fav.name,
                            })
                        }
                        }
                      >
                        X
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
