import React from 'react';

const ContactPage = () => {
    return (
        <div id="content_middle" className="pt-24">
            {/* Section 1 */}
            <div className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="w-1/3">
                            {/* Left column */}
                        </div>
                        <div className="w-2/3">
                            {/* Right column */}
                            <h1 className="text-3xl font-bold mb-4">Contact Us!</h1>
                            <p className="text-lg">
                                Feel free to reach out to us for any queries, assistance, or feedback.
                                We're here to help you make the most of your advertising needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="bg-green-500 py-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2">
                            <img src="/assets/images/phone-icon.jpg" alt="Phone Icon" className="h-16" />
                            <h2 className="text-2xl font-bold text-white mt-4">Have Question? CALL US: <span className="text-yellow-400">+91-8121003003</span></h2>
                            <h3 className="text-lg text-white mt-2 font-bold">We're available Monday - Saturday (10 AM - 7 PM)</h3>
                        </div>
                        <div className="w-1/2">
                            <div className="ml-auto">
                                <img src="/assets/images/email-icon.jpg" alt="Email Icon" className="h-16" />
                                <h2 className="text-2xl font-bold text-white mt-4">Email: <a href="mailto:customercare@ads2publish.com" className="text-yellow-400">customercare@ads2publish.com</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Customer Support:</h2>
                        <p className="text-lg">
                            Our dedicated customer support team is available to assist you from Monday to Saturday, 10:00 AM to 7:00 PM IST.
                            Whether you have questions about ad booking, pricing, or need guidance on the best advertising options, we're just a call away.
                        </p>
                        <h2 className="text-3xl font-bold mt-8">Customer Relations Office:</h2>
                        <p className="text-lg">
                            4-1-938/22/B/A, 1st Floor, Ahuja Estate, Lane Opp. to Santosh Sapna Theatre, Abids, Hyderabad. India
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Feedback and Suggestions</h2>
                        <p className="text-lg">
                            We value your feedback and suggestions to enhance your experience with Ads2Publish.
                            If you have ideas for improvements or if there's something you'd like to share, please don't hesitate to let us know.
                        </p>
                        <p className="text-lg">Email: <a href="mailto:feedback@ads2publish.com" className="text-blue-500">feedback@ads2publish.com</a></p>
                        <h2 className="text-3xl font-bold mt-8">Let's Connect</h2>
                        <p className="text-lg">
                            Your satisfaction is our priority, and we're here to assist you every step of the way.
                            Reach out to us today, and let's work together to make your advertising campaigns a success.
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-3xl font-bold mb-4">Newspaper Relations Offices:</h2>
                        <ul className="text-lg">
                            <li>L.B.S. Marg, Ghatkopar West, Mumbai</li>
                            <li>15th Lane, Prabhat Road, Pune</li>
                            <li>Second Floor, Janakpuri, New Delhi</li>
                            <li>Sampige Road, Malleswaram, Bangalore</li>
                            <li>8th Cross, Nemilicherry, Thuruninravur, Chennai</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;