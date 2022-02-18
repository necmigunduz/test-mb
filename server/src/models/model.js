import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Product name is required!'
    },
    brand: {
        type: String,
        required: 'Brand is required!'
    },
    color: {
        type: String
    },
    desc: {
        type: String
    },
    price: {
        type: Number
    },
    amount: {
        type: Number
    }
})

export default ProductSchema