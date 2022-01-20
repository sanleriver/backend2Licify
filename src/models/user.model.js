const {Schema,model }= require('mongoose');


const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    permissionLevel: Number,
    role: String
 });

/*  UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  }; */

 module.exports=model('User',userSchema);