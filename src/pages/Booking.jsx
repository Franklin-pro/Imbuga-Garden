import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Calendar, Users, CreditCard, ArrowLeft, ArrowRight, MapPin, Phone, Mail, User } from 'lucide-react'

const Booking = () => {
  const location = useLocation()
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: location.state?.selectedService || '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    venue: '',
    clientInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    },
    specialRequests: '',
    package: '',
    totalAmount: 0,
    paymentMethod: 'bank'
  })

  const services = [
    { id: 'wedding', name: 'Wedding Protocol', price: 1500, duration: '8 hours', icon: '💒' },
    { id: 'corporate', name: 'Corporate Events', price: 800, duration: '4 hours', icon: '🏢' },
    { id: 'anniversary', name: 'Anniversary Celebrations', price: 600, duration: '4 hours', icon: '🎉' },
    { id: 'cultural', name: 'Cultural Ceremonies', price: 700, duration: '6 hours', icon: '🎎' },
    { id: 'special', name: 'Special Occasions', price: 400, duration: '3 hours', icon: '🎂' },
    { id: 'award', name: 'Award Ceremonies', price: 900, duration: '5 hours', icon: '🏆' }
  ]

  const packages = [
    { id: 'basic', name: 'Basic Package', multiplier: 1, features: ['Event coordination', 'Timeline management', 'Basic protocol guidance'] },
    { id: 'premium', name: 'Premium Package', multiplier: 1.5, features: ['Everything in Basic', 'Cultural ceremony expertise', 'VIP guest handling', 'Emergency planning'] },
    { id: 'luxury', name: 'Luxury Package', multiplier: 2, features: ['Everything in Premium', '24/7 support', 'Personal coordinator', 'Custom protocols', 'Photography coordination'] }
  ]

  const steps = [
    { number: 1, title: 'Service', icon: <Calendar className="h-5 w-5" /> },
    { number: 2, title: 'Details', icon: <Users className="h-5 w-5" /> },
    { number: 3, title: 'Information', icon: <User className="h-5 w-5" /> },
    { number: 4, title: 'Payment', icon: <CreditCard className="h-5 w-5" /> }
  ]

  const updateBookingData = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setBookingData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }))
    } else {
      setBookingData(prev => ({ ...prev, [field]: value }))
    }
  }

  const calculateTotal = () => {
    const selectedService = services.find(s => s.id === bookingData.service)
    const selectedPackage = packages.find(p => p.id === bookingData.package)
    if (selectedService && selectedPackage) {
      return selectedService.price * selectedPackage.multiplier
    }
    return 0
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      if (currentStep === 3) {
        setBookingData(prev => ({ ...prev, totalAmount: calculateTotal() }))
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Handle payment processing here
    try {
      console.log('Booking Data:', bookingData)
      // const res = fetch('/api/process-payment', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(bookingData)
      // })
      // if (res.ok) {
      //   alert('Payment successful! Your booking is confirmed.')
      // } else {
      //   alert('Payment failed. Please try again.')
      // }
    } catch (error) {
      console.error('Error processing payment:', error)
    }
  }

  // Validation functions
  const isStep1Valid = () => bookingData.service !== ''
  const isStep2Valid = () => bookingData.eventDate && bookingData.eventTime && bookingData.guestCount && bookingData.venue && bookingData.package
  const isStep3Valid = () => {
    const { firstName, lastName, email, phone } = bookingData.clientInfo
    return firstName && lastName && email && phone
  }

  const getStepValidation = () => {
    switch(currentStep) {
      case 1: return isStep1Valid()
      case 2: return isStep2Valid()
      case 3: return isStep3Valid()
      default: return true
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Event Booking</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Complete your booking in just a few simple steps. Our protocol experts are ready to make your event exceptional.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 md:space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                    currentStep >= step.number 
                      ? 'bg-green-500 text-white shadow-lg' 
                      : 'bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-400'
                  }`}>
                    {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : step.icon}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className={`text-sm font-medium ${currentStep >= step.number ? 'text-green-500' : 'text-slate-400'}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 md:w-16 h-0.5 mx-4 ${
                      currentStep > step.number ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Select Your Service</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => updateBookingData('service', service.id)}
                          className={`p-5 border rounded-lg cursor-pointer transition-all flex items-start ${
                            bookingData.service === service.id
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-md'
                              : 'border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700'
                          }`}
                        >
                          <div className="text-2xl mr-4">{service.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">{service.name}</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">Duration: {service.duration}</p>
                            <p className="text-lg font-bold text-green-600 dark:text-green-400">${service.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Event Details */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Event Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Event Date</label>
                        <input
                          type="date"
                          value={bookingData.eventDate}
                          onChange={(e) => updateBookingData('eventDate', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Event Time</label>
                        <input
                          type="time"
                          value={bookingData.eventTime}
                          onChange={(e) => updateBookingData('eventTime', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Number of Guests</label>
                        <select
                          value={bookingData.guestCount}
                          onChange={(e) => updateBookingData('guestCount', e.target.value)}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        >
                          <option value="">Select guest count</option>
                          <option value="1-50">1-50 guests</option>
                          <option value="51-100">51-100 guests</option>
                          <option value="101-200">101-200 guests</option>
                          <option value="201-500">201-500 guests</option>
                          <option value="500+">500+ guests</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Venue Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                          <input
                            type="text"
                            value={bookingData.venue}
                            onChange={(e) => updateBookingData('venue', e.target.value)}
                            placeholder="Event venue address"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">Select Package</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {packages.map((pkg) => (
                          <div
                            key={pkg.id}
                            onClick={() => updateBookingData('package', pkg.id)}
                            className={`p-5 border rounded-lg cursor-pointer transition-all ${
                              bookingData.package === pkg.id
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-md'
                                : 'border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700'
                            }`}
                          >
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">{pkg.name}</h3>
                            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2 mb-4">
                              {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="text-lg font-bold text-green-600 dark:text-green-400">
                              {pkg.multiplier === 1 ? 'Standard Rate' : pkg.multiplier === 1.5 ? '+50%' : '+100%'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Special Requests</label>
                      <textarea
                        value={bookingData.specialRequests}
                        onChange={(e) => updateBookingData('specialRequests', e.target.value)}
                        rows={4}
                        placeholder="Any special requirements or requests..."
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Client Information */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Your Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                          <input
                            type="text"
                            value={bookingData.clientInfo.firstName}
                            onChange={(e) => updateBookingData('clientInfo.firstName', e.target.value)}
                            placeholder="John"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                          <input
                            type="text"
                            value={bookingData.clientInfo.lastName}
                            onChange={(e) => updateBookingData('clientInfo.lastName', e.target.value)}
                            placeholder="Doe"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                          <input
                            type="email"
                            value={bookingData.clientInfo.email}
                            onChange={(e) => updateBookingData('clientInfo.email', e.target.value)}
                            placeholder="john.doe@example.com"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                          <input
                            type="tel"
                            value={bookingData.clientInfo.phone}
                            onChange={(e) => updateBookingData('clientInfo.phone', e.target.value)}
                            placeholder="+1234567890"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Address</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                          <input
                            type="text"
                            value={bookingData.clientInfo.address}
                            onChange={(e) => updateBookingData('clientInfo.address', e.target.value)}
                            placeholder="123 Main Street, City, Country"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Payment */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Payment Details</h2>
                    
                    {/* Order Summary */}
                    <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Order Summary</h3>
                      <div className="space-y-3 text-slate-700 dark:text-slate-300">
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="font-medium">{services.find(s => s.id === bookingData.service)?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Package:</span>
                          <span className="font-medium">{packages.find(p => p.id === bookingData.package)?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span className="font-medium">{bookingData.eventDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">{bookingData.eventTime}</span>
                        </div>
                        <div className="border-t border-slate-200 dark:border-slate-600 pt-3 mt-3">
                          <div className="flex justify-between text-lg font-bold text-slate-800 dark:text-white">
                            <span>Total Amount:</span>
                            <span>${calculateTotal().toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method Selection */}
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">Payment Method</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                          onClick={() => updateBookingData('paymentMethod', 'bank')}
                          className={`p-5 border rounded-lg cursor-pointer transition-all flex items-center ${
                            bookingData.paymentMethod === 'bank'
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-md'
                              : 'border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700'
                          }`}
                        >
                          <div className="bg-slate-100 dark:bg-slate-600 p-2 rounded-md mr-4">
                            <CreditCard className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800 dark:text-white">Bank Transfer</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300">Pay via bank transfer</p>
                          </div>
                        </div>
                        <div
                          onClick={() => updateBookingData('paymentMethod', 'mobile')}
                          className={`p-5 border rounded-lg cursor-pointer transition-all flex items-center ${
                            bookingData.paymentMethod === 'mobile'
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-md'
                              : 'border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700'
                          }`}
                        >
                          <div className="bg-slate-100 dark:bg-slate-600 p-2 rounded-md mr-4">
                            <Phone className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800 dark:text-white">Mobile Money</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300">Pay via mobile money</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Details */}
                    {bookingData.paymentMethod === 'bank' && (
                      <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Bank Transfer Details</h3>
                        <div className="space-y-3 text-slate-700 dark:text-slate-300">
                          <div className="flex justify-between">
                            <span className="font-medium">Bank Name:</span>
                            <span>Bank of Kigali</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Account Number:</span>
                            <span>1100122033202222</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Account Name:</span>
                            <span>Frank Ndanyuzwe</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">SWIFT/BIC:</span>
                            <span>BKIGRWRW</span>
                          </div>
                          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 rounded border-l-4 border-green-500">
                            <p className="text-sm text-green-800 dark:text-green-200">
                              Please include your full name as the transfer reference. Payment processing may take 1-2 business days.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {bookingData.paymentMethod === 'mobile' && (
                      <div className="bg-green-50 dark:bg-slate-700 p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Mobile Money Details</h3>
                        <div className="space-y-3 text-slate-700 dark:text-slate-300">
                          <div className="flex justify-between">
                            <span className="font-medium">Provider:</span>
                            <span>MTN Mobile Money</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Name:</span>
                            <span>Frank Ndanyuzwe</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Phone Number:</span>
                            <span>+250790019543</span>
                          </div>
                          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 rounded border-l-4 border-green-500">
                            <p className="text-sm text-green-800 dark:text-green-200">
                              Send payment to the number above and include your name as the transaction reference. You will receive a confirmation SMS.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="text-sm text-slate-600 dark:text-slate-400 italic">
                      By completing this booking, you agree to our terms and conditions. A confirmation email will be sent to you with further details.
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                      currentStep === 1
                        ? 'text-slate-400 dark:text-slate-500 cursor-not-allowed'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back
                  </button>

                  {currentStep < 4 ? (
                    <button
                      onClick={nextStep}
                      disabled={!getStepValidation()}
                      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                        getStepValidation()
                          ? 'bg-green-600 text-white hover:bg-green-700 shadow-md'
                          : 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Continue
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all shadow-md"
                    >
                      Confirm Booking
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:w-96">
            <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-slate-200 dark:border-slate-700 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">Booking Summary</h3>
              
              {bookingData.service && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Service</h4>
                  <p className="text-slate-800 dark:text-white font-medium">
                    {services.find(s => s.id === bookingData.service)?.name}
                  </p>
                </div>
              )}
              
              {bookingData.package && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Package</h4>
                  <p className="text-slate-800 dark:text-white font-medium">
                    {packages.find(p => p.id === bookingData.package)?.name}
                  </p>
                </div>
              )}
              
              {bookingData.eventDate && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Event Date & Time</h4>
                  <p className="text-slate-800 dark:text-white font-medium">
                    {bookingData.eventDate} {bookingData.eventTime && `at ${bookingData.eventTime}`}
                  </p>
                </div>
              )}
              
              {bookingData.guestCount && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Guests</h4>
                  <p className="text-slate-800 dark:text-white font-medium">
                    {bookingData.guestCount} guests
                  </p>
                </div>
              )}
              
              {bookingData.venue && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Venue</h4>
                  <p className="text-slate-800 dark:text-white font-medium truncate">
                    {bookingData.venue}
                  </p>
                </div>
              )}
              
              {(bookingData.service && bookingData.package) && (
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 dark:text-slate-300">Subtotal:</span>
                    <span className="text-slate-800 dark:text-white font-medium">${calculateTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 dark:text-slate-300">Tax:</span>
                    <span className="text-slate-800 dark:text-white font-medium">Included</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-lg font-bold text-slate-800 dark:text-white">Total:</span>
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">${calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              )}
              
              <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
                <p>Your booking is not confirmed until payment is completed and confirmed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking