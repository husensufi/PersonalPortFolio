import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import image from '../assets/cc.jpg'

const Contact = () => {
    const [location, setLocation] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Data submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    // Handle live location detection
    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                    setShowMap(true);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <section className="py-24 bg-gray-900">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Contact Us
            </h1>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 grid-cols-1 gap-10">
                {/* Contact Details */}
                <div className="relative">
                    <img
                        src={ image }//"https://media.istockphoto.com/id/1446629251/photo/contact-us-or-customer-support-hotline-people-connect-businessman-using-a-laptop-and-touching.jpg?s=612x612&w=0&k=20&c=9wmNi0CySoJTU7KFh2QMhZCK2ntzDyaD7Zm_gXbpEac="
                        alt="Contact Us"
                        className="w-full h-full rounded-2xl shadow-lg"
                    />
                    <div className="absolute bottom-0 w-full p-6 bg-white rounded-lg shadow-md">
                        <div className="mb-6 flex items-center gap-4">
                            <Phone className="text-indigo-600" />
                            <p className="text-gray-900 text-lg">+91 8867518213</p>
                        </div>
                        <div className="mb-6 flex items-center gap-4">
                            <Mail className="text-indigo-600" />
                            <p className="text-gray-900 text-lg">23ca032.husen@sjec.ac.in</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="text-indigo-600" />
                            <p className="text-gray-900 text-lg">Mangalore, Karnataka 575002</p>
                        </div>
                        {/* Social Media Icons */}
                        <div className="mt-6 flex justify-center gap-6">
                            <a href="https://linkedin.com/in/husensufi" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-2x text-blue-600 hover:text-blue-800 transition-all"></i>
                            </a>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram fa-2x text-pink-600 hover:text-pink-800 transition-all"></i>
                            </a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook fa-2x text-blue-500 hover:text-blue-700 transition-all"></i>
                            </a>
                            <a href="https://wa.me/8867518213" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp fa-2x text-green-500 hover:text-green-700 transition-all"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-200 p-10 rounded-2xl shadow-lg">
                    <h2 className="text-indigo-600 text-4xl font-semibold mb-8">Send Me A Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" className="w-full p-4 rounded-full border border-gray-300" required value={formData.name} onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" className="w-full p-4 rounded-full border border-gray-300" required value={formData.email} onChange={handleChange} />
                        <input type="tel" name="phone" placeholder="Phone" className="w-full p-4 rounded-full border border-gray-300" required value={formData.phone} onChange={handleChange} />
                        <textarea name="message" placeholder="Message" className="w-full p-4 rounded-lg border border-gray-300" rows="4" required value={formData.message} onChange={handleChange}></textarea>
                        <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-800 transition-all">Send Message</button>
                    </form>
                    <button onClick={handleLocation} className="mt-6 w-full py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-all">Get My Location</button>
                    {showMap && location && (
                        <iframe
                            src={`https://www.google.com/maps?q=${location.lat},${location.lng}&output=embed`}
                            className="mt-4 w-full h-64 rounded-lg border border-gray-300"
                            title="User Location"
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;