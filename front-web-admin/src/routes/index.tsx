import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;