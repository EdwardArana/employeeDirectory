import React from "react";
import API from "./utils/API";
import EmployeeDir from "./components/EmployeeDir";
import "./index.css";

class App extends React.Component {
    state = {
        users: [],
        usersFiltered: [],
        order: "ascend"
    };

    componentDidMount() {
        
        this.getUsers();
    }

    getUsers = async() => { 
        try {
            const response = await API.getUsers();

            console.group(response.data.results);

            const employeeDB = response.data.results.map(x => ({
                img: x.picture.medium,
                lastName: x.name.last,
                firstName: x.name.first,
                phone: x.phone,
                cell: x.cell,
                email: x.email
            }));

            this.setState({ users: employeeDB, usersFiltered: employeeDB});
        }catch (error) {
            console.log(error);
        }
    }


handleInput = (val) => {
    this.setState({
        users: this.state.usersFiltered.filter((x) => x.firstName.includes(val)),
    });
};

employeeSorted = () => {
    const sortedUsers = this.state.usersFiltered;

    sortedUsers.sort(function (a, b) { 
        console.log (a.first, "a value", b.first, "b value");

        var employeeOne = a.name.first.toLowerCase();
        var employeeTwo = a.name.first.toLowerCase();

        if (employeeOne < employeeTwo) {
            return 1;
        }
        if (employeeOne > employeeTwo) {
            return -1;
        }
        return 0;
    });
    this.setState = {
        usersFiltered: sortedUsers,
    };


this.setState({
    usersFiltered: this.state.users.sort((a, b) => { 
        console.log(a.first, "a value", b.first, "b value");
        var employeeOne = a.first.toLowerCase();
        var employeeTwo = b.first.toLowerCase();

        if (employeeOne < employeeTwo) {
            return 1;
        }
        if (employeeOne > employeeTwo) {
            return -1;
        }
        return 0;
    }),
});

return this.setState({ 
    order: "ascend"
});

};

sortTable = (e) => {
    const key = e.target.getAttribute("data-name");

    this.setState({
        users: this.state.users.sort((a, b) => (a[key] > b[key] ? 1: -1)),
    });
};

render() {
    return(
        <div className="text-center mb-4">
            <h1 className="text-center mb-4 searchbar">Employee Directory</h1>
            
            <label className="text-center mb-4" htmlFor="text">
                <input className="text-center mb-4" placeholder="Search" type="text" onChange={(e) => this.handleInput(e.target.value)}/>
            </label>
            <EmployeeDir employees={this.state.users} sortTable={this.sortTable} />
        </div>
    );
 }

}

export default App;