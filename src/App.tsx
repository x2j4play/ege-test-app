import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import {HashRouter, Route, Switch} from "react-router-dom";
import {ProblemPage} from "./Pages/ProblemPage";
import {HomePage} from "./Pages/HomePage";
import TicketDisplayPage from "./Pages/TicketDisplayPage";
import TicketTestPage from "./Pages/TicketTestPage";
import TicketCheckPage from "./Pages/TicketCheckPage";
import TicketResultsPage from "./Pages/TicketResultsPage";
import ScrollToTop from "./Components/ScrollToTop";
import {TicketsListPage} from "./Pages/TicketsListPage";
import {ProblemsSelectPage} from "./Pages/ProblemsSelectPage";
import ProblemsTestingPage from "./Pages/ProblemsTestingPage";
import ProblemsResultPage from "./Pages/ProblemsResultPage";

function App() {
    return (
        <>
            <HashRouter>
                <ScrollToTop/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/problem/:id' component={ProblemPage}/>
                    <Route path='/ticket/:id' component={TicketDisplayPage}/>
                    <Route path='/testing/:id/' component={TicketTestPage}/>
                    <Route path='/checking/:id/:data' component={TicketCheckPage}/>
                    <Route path='/results/:id/:data/:answersData' component={TicketResultsPage}/>
                    <Route path='/ticketsList' component={TicketsListPage}/>
                    <Route path='/problemsSelect' component={ProblemsSelectPage}/>
                    <Route path='/problemsTesting/:type' component={ProblemsTestingPage}/>
                    <Route path='/problemsResults/:type/:problemsIds/:answersData' component={ProblemsResultPage}/>
                    <Route path="*" component={HomePage}/>
                </Switch>
            </HashRouter>
        </>

    );
}

export default App;

