import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    original_price: {
        type: Number
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "category"
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('products', productSchema)