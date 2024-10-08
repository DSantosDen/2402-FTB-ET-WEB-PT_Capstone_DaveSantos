//imports
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { deleteItem, setCart } from "../../redux/actions/cart";
//component function to manage the cart
function Cart() {
  //redux actions to make changes from the redux store
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const { products, cartId } = useSelector((state) => state.cart);

  const handleAdd = (productId) => {
    let temp = JSON.parse(JSON.stringify(products));
    let index = temp.findIndex((obj) => obj.id == productId);
    if (index == -1) return alert("product not found");
    temp[index].quantity = temp[index].quantity + 1;
    dispatch(setCart(temp));
  };
  const handleDec = (productId) => {
    let temp = JSON.parse(JSON.stringify(products));
    let index = temp.findIndex((obj) => obj.id == productId);
    if (index == -1) return alert("product not found");
    if (temp[index].quantity == 1) {
      dispatch(deleteItem(productId));
    } else {
      temp[index].quantity = temp[index].quantity - 1;
      dispatch(setCart(temp));
    }
  };

  const deleteCartItem = (productId) => {
    dispatch(deleteItem(productId));
  };

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => {
      total = total + item.price * item.quantity;
    });

    return `$ ${total.toFixed(2)}`;
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="border-t border-gray-300 pt-4">
          {products?.map((item) => (
            <div key={item.id} className="flex mb-4">
              <div className="flex-shrink-0">
                <img className="h-24 w-24" src={item.img} alt={item.title} />
              </div>
              <div className="ml-4 flex-grow">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-gray-500">{item.size}</div>
                <div className="text-gray-700 mt-2">Price: {item.price}</div>
                <div className="text-gray-500">{item.flavor}</div>
                <div className="text-gray-500">{item.deliveryDate}</div>
                <div className="text-red-500">{item.stock}</div>
                <div className="mt-2">
                  <button onClick={() => handleAdd(item.id)}>
                    <FaPlus />
                  </button>
                  <input
                    readOnly
                    value={item.quantity}
                    className="bg-[#eeee] text-center w-[40px] h-[30px] mx-[15px] rounded-sm"
                  />
                  <button onClick={() => handleDec(item.id)}>
                    <FaMinus />
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <button
                  className="text-blue-500"
                  onClick={() => deleteCartItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-4 mt-4">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">
              Subtotal ({products.length} items):
            </span>
            <span className="text-lg font-semibold">{getTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
