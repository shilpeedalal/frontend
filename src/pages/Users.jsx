import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import User from '../components/User';

// const USERS_DATA = [
//     {
//         id: 1,
//         name: 'Mark Woods',
//         dob: '23/08/2023',
//         email: 'admin@abcd.com',
//         password: 'Active123',
//     },
//     {
//         id: 2,
//         name: 'Mark Woods',
//         dob: '23/08/2023',
//         email: 'admin@abcd.com',
//         password: 'Active123',
//     },
//     {
//         id: 3,
//         name: 'Mark Woods',
//         dob: '23/08/2023',
//         email: 'admin@abcd.com',
//         password: 'Active123',
//     },
//     {
//         id: 4,
//         name: 'Mark Woods',
//         dob: '23/08/2023',
//         email: 'admin@abcd.com',
//         password: 'Active123',
//     },
// ]

const Users = () => {

    const navigate = useNavigate()

    const [usersData, setUsersData] = useState([]);

    const fetchUsers = async (url, token) => {
        const resp = await axios.get(url, {
            headers: {
                'Authorization': token
            }
        })
        setUsersData(resp.data);
    }

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user) {
            navigate('/')
            return
        }

        fetchUsers('http://localhost:8000/users/', JSON.parse(user).token)
    }, [navigate])

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/')
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="text-center py-4">List of Users</h1>
                <Button variant="info" className="" onClick={logout} >Logout</Button>
            </div>
            <Table hover className='container'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData?.map((user, index) => <User key={user._id} user={user} index={index} />)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Users