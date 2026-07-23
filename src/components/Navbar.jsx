import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
		 <nav className="page_1 navbar navbar-expand-sm navbar-light bg-dark bg-opacity-50 sticky-top mb-5">
            <div className="container">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#" aria-current="page">Home
                                <span className="visually-hidden"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" id="dropdownId"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Favoritos</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">
                            buscar
                        </button>
                    </form>
                </div>
            </div>
        </nav>
		</nav>
	);
};