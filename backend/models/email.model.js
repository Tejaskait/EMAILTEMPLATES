import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    styles: {
        color: { type: String },
        fontSize: { type: String },
        alignment: { type: String },
    },
   
},{
    
        timestamps: true,
    
})

const Email = mongoose.model("Email", emailSchema);

export default Email;