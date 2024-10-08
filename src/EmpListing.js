import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("https://basherbd.github.io/api/abdb.json/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("https://basherbd.github.io/api/abdb.json").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Savings List</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Month</td>
                                <td>Saving</td>
                                <td>Profit</td>
                                <td>Withdraw</td>
                                <td>Total</td>
                                <td>Loan</td>
                                <td>Install</td>
                                <td>Install No</td>
                                <td>Install Due</td>
                                <td>Date</td>
                                <td>Desc</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.month}</td>
                                        <td>{item.saving}</td>
                                        <td>{item.profit}</td>
                                        <td>{item.withdraw}</td>
                                        <td>{item.total}</td>
                                        <td>{item.loan}</td>
                                        <td>{item.install}</td>
                                        <td>{item.install_no}</td>
                                        <td>{item.install_due}</td>
                                        <td>{item.date}</td>
                                        <td>{item.desc}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;