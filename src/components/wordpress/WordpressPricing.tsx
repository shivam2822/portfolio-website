import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-xl text-gray-600">
            Transparent pricing with no hidden costs
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Development Package */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Website Development
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-blue-600">$249</span>
                <span className="text-gray-600"> one-time</span>
              </div>
              <p className="text-gray-600 mb-6">
                Complete WordPress website development with all essential
                features
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">
                    Custom WordPress Development
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">
                    Contact Form Integration
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Basic SEO Setup</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Yearly Support */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Yearly Support
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-blue-600">$499</span>
                <span className="text-gray-600"> /year</span>
              </div>
              <p className="text-gray-600 mb-6">
                Ongoing support and maintenance for your website
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Regular Updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Security Monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Technical Support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Content Updates</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Additional Note */}
        <motion.div
          className="mt-8 bg-blue-50 rounded-lg p-4 flex items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Info className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-900">
            Note: Hosting and domain charges are not included in the above
            prices. These will be billed separately based on your specific
            requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
