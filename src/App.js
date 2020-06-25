import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import {
    Header, Sidebar, LogoPic,CategoriesContainer,
    ProductsContainer, UsersContainer, OrdersContainer,
    ChangeCategoryContainer, ChangeProductContainer
} from "@acomponents";
import {
    LogoPicClient, HeaderClient, SidebarClientContainer,
    ProductsClientContainer,BasketContainer
} from "@ccomponents";
import './App.css';

function App() {
    let isAdmin = false;
    if (isAdmin) {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <LogoPic/>
                    <div className="body">
                        <Sidebar/>
                        <div className="main__content">
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to={"/categories"}/>}/>
                                <Route path={'/users'} component={UsersContainer}/>
                                <Route path='/orders' component={OrdersContainer}/>
                                <Route path='/products' component={ProductsContainer}/>
                                <Route path="/category/edit/:CategoryID?" render={() => <ChangeCategoryContainer/>}/>
                                <Route path="/product/edit/:ProductID?" render={() => <ChangeProductContainer/>}/>
                                <Route path='/categories' component={CategoriesContainer}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    } else {
        return (<BrowserRouter>
            <div className="App">
                <HeaderClient/>
                <LogoPicClient/>
                <div className="body">
                    <SidebarClientContainer/>
                    <div className="main__content">
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={"/products"}/>}/>
                            <Route path='/orders' component={OrdersContainer}/>
                            <Route path='/products/:ProductID?' component={ProductsClientContainer}/>
                            <Route path='/basket' component={BasketContainer}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>)
    }
}

export default App;
