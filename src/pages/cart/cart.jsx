function Cart() {
  const items = [
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="border-t border-gray-300 pt-4">
          {items.map((item) => (
            <div key={item.id} className="flex mb-4">
              <div className="flex-shrink-0">
                <img
                  className="h-24 w-24"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              <div className="ml-4 flex-grow">
                <div className="text-lg font-semibold">{item.title}</div>
                <div className="text-gray-500">{item.size}</div>
                <div className="text-gray-700 mt-2">Price: {item.price}</div>
                <div className="text-gray-500">{item.flavor}</div>
                <div className="text-gray-500">{item.deliveryDate}</div>
                <div className="text-red-500">{item.stock}</div>
                <div className="mt-2">
                  <label className="block text-gray-700">Qty:</label>
                  <select className="border rounded px-2 py-1 mt-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <button className="text-blue-500">Delete</button>
                <button className="text-blue-500 mt-2">Save for later</button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-4 mt-4">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Subtotal (2 items):</span>
            <span className="text-lg font-semibold">$50.46</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
