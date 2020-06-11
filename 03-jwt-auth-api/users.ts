export interface User {
    id: string;
    username: string;
    password: string;
}

const users: Array<User> = [
    {
        id: "1",
        username: "regis",
        password: "123",
    },
    {
        id: "2",
        username: "caio",
        password: "456",
    },
]

export default users;