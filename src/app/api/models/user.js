import {Schema,model,models} from 'mongoose';

const UserSchema = new Schema ({
    name:{
        type:String,
        requuired:true
    },
    email:{
        type:String,
        requuired:true
    }
})

export default models.User || model('User',UserSchema);
