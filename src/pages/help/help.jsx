const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <h1 className="text-3xl font-semibold mb-6">
        Welcome to Junk Vault Help Section
      </h1>
      <p className="text-lg mb-10">
        What would you like help with today? You can quickly take care of most
        things here, or connect with us when needed.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white text-gray-800 p-6 rounded flex items-center justify-center">
          Payment, charges or gift cards
        </button>
        <button className="bg-white text-gray-800 p-6 rounded flex items-center justify-center">
          Address, security & privacy
        </button>
        <button className="bg-white text-gray-800 p-6 rounded flex items-center justify-center">
          Memberships, subscriptions or communications
        </button>
        <button className="bg-white text-gray-800 p-6 rounded flex items-center justify-center">
          Something else
        </button>
        <button className="bg-white text-gray-800 p-6 rounded flex items-center justify-center">
          Get help with a hacked account
        </button>
        <button className="bg-white text-gray-800 p-6 rounded flex items-center justify-center">
          Accessibility
        </button>
        <button className="bg-white text-gray-800 p-6 rounded flex items-center justify-center">
          Login & password
        </button>
        <button className="bg-white text-gray-800 p-6 rounded flex items-center justify-center">
          Report Something Suspicious
        </button>
      </div>
    </div>
  );
};

export default HelpPage;
