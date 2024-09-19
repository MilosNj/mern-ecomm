import mongoose from 'mongoose'

import Product from '../models/product.model.js'

export const createProduct = async (req, res) => {
  const product = req.body

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all fields' })
  }

  const newProduct = new Product(product)

  try {
    await newProduct.save()
    res.status(201).json({ success: true, data: newProduct })
  } catch (error) {
    console.error('Error in Create product:', error.message)
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`
    })
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params

  try {
    // Check if the ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid product ID format' })
    }

    const deletedProduct = await Product.findByIdAndDelete(id)

    if (deletedProduct) {
      res.status(200).json({ success: true, message: 'Product deleted' })
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }
  } catch (error) {
    console.error('Error in Delete product:', error.message)
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`
    })
  }
}

export const getProducts = async (_req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({ success: true, data: products })
  } catch (error) {
    console.error('Error fetching all products:', error.message)
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`
    })
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const product = req.body

  try {
    // Check if the ID is a valid MongoDB ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid product ID format' })
    }

    if (product.name === '' || product.price === '' || product.image === '') {
      return res
        .status(400)
        .json({ success: false, message: 'Please fill in all fields' })
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true
    })

    if (updatedProduct) {
      res.status(200).json({ success: true, data: updatedProduct })
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }
  } catch (error) {
    console.error('Error in Update product:', error.message)
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`
    })
  }
}
