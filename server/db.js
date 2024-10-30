import mongoose from "mongoose";
export default async function conectaNaDb(){
    mongoose.connect(`mongodb+srv://arthurpedreca:senhazicademaisdaconta@spotitui-database.z78sp.mongodb.net/?`);

    return mongoose.connection;
}