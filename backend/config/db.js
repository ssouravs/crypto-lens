const mongoose=require('mongoose')

const MONGO_URL="mongodb+srv://souravshivam1857:S0O5jfUG50bbN2MX@cryptolensdb.gfitqad.mongodb.net/"

 const connectDB=async ()=>{
    try{
        const connection_db=await mongoose.connect(MONGO_URL);

        console.log(`MongoDB connected: ${connection_db.connection.host}`.cyan.underline)
    }catch(err){
        console.log(`Error is: ${err.message}`.red.bold)
        process.exit()
    }
 }

 module.exports=connectDB