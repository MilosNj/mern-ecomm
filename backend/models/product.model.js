import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String, // image will be a URL pointing to an image on the internet
      required: true
    }
  },
  {
    timestamps: true // createdAt, updatedAt
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
