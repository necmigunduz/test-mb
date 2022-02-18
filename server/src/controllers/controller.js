import mongoose from 'mongoose'
import productSchema from '../models/model.js'

const Product = mongoose.model('product', productSchema)
// Create
const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body)
    newProduct.save((error, product)=> {
        if(error) {
            res.json(error)
        }  
        res.json(product)
    })
}

// Index
const getAllProducts = (req, res) => {
    Product.find({}, (error, products) => {
        if(error){
            res.json(error)
        }
        res.json(products)
    })
}

// View
const getProduct = (req, res) => {
    Product.findById(req.params.id, (error, product) => {
        if(error){
            res.json(error)
        }
        res.json(product)
    })
}

// Update
const updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (error, product) => {
        if(error) {
            res.json(error)
        }
        res.json(product)
    })
}

// Delete
const deleteProduct = (req, res) => {
    Product.remove({_id: req.params.id}, (error, product) => {
        if(error){
            res.json(error)
        }

        res.json(product)
    })
}

export { addNewProduct, getAllProducts, getProduct, updateProduct, deleteProduct}