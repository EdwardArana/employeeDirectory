import React from "react";
import "./employeeDir.css"

function employeeDir(props) {

    const Row = (props) => {
        return (
            <tr>
                <td className="align-middle">
                    <img src={props.employee.img} alt="Employee Pic" />
                </td>
                <td className="text-center align-middle">{props.employee.firstName + " " + props.employee.lastName}</td>
                <td className="text-center align-middle"></td>
                <td className="text-center align-middle"></td>
                <td className="text-center align-middle"></td>
            </tr>
        )
    }
}