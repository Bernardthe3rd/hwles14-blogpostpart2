
import './App.css'
import logosmall from './assets/logo-medium.png'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Overview from "./pages/Overview.jsx";
import DetailBlogpost from "./pages/DetailBlogpost.jsx";
import NewPost from "./pages/NewPost.jsx";
// import NewPost from "./pages/NewPost.jsx";
// import NotFound from "./pages/NotFound.jsx";
// import DetailBlogpost from "./pages/DetailBlogpost.jsx";

function App() {

    return (
        <>
            <nav className={"nav-outer-container"}>
                <span className={"wrapper-img"}>
                    <img src={logosmall} alt="kleine logo"/>
                </span>
                <ul  className={"nav-inner-container"}>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-nav-link" : "default-nav-link" }
                                 to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-nav-link" : "default-nav-link" }
                                 to={"/posts"}>Alle posts</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-nav-link" : "default-nav-link" }
                                 to={"/newpost"}>Nieuwe post maken</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="outer-container">
                {/*<img src={logo} alt="Company logo"/>*/}
                {/*<h1>Begin hier met het maken van jouw blog-applicatie!</h1>*/}
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/posts"} element={<Overview/>}/>
                    <Route path={"/posts/:id"} element={<DetailBlogpost/>}/>
                    <Route path={"/newpost"} element={<NewPost/>}/>
                    {/*<Route path={"*"} element={<NotFound/>}/>*/}
                </Routes>
            </div>
        </>
    )
}

export default App

