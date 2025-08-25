import Head from 'next/head';
import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Terms of Service | Table For Four</title>
        <meta name="description" content="Terms governing your use of our restaurant booking platform" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="text-black hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Effective Date: 11-08-2025</p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="mb-0">
            Welcome to Table For Four! These Terms of Service ("Terms") govern your use of our restaurant booking 
            platform and related services. By accessing or using our platform, you agree to comply with these Terms.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Using Our Service</h2>
            <p className="text-gray-700">
              You agree to use our platform responsibly and in accordance with all applicable laws. Our service is designed to help restaurant owners manage bookings and communicate with customers efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Account Responsibility</h2>
            <p className="text-gray-700">
              You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Please notify us immediately if you suspect any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Provided</h2>
            <p className="text-gray-700">
              You acknowledge that your use of the service involves inputting and storing customer data such as names, contact details, and booking information. You confirm that you have the right to collect and use this data and consent to its storage and use as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Service Availability</h2>
            <p className="text-gray-700">
              While we strive to provide reliable service, we do not guarantee uninterrupted access. We may perform maintenance or updates that could temporarily affect service availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
            <p className="text-gray-700">
              All content, features, and functionality of the platform are owned by Table for four or its licensors and are protected by intellectual property laws. You may not copy, modify, or distribute any part of our service without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              Table for four is not liable for any indirect, incidental, or consequential damages arising from your use of the service. We provide the platform "as is" and do not guarantee specific results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate your access if you violate these Terms or engage in harmful behavior.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms periodically. Continued use of the service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium mb-4">Need help understanding these terms?</h3>
          <a 
            href="mailto:tableforfourhelpline@gmail.com" 
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
          <p className="text-gray-500 mt-6">Thank you for choosing Table for Four.</p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;