import './index.css'

const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addOnCart,
    dishAvailability,
  } = dishDetails

  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)

    return cartItem ? cartItem.quantity : 0
  }

  const renderControllerButton = () => (
    <div>
      <button type='button' onClick={onDecreaseQuantity}>
        -
      </button>
      <p>{getQuantity()}</p>
      <button type='button' onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li>
      <div>
        <h1>{dishName}</h1>
        <p>
          {dishCurrency} {dishPrice}
        </p>
        <p>{dishDescription}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && <p>Not Available</p>}
        {addOnCart.length !== 0 && <p>Customizations available</p>}
      </div>
      <p>{dishCalories} calories</p>
      <img alt={dishName} src={dishImage} />
    </li>
  )
}

export default DishItem
