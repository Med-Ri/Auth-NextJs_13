import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../models/userSchema'
import bcrypt from 'bcryptjs'
import dbConnect from "../../../config/dbConnect";
import GoogleProvider from "next-auth/providers/google";



export default NextAuth({
    session : {
        strategy : 'jwt'
    },
    providers : [

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }) ,

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