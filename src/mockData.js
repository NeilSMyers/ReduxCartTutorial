class Product {
  constructor(id, name, price, description, image) {
    this.id = id
    this.name = name
    this.price = price
    this.description = description
    this.image = image
  }
}

export default [
  new Product(
    1,
    "Shoe",
    19.99,
    "This is a shoe, we sell them individually",
    "https://source.unsplash.com/random"
  ),
  new Product(
    2,
    "Shirt",
    29.99,
    "You can barely smell the last owner!",
    "https://source.unsplash.com/random"
  ),
  new Product(
    3,
    "Hat",
    9.99,
    "Wow! Such cool hat.",
    "https://source.unsplash.com/random"
  )
]
