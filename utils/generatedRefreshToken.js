import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'

const generatedRefreshToken = async(userId)=>{
    const token  = await jwt.sign({ id : userId}, 
        process.env.SECRET_KEY_ACCESS_TOKEN,
        { expiresIn : '7d' }
    );

    const updateRefreshTokenUser = await UserModel.updateOne(
        { _id : userId },
         {
             refreshToken : token 
            }
    )
        return token
}

export default generatedRefreshToken