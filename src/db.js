const mongoose = require("mongoose"); /* importo el módulo de mongoose */

async function connection() {
  await mongoose
    .connect("mongodb+srv://anaislu12:1016045610@loginprotalentob9.tkl2o1d.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(console.log("Base de datos Mongo conectada"))
    .catch((err) => console.log(err));
}

module.exports = { connection };