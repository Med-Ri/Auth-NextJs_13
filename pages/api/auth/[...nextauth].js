import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../models/userSchema'
import bcrypt from 'bcryptjs'
import dbConnect from "../../../config/dbConnect";




export default NextAuth({
    session : {
        strategy : 'jwt'
    },
    providers : [
        CredentialsProvider({
            async authorize(credentials,req){
                
                dbConnect()
                
                const {email , password} = credentials
                
                //check email
                const user = await User.findOne({email})
                if(!user){
                    throw new Error ('Email not found Register Before') 
                    
                }
                
                //check password
                const passwordMatched = await bcrypt.compare(password , user.password)
                if(!passwordMatched){
                    throw new Error ('wrong password !!') 
                   
                }
                
                return user

            }
        })
    ],
    pages:{
      signIn : "/login"
    },
    secret : process.env.NEXTAUTH_SECRET
})