import { Link } from "react-router-dom";
import portrait from "./assets/46.jpg";
import "./Header.css"

const Header = () => {

    return (
        <main id="app">
            <header>
                <div className="header">
                    <div className="header__image">
                        <img src={portrait} alt="Jon SIMPSON" />
                    </div>
                    <h1 className="header__name">Jon SIMPSON</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/accueil"}>
                                <span class="material-symbols-outlined">home</span><span class="link">Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/experience"}>
                                <span class="material-symbols-outlined">person</span><span class="link">Experience</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/portfolio"}>
                                <span class="material-symbols-outlined">image</span><span class="link">Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>
                                <span class="material-symbols-outlined">alternate_email</span><span class="link">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </main>
    )
}

export default Header;