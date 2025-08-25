"use client"
import { uploadToCloudinary } from '@/components/sharedComponents/uploadFiles/uploadCloudinary';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  restaurantName: string;
  totalSeats: number;
  openingTime: string;
  closingTime: string;
  logo: FileList;
  password: string;
  confirmPassword: string;
};

export default function RestaurantSetupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [logoPreview, setLogoPreview] = useState('');
  const router = useRouter();
  const form = useForm<FormData>({
    mode: 'onChange',
    shouldUnregister: true
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');

    try {
      // Validate passwords match
      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Create FormData for file upload
      const formData = new FormData();
      formData.append('restaurantName', data.restaurantName);
      formData.append('totalSeats', data.totalSeats.toString());
      formData.append('openingTime', data.openingTime);
      formData.append('closingTime', data.closingTime);
      formData.append('password', data.password);
      const logo = await uploadToCloudinary(data.logo[0]);
      // Replace with your actual API call
      console.log('All data submitted:', {
        restaurantName: data.restaurantName,
        totalSeats: data.totalSeats,
        openingTime: data.openingTime,
        closingTime: data.closingTime,
        password: data.password
      });
       const response = await axios.post('/api/users/set-password', {
        totalSeats: data.totalSeats,
        openingTime: data.openingTime,
        closingTime: data.closingTime,
        password: data.password,
        logo,
      });
      setSuccess(true);
      setTimeout(() => {
        // Redirect to dashboard
router.push('/watch-demo#app-download');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to save information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      form.setValue('logo', e.target.files as FileList);
    }
  };

  const validateOpeningTime = (closingTime: string) => {
    const openingTime = form.getValues('openingTime');
    if (openingTime && closingTime) {
      return openingTime < closingTime || 'Closing time must be after opening time';
    }
    return true;
  };

  const validateClosingTime = (openingTime: string) => {
    const closingTime = form.getValues('closingTime');
    if (openingTime && closingTime) {
      return openingTime < closingTime || 'Opening time must be before closing time';
    }
    return true;
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white text-black p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Setup Complete!</h1>
          <p className="mb-6">
            Your restaurant information and password have been saved successfully. Redirecting to your dashboard...
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-black h-2.5 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white text-black rounded-lg shadow-lg overflow-hidden">
        <div className="p-8" style={{ minHeight: '600px' }}>
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Restaurant Setup</h1>
            <p className="text-gray-600">Complete your restaurant information and set your password</p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-grow flex flex-col">
            <div className="space-y-6 flex-grow">


              {/* Logo Upload */}
              <div>
                <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Logo
                </label>
                <div className="mt-1">
                  <label
                    htmlFor="logo"
                    className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer ${
                      logoPreview ? 'border-transparent' : 'border-gray-300 hover:border-gray-400'
                    } transition-colors`}
                  >
                    {logoPreview ? (
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="w-full h-full object-contain p-2 rounded-md"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-10 h-10 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    )}
                    <input
                      id="logo"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoChange}
                    />
                  </label>
                </div>
              </div>

              {/* Total Seats */}
              <div>
                <label htmlFor="totalSeats" className="block text-sm font-medium text-gray-700 mb-1">
                  Total Number of Seats
                </label>
                <input
                  id="totalSeats"
                  type="number"
                  min="1"
                  {...form.register('totalSeats', {
                    required: 'Number of seats is required',
                    min: { value: 1, message: 'Must have at least 1 seat' },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    form.formState.errors.totalSeats
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-black'
                  }`}
                />
                {form.formState.errors.totalSeats && (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.totalSeats.message}
                  </p>
                )}
              </div>

              {/* Opening Hours */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="openingTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Opening Time
                  </label>
                  <input
                    id="openingTime"
                    type="time"
                    {...form.register('openingTime', {
                      required: 'Opening time is required',
                      validate: validateClosingTime
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      form.formState.errors.openingTime
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:ring-black'
                    }`}
                  />
                  {form.formState.errors.openingTime && (
                    <p className="mt-1 text-sm text-red-600">
                      {form.formState.errors.openingTime.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="closingTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Closing Time
                  </label>
                  <input
                    id="closingTime"
                    type="time"
                    {...form.register('closingTime', {
                      required: 'Closing time is required',
                      validate: validateOpeningTime
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      form.formState.errors.closingTime
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-gray-300 focus:ring-black'
                    }`}
                  />
                  {form.formState.errors.closingTime && (
                    <p className="mt-1 text-sm text-red-600">
                      {form.formState.errors.closingTime.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...form.register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters',
                    },
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    form.formState.errors.password
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-black'
                  }`}
                />
                {form.formState.errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  {...form.register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) =>
                      value === form.watch('password') || 'Passwords do not match',
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    form.formState.errors.confirmPassword
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-black'
                  }`}
                />
                {form.formState.errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || !form.formState.isValid}
                className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
                  isSubmitting || !form.formState.isValid ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Completing Setup...
                  </span>
                ) : (
                  'Complete Setup'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}