'use client';
import { useForm } from 'react-hook-form';
import { FiCalendar, FiClock, FiUser, FiUsers, FiPhone, FiMail, FiInfo, FiCheck } from 'react-icons/fi';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  bookingDate: string;
  bookingTime: string;
  numberOfPeople: number;
  specialRequests?: string;
}

interface RestaurantInfo {
  restaurantName: string;
  email: string;
  phone: string;
  logo?: string;
  openingTime: string;
  closingTime: string;
}

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>({
    restaurantName: 'Restaurant Name',
    email: 'contact@restaurant.com',
    phone: '+1 (555) 123-4567',
    openingTime: '11:00',
    closingTime: '22:00'
  });
console.log(restaurantInfo)
  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      const response = await axios.get(`/api/restaurants/restaurants-info`);
      setRestaurantInfo(response.data);
    };
    fetchRestaurantInfo();
  }, []);
 const onSubmit = async (data: BookingFormData) => {
  setIsSubmitting(true);
  try {
    const response = await axios.post('/api/bookings', data);
    if (response.status === 201) {
      toast.success('Booking confirmed successfully!', {
        style: {
          background: '#10B981',
          color: '#fff',
        }
      });
      reset();
      
      // Redirect back to the referring website after successful booking
      setTimeout(() => {
        // Method 1: Use document.referrer (most common approach)
        if (document.referrer && document.referrer !== window.location.href) {
          window.location.href = document.referrer;
        } 
        // Method 2: Check for redirect URL parameter as fallback
        else {
          const urlParams = new URLSearchParams(window.location.search);
          const redirectUrl = urlParams.get('redirect') || urlParams.get('return_url');
          if (redirectUrl) {
            window.location.href = decodeURIComponent(redirectUrl);
          } else {
            // Fallback: Go back in browser history
            window.history.back();
          }
        }
      }, 2000); // 2 second delay to show success message
    }
  } catch (error) {
    toast.error('Failed to create booking. Please try again.', {
      style: {
        background: '#EF4444',
        color: '#fff',
      }
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const generateTimeSlots = () => {
    const slots = [];
    const startTime = moment(restaurantInfo.openingTime, 'HH:mm');
    const endTime = moment(restaurantInfo.closingTime, 'HH:mm');

    while (startTime <= endTime) {
      slots.push(startTime.format('HH:mm'));
      startTime.add(30, 'minutes');
    }
    return slots;
  };

  const formatTime = (time: string) => {
    return moment(time, 'HH:mm').format('h:mm A');
  };

   if(restaurantInfo ===  null) {
      return <div className='p-4 flex justify-center items-center rounded-lg min-h-screen'>
        <p className='p-4 bg-red-100 border border-red-400 text-red-700 flex justify-center items-center rounded-lg '>Invalid URL</p>
      </div>
   }
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Make a Reservation</h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Book your table at {restaurantInfo.restaurantName}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="md:flex">
            {/* Restaurant Info Sidebar */}
            <div className="md:w-1/3 bg-gray-900 text-white p-8">
              <div className="flex items-center space-x-4 md:mb-8">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                  {restaurantInfo.logo ? (
                    <img src={restaurantInfo.logo} alt={restaurantInfo.restaurantName} className="w-12 h-12 rounded object-cover" />
                  ) : (
                    <span className="text-gray-900 text-xl font-bold">{restaurantInfo.restaurantName.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{restaurantInfo.restaurantName}</h2>
                  <p className="text-gray-300 text-sm">{formatTime(restaurantInfo.openingTime)} - {formatTime(restaurantInfo.closingTime)}</p>
                </div>
              </div>

              <div className="space-y-6 md:flex flex-col hidden">
                <div className="flex items-start space-x-4">
                  <FiClock className="w-5 h-5 text-gray-300 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-gray-300 text-sm">
                      {formatTime(restaurantInfo.openingTime)} - {formatTime(restaurantInfo.closingTime)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiPhone className="w-5 h-5 text-gray-300 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-300 text-sm">{restaurantInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiMail className="w-5 h-5 text-gray-300 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-300 text-sm break-all">{restaurantInfo.email}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h3 className="font-medium mb-3">Reservation Policy</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start space-x-2">
                      <FiCheck className="w-4 h-4 text-green-400 mt-0.5" />
                      <span>Instant confirmation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <FiCheck className="w-4 h-4 text-green-400 mt-0.5" />
                      <span>Free cancellation 2+ hours prior</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <FiCheck className="w-4 h-4 text-green-400 mt-0.5" />
                      <span>Special requests accommodated</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register('name', { required: 'Full name is required' })}
                        type="text"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register('phone', { required: 'Phone number is required' })}
                        type="tel"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (___) ___-____"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        {...register('bookingDate', { 
                          required: 'Date is required',
                          validate: value => {
                            const selectedDate = moment(value);
                            const today = moment().startOf('day');
                            return selectedDate >= today || 'Date must be today or in the future';
                          }
                        })}
                        type="date"
                        min={moment().format('YYYY-MM-DD')}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    {errors.bookingDate && <p className="mt-1 text-sm text-red-600">{errors.bookingDate.message}</p>}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                    <div className="relative">
                      <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        {...register('bookingTime', { required: 'Time is required' })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      >
                        <option value="">Select time</option>
                        {generateTimeSlots().map((time) => (
                          <option key={time} value={time}>{formatTime(time)}</option>
                        ))}
                      </select>
                    </div>
                    {errors.bookingTime && <p className="mt-1 text-sm text-red-600">{errors.bookingTime.message}</p>}
                  </div>

                  {/* Number of People */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Party Size *</label>
                    <div className="relative">
                      <FiUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        {...register('numberOfPeople', { 
                          required: 'Number of people is required',
                          min: { value: 1, message: 'Minimum 1 person' },
                          max: { value: 30, message: 'Maximum 30 people' }
                        })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      >
                        <option value="">Select number</option>
                        {[...Array(30)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'person' : 'people'}</option>
                        ))}
                      </select>
                    </div>
                    {errors.numberOfPeople && <p className="mt-1 text-sm text-red-600">{errors.numberOfPeople.message}</p>}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    {...register('specialRequests')}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Dietary restrictions, celebrations, etc."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-700 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <FiCheck className="w-5 h-5" />
                        <span>Confirm Reservation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
           <div className="md:hidden bg-gray-900 text-white p-6 space-y-6">
            <div className="flex items-start space-x-4">
              <FiClock className="w-5 h-5 text-gray-300 mt-0.5" />
              <div>
                <h3 className="font-medium">Hours</h3>
                <p className="text-gray-300 text-sm">
                  {formatTime(restaurantInfo.openingTime)} - {formatTime(restaurantInfo.closingTime)}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiPhone className="w-5 h-5 text-gray-300 mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-300 text-sm">{restaurantInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiMail className="w-5 h-5 text-gray-300 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-300 text-sm break-all">{restaurantInfo.email}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <h3 className="font-medium mb-3">Reservation Policy</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <FiCheck className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Instant confirmation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FiCheck className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Free cancellation 2+ hours prior</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FiCheck className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Special requests accommodated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Powered by <a href="https://www.tableforfour.co/" className="font-medium text-gray-700">TableForFour</a>
          </p>
        </div>
      </div>
    </div>
  );
}