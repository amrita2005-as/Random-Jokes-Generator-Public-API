import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const config = {
    headers: { "X-Api-Key": "gnC8/fVNhR1/+i4OFWEWsg==dYJoX854WsN4ROGf" },
};

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.api-ninjas.com/v1/jokes", config);
        const b = response.data;
        const c = Math.floor(Math.random()*b.length);
        const d = b[c].joke;
        res.render("index.ejs", { Joke: d}); 
    } catch (error) {
        console.log(error.response.data);
        res.status(500)

        // Respond with an error message
        res.status(500).send("Error fetching joke. Please try again later.");
    }
}); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
