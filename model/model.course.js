const mongoose=require('mongoose');
const Schema = mongoose.Schema;

/** creating course schema  */
const Course = new Schema(
{
     name: String,
     code: String,
     topics: [String],
}
 
);
module.exports = mongoose.model('Course',Course);

