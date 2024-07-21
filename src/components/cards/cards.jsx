import productimag from "../../assets/img/sample01_Backpack_Image.jpg";

const ProductCard = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-white dark:bg-gray-800">
      <nav className="flex mb-4" aria-label="Breadcrumb"></nav>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <img
          src={productimag}
          alt="Wireless Optical Mouse"
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="flex flex-col mt-4 md:mt-0 md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Wireless Optical Mouse
          </h1>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            The Logitech M185 Wireless Optical Mouse is a great device for any
            computer user, and as Logitech are the global market leaders for
            these devices, you are also guaranteed absolute reliability. A mouse
            to be reckoned with!
          </p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              $22.79
            </span>
            <button className="ml-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
              Add to cart
            </button>
            <span className="ml-4 text-green-500 font-semibold">In stock</span>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <p>834444</p>
            <p className="mt-4">
              <strong>Shipping & Returns:</strong>
            </p>
            <p>
              Standard shipping: 3 - 5 working days. Express shipping: 1 - 3
              working days.
            </p>
            <p>
              Shipping costs depend on delivery address and will be calculated
              during checkout.
            </p>
            <p>
              Returns are subject to terms. Please see the RETURNS PAGE for
              further information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
