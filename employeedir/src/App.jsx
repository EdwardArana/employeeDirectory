import React from "react";
import API from "./utils/API";
import employeeDir from "./components/employeeDir";
import "./App.css";

class App extends React.Component {
    state = {
        users: [],
        usersFiltered: [],
        order: "ascend"
    };

    componentDidMount() {
        
        this.getUsers();
    }
}