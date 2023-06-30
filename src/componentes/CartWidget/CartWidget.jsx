import './CartWidget.css'

const CartWidget = () => {
    
    const imgcarrito="https://images.vexels.com/media/users/3/200098/isolated/lists/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png"

  return (
    <div>
        <strong>5</strong>
        <img className='imgCarrito' src={imgcarrito} alt="carrito" />
    </div>
  )
}

export default CartWidget