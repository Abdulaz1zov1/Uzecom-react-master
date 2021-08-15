import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeP from "./page/HomeP";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewStyleP from "./page/NewStyleP";
import CollapsePage from "./page/CollapsePage";
import MyProduct from "./page/MyProduct";
import SolaryPage from "./page/SolaryPage";
import Checkproduct from "./page/Checkproduct";
import SaytAbout from "./page/SaytAbout";
import { ToastContainer } from 'react-toastify';
import SinUpModal from "./component/smallComponent/SinUpModal";
function App() {
    const routes = [
        {path: '/', component: HomeP},
        {path: '/check', component: Checkproduct},
        {path: "/new", component: NewStyleP},
        {path: '/about', component: SaytAbout},
        {path: '/solary', component: SolaryPage},
        {path: "/myproduct", component: MyProduct},
        {path: '/collapse', component: CollapsePage}
    ]
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {routes.map(item =>
                        <Route exact path={item.path} component={item.component}/>
                    )}
                </Switch>
                <ToastContainer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
