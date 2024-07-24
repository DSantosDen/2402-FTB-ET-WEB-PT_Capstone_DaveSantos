import { useEffect } from "react";

const PageFaq = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <a href="https://www.apple.com" className="hover:text-blue-500">
                  Federal Compliance Violated Daily
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  className="hover:text-blue-500"
                >
                  Privacy Guidelines Ignored
                </a>
              </li>
              <li>
                <a href="https://www.ebay.com/" className="hover:text-blue-500">
                  Sale of All Customer Information
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <h1 className="text-3xl font-bold mb-6">Program FAQs</h1>
            <h3 className="text-xl font-semibold mb-4">
              Q: Do your products come with a lifetime guarantee?
            </h3>
            <p className="text-justify mb-6">
              A: Absolutely! If you're an immortal being, we guarantee our
              products will last your entire lifetime.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Q: Can I return an item if I've used it?
            </h3>
            <p className="text-justify mb-6">
              A: Of course! Just put it back in the box, reverse time, and it's
              as good as new!
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Q: Can I pay with imaginary money?
            </h3>
            <p className="text-justify mb-6">
              A: Absolutely! We accept all major forms of imaginary currency,
              including unicorn dollars and fairy gold.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Q: Do you sell invisible products?
            </h3>
            <p className="text-justify mb-6">
              A: We do, but they're so popular we can't keep them in stock. Or
              maybe we just can't find them...
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Q: Can I get a refund if my cat doesn't like what I bought?
            </h3>
            <p className="text-justify mb-6">
              A: Only if your cat calls our customer service line and personally
              requests it.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Q: Do you sell products that can make me look younger?
            </h3>
            <p className="text-justify mb-6">
              A: Yes, our mirrors come with a free filter called 'delusion'.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Q: Can I exchange an item for something completely unrelated?
            </h3>
            <p className="text-justify mb-6">
              A: Why not? We once had someone exchange a toaster for a rubber
              duck. Best trade ever.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Q: Do you sell sugar-free sugar?
            </h3>
            <p className="text-justify mb-6">
              A: Yes, it's located in the same section as our fat-free water
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Q: New phone, who dis?
            </h3>
            <p className="text-justify mb-6">
              A: We've been trying to reach you about your car's extended
              warranty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFaq;
