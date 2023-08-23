import { FaGear } from 'react-icons/fa6'
import {FaRegTimesCircle } from 'react-icons/fa'

const User = ({user, index}) => {
    return (
        <tr>
            <td className='py-3'>{index+1}</td>
            <td className='py-3'>{user.name}</td>
            <td className='py-3'>{user.email}</td>
            <td className='py-3'>{user.dob}</td>
            <td className='py-3'>{user.password}</td>
            <td className='py-3'>
                <span className='d-inline-block me-3'><FaGear color='rgb(60, 166, 247)' /></span>
                <span><FaRegTimesCircle color='rgb(247, 89, 77)' /></span>
            </td>
        </tr>
    )
}

export default User