const mongoose= require("mongoose");
const addSchema=mongoose.Schema({
    Title:String,
    Detail:String,
    completed:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("addtodos",addSchema);