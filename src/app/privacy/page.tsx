import Head from 'next/head';
import { Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Table For Four</title>
        <meta name="description" content="Our commitment to protecting your personal information" />
      </Head>

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Effective Date: 11-08-2025</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="mb-4">
            At Table For Four, we respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and store data when you use our restaurant booking 
            platform and related services.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "1. No Data Collection Without Permission",
              content: "By using our service, you can be confident that we do not collect any of your personal data or your customers' data without your explicit permission. Your privacy and control over your information are our top priorities."
            },
            {
              title: "2. Customer Data Usage",
              content: "As a restaurant owner using our platform, you may input your customers' information (such as names, contact details, and booking preferences) to manage reservations efficiently. We only collect and store this data to provide you with easy access and to facilitate the booking process."
            },
            {
              title: "3. Data Storage and Security",
              content: "We take appropriate measures to store your data securely and protect it from unauthorized access, loss, or misuse. Your customers' information is only used to support the functionality of our platform and is not shared with third parties without your consent."
            },
            {
              title: "4. Your Control Over Data",
              content: "You have full control over your customers' data stored on our platform. You can access, update, or delete this information at any time through your account settings. You can ask us to delete all the data from our system including your account."
            },
            {
              title: "5. No Marketing Without Consent",
              content: "We do not use your data or your customers' data for marketing purposes without your explicit permission."
            },
            {
              title: "6. Changes to This Policy",
              content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes through our platform or via email."
            }
          ].map((item, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
              <p className="mb-4">{item.content}</p>
              {index < 5 && <hr className="my-4 border-gray-200" />}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium mb-4">Have questions about our privacy practices?</h3>
          <a
            href="mailto:tableforfourhelpline@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors mt-4"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </a>
          <p className="text-sm text-gray-500 mt-6">
            Thank you for trusting Table for Four to support your restaurant's booking needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;