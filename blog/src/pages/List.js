import React from "react";

const User = ({userData}) => {
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: "user1@gmail.com",name: "철수"},
        {email: "user2@gmail.com",name: "유리"},
        {email: "user3@gmail.com",name: "맹구"},
        {email: "user4@gmail.com",name: "훈발롬"}
    ];

    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;