import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const Users = () => {

    const [Data, setData] = useState([]);

    //Define here local state that store the form Data
    const [ firstName, setfirstName] = useState("")
    const [ userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [companyName, setcompanyName] = useState("")
    const [companyBranch, setcompanyBranch] = useState("")
    const [Mobile, setMobile] = useState("")
    const GetData = () => {
        //here we will get all employee data
        const url = 'http://localhost:3500/api/users'
        const Credentials = { firstName, userName, email, companyName, companyBranch,Mobile }
        axios.get(url, Credentials)
            .then(response => {
                const result = response.data;
                const data  = result;
                
                    setData(data)
                   
            })
    }
    //call this function in useEffect
    useEffect(() => {
        GetData();
    }, [])


    return (
       <div>
        <table className='table table-borderless  table-hover '>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Company</th>
                          <th scope="col">User name</th>
                          <th scope="col">Mobile</th> 
                          <th scope="col">Email</th> 
                            </tr>
                        </thead>
                        <tbody>
                        {Data.map((item, index) =>
                                <tr key={item._id} >
                                    <th scope='row'>{index+1}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.companyName}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.Mobile}</td>
                                    <td>{item.email}</td>
                                    <td><Link className='listbtn' to={`/Profile/${item._id}`}>View</Link></td>
     
                                </tr>
                            )}
                        </tbody>
                    </table>

       </div>
    );
};

export default Users;