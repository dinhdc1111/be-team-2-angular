import Joi from "joi"
const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    original_price: Joi.number().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
    categoryId: Joi.string().required()
})
export default productSchema;