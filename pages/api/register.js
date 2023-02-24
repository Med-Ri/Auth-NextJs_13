import User from '../../models/userSchema'
import dbConnect from '../../config/dbConnect'



export default async function handler (req,res){
    if(req.method === 'POST'){
        dbConnect()
        
        const {name , email , password} = req.body;

        const newUser = await User.create({name , email , password})
                
        

        res.status(200).json({newUser})
        

    }
}