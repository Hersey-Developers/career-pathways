const mongoose = require("mongoose");

require("dotenv").config();

const dbUrl = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.oz0iqlb.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, {
    auth: {
        username: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false
})
    .then(() => {

        const app = require("./app");
        app.listen(process.env.PORT || 5000);

    })
    .catch(err => {
        console.log(err);
    }
);


