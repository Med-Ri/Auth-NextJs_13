import User from '../../models/userSchema'
import dbConnect from '../../config/dbConnect'



export default async function handler (req,res){
    if(req.method === 'POST'){
        dbConnect()
        
        const {name , email , password} = req.body;

        /*  */

        const user = await User.findOne({email})
        
        if (user){return res.json({msg : "this email already exist !"})} 
        
        const newUser = await User.create({name , email , password})
           
        res.status(200).json({newUser,msgSucc : "register successfully"})
        

    }
}