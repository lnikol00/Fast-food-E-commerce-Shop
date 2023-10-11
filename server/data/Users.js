import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("Laganica12", 10),
        isAdmin: true
    },
    {
        name: "User",
        email: "user@example.com",
        password: bcrypt.hashSync("Laganica12!", 10),
    },
]

export default users