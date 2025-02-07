import app from "./app.js";
import { connectToDatabase } from "./db/db.js";

const port = process.env.PORT || 5002;

connectToDatabase()
    .then(() => {
        app.listen(port, () => console.log(`Server is running on port ${port} and connected to the database`));
    })
    .catch((err) => {
        console.error(err);
    });