
import products from "../models/product"
import productSchema from "../schemas/product"

export const create = async (req, res) => {

    try {
        const { error } = productSchema.validate(req.body)
        if (error) {
            res.status({
                message: error.details.map((err) => err.message)
            })
        }
        const product = await products.create(req.body)
        return res.status(201).json({
            message: "them san pham thanh cong",
            product
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })

    }

}
//get All
export const getAll = async (req, res) => {

    try {
        const product = await products.find()
        return res.status(201).json({
            product
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })

    }

}
//get
export const get = async (req, res) => {

    try {
        const product = await products.findById(req.params.id).populate("categoryId")
        return res.status(201).json({
            product
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })

    }

}
export const update = async (req, res) => {
    try {
        const product = await products.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        return res.status(201).json({
            message: "cap nhat thanh cong",
            product
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })

    }

}
export const remove = async (req, res) => {
    try {
        const product = await products.findByIdAndDelete(req.params.id)
        return res.status(201).json({
            message: "xoa thanh cong"
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })

    }
}