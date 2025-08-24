import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true
    },
    avatar:{
        type:String
    },
    gender:{
        type:String,
        enum:["Male", "Female"]
    },
    Age:{
        type:Number
    },
  
},{timestamps:true})

export  const User = mongoose.model('User', userSchema)
