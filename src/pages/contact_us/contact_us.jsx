//page content using tailwind
const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="max-w-fit mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h2 className="text-lg font-bold">NEW YORK</h2>
            <p>
              30 Rockefeller Plaza
              <br />
              New York, NY 10112
            </p>
            <div className="mt-2">
              <div className="flex items-center">
                <span className="material-icons">phone</span>
                <p className="ml-2">Office: +1 (212) 238-4367</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="material-icons">email</span>
                <p className="ml-2">Support: support@junkvault.com</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">ROME</h2>
            <p>
              Piazza del Colosseo
              <br />
              00184 Roma RM
            </p>
            <div className="mt-2">
              <div className="flex items-center">
                <span className="material-icons">phone</span>
                <p className="ml-2">Office: +39 (06) 478 91234</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="material-icons">email</span>
                <p className="ml-2">Support: support@junkvault.it</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">LONDON</h2>
            <p>
              395 Kings Road
              <br />
              London SW10 0LR
            </p>
            <div className="mt-2">
              <div className="flex items-center">
                <span className="material-icons">phone</span>
                <p className="ml-2">Office: +44 (20) 7123 4567</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="material-icons">email</span>
                <p className="ml-2">Support: support@junkvault.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
