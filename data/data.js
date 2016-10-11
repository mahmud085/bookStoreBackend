var mongoose = require("mongoose");
var Schema = mongoose.Schema({
    name: String,
    writer : String,
    publications : String,
    category : String,
    price : String,
    releaseDate : String,
    edition : String

});
mongoose.createConnection("mongodb://localhost/react");
module.exports = mongoose.model("data", Schema);
