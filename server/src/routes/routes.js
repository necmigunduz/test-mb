import { addNewProduct, getAllProducts, getProduct, updateProduct, deleteProduct } from '../controllers/controller.js'

const routes = (app) => {
    app.route('/products')
        .get(getAllProducts)
        .post(addNewProduct)
    app.route('/products/:id')
        .get(getProduct)
        .put(updateProduct)
        .patch(updateProduct)
        .delete(deleteProduct)
}

export default routes