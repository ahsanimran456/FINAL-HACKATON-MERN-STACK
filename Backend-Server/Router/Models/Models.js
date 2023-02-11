import mongoose from 'mongoose';

const UsersSchema = mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: Number, required: true },
        password: { type: String, required: true },
        ProfileUrl: { type: String, required: true, },
    },
    { timestamps: true }
);

const Users = mongoose.model("Users", UsersSchema);


const productSchema = mongoose.Schema(
    {
        ProductName: { type: String, required: true },
        Category: { type: String, required: true, },
        Price: { type: Number, required: true },
        Description: { type: String, required: true },
        ProductUrl: { type: String, required: true, },

    },
    { timestamps: true}
);

const Products = mongoose.model("Products", productSchema);


export { Users,Products}