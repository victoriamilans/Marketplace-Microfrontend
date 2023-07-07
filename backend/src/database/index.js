import mongoose from "mongoose";

mongoose.connect("mongodb+srv://susimararoberti:5yj6QkTE2fVfl3em@susimara.slaqokq.mongodb.net/marketplace?retryWrites=true&w=majority")
mongoose.Promise = global.Promise

export default mongoose

//