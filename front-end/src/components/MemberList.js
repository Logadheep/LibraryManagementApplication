// Display member list with edit and delete buttons using rafce
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const getMembers = () => {
    axios.get('http://localhost:8080/api/members')
        .then((response) => {
            console.log(response.data)
        })
}
const deleteMember = (id) => {
    axios.delete(`http://localhost:8080/api/members/${id}`)
        .then((response) => {
            console.log(response.data)
        })
}
const members = getMembers()

const MemberList = () => {
    return (
        <div className='members-container'>
            <h2>Members</h2>
            <table>
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.firstName}</td>
                            <td>{member.lastName}</td>
                            <td>
                                <Link to={`/edit-member/${member.id}`}>Edit</Link>
                                <button onClick={() => deleteMember(member.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MemberList