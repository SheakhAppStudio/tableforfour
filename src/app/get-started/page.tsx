'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { InputField, SingleSelect } from '@/components/sharedComponents/reuseableInputs/reuseableInputs';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { WordRotate } from '@/components/magicui/word-rotate';
import { useState } from 'react';

interface FormData {
  ownerName: string;
  email: string;
  phone: string;
  restaurantName: string;
  currentBookingMethod: string;
}

export default function GetStarted() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      ownerName: '',
      email: '',
      phone: '',
      restaurantName: '',
      currentBookingMethod: ''
    }
  });

  const bookingMethods = [
    { label: 'Phone calls only', value: 'phone-calls' },
    { label: 'Walk-ins only', value: 'walk-ins' },
    { label: 'Third-party booking platform', value: 'third-party-platform' },
    { label: 'Manual booking system (paper/spreadsheet)', value: 'manual-system' },
    { label: "We don't currently take reservations", value: 'no-reservations' },
    { label: 'Other method', value: 'other' }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post('/api/restaurants', data);
      
      if (res.status === 201) {
        toast.success('Your information has been submitted successfully!');
        reset();
      } else {
        throw new Error(res.data?.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(
        (typeof error === 'object' && error !== null && 'response' in error && 
          typeof (error as any).response?.data?.message === 'string'
          ? (error as any).response.data.message
          : 'There was an error submitting your information. Please try again.'
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get started today
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            A member of our team will reach out shortly to discuss your needs and, if you'd like, give you a platform demo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField
              name="ownerName"
              control={control}
              label="Your Name or Manager Name"
              placeholder="Enter your full name"
              rules={{ required: 'Name is required' }}

            />

            <InputField
              name="email"
              control={control}
              label="Email Address"
              placeholder="Enter your email address"
              type="email"
              rules={{ 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}

            />

            <InputField
              name="phone"
              control={control}
              label="Phone Number"
              placeholder="Enter your phone number"
              type="tel"
              rules={{ 
                required: 'Phone number is required',
                minLength: {
                  value: 10,
                  message: 'Phone number must be at least 10 digits'
                }
              }}

            />

            <InputField
              name="restaurantName"
              control={control}
              label="Restaurant Name"
              placeholder="Enter your restaurant name"
              rules={{ required: 'Restaurant name is required' }}

            />

            <SingleSelect
              name="currentBookingMethod"
              control={control}
              label="How do you currently manage table reservations?"
              options={bookingMethods}
              placeholder="Please select your current method..."
              rules={{ required: 'Please select your current method' }}

            />

            <div className="pt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? 'bg-gray-600' : 'bg-gray-900'
                } text-white py-4 px-6 rounded-lg text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex justify-center items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit Information'
                )}
              </motion.button>
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll contact you within 24 hours to get you set up
              </p>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 pt-8 border-t border-gray-200"
        > 
          <TypingAnimation 
            startOnView={true} 
            duration={100} 
            className="text-3xl sm:text-4xl text-black mb-4"
          >
            Made for restaurants like yours.
          </TypingAnimation>
          <div className="flex justify-center items-center space-x-4 opacity-60 font-semibold">
            <WordRotate
              className="text-4xl font-bold text-black dark:text-white"
              words={["Restaurant", "Bistro", "Cafe", "Diner"]}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}