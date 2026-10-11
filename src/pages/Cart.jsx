import { formatNumber } from '../utils/formatNumber';

const Cart = ({ cart, setCart }) => {
  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrement = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container my-4">
      <h3 className="mb-4">Detalles del pedido:</h3>

      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío 🛒</p>
      ) : (
        cart.map((pizza) => (
          <div
            key={pizza.id}
            className="d-flex align-items-center justify-content-between border-bottom py-2"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={pizza.img}
                alt={pizza.name}
                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <span className="text-capitalize fw-semibold">{pizza.name}</span>
            </div>

            <span>${formatNumber(pizza.price)}</span>

            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => decrement(pizza.id)}
              >
                -
              </button>
              <span>{pizza.count}</span>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => increment(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      <h4 className="mt-4">Total: ${formatNumber(total)}</h4>

      <button className="btn btn-dark mt-3" onClick={() => {}}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
