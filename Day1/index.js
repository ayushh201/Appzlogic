const express = require('express'); //require express
const users = require("./MOCK_DATA.json");
const app = express(); //instance creation
const PORT = 8000;

app.get("/users", (req,res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

//Routes
app.get("/api/users", (req,res) => {
    return res.json(users);
});

app.route("/api/users/:id").get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.json(user);
})
.patch((req,res) => {
    //Edit user with id
    return res.json({status : "Pending"});
})
.delete((req,res) => {
    //Delete user with id
    return res.json({status : "Pending"});
});

//create new user
app.post("/api/users", (req,res) => {
    return res.json({status : "pending"});
});

app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));