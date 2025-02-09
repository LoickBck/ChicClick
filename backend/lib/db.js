import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       const conn= await mongoose.connect(process.env.MONGO_URI);
       console.log(`MongoDB connecté : ${conn.connection.host}`)
    }catch (error) {
        console.log("Erreur lors de la connexion à MongoDB", error.message);
        process.exit(1);
    }
}