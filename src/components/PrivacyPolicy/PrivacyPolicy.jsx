import React from "react";

const PrivacyPolicy = () => {

    return(
        <div className="privacy-policy-container px-6 py-8 text-gray-700">
            <h1 className="text-2xl font-bold text-farmersmartGreen mb-6">Farmers Mart Privacy Policy</h1>
            <p className="mb-4">
                Welcome to Farmers Mart! Your privacy is important to us, and we are committed to protecting
                your personal information. This Privacy Policy explains how we collect, use, and safeguard your
                data when you interact with our platform.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <h3 className="font-semibold text-gray-800 mb-2">1.1 Personal Information</h3>
            <ul className="list-disc ml-8 mb-4">
                <li>Account Registration: Name, email address, phone number, and password.</li>
                <li>Order Information: Delivery address, payment details (e.g., card information or transaction ID).</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mb-2">1.2 Non-Personal Information</h3>
            <ul className="list-disc ml-8 mb-4">
                <li>Device information (e.g., IP address, browser type, operating system).</li>
                <li>Usage data, including pages visited, time spent, and navigation patterns.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc ml-8 mb-4">
                <li>To process and deliver your orders.</li>
                <li>To communicate with you regarding your orders, inquiries, or support requests.</li>
                <li>To improve our platform, including user experience and services.</li>
                <li>To provide personalized offers, discounts, and marketing materials (with your consent).</li>
                <li>To comply with legal and regulatory requirements.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Share Your Information</h2>
            <p className="mb-2">We do not sell or rent your personal data. However, we may share your information with:</p>
            <ul className="list-disc ml-8 mb-4">
                <li>
                <strong>Service Providers:</strong> Third-party vendors (e.g., payment processors, delivery partners) to fulfill your orders.
                </li>
                <li>
                <strong>Legal Authorities:</strong> When required by law or to protect our rights.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Your Rights</h2>
            <ul className="list-disc ml-8 mb-4">
                <li>Access, correct, or update your personal data.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Request data deletion (subject to legal or operational retention requirements).</li>
            </ul>
            <p className="mb-4">
                To exercise your rights, please contact us at <a href="mailto:info@FarmersMart.ng" className="text-blue-500">info@FarmersMart.ng</a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
            <p className="mb-4">
                We implement robust security measures to protect your personal data from unauthorized access,
                alteration, or disclosure. However, no online platform can guarantee 100% security.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Retention</h2>
            <p className="mb-4">
                We retain your data for as long as necessary to provide our services and comply with legal obligations.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Third-Party Links</h2>
            <p className="mb-4">
                Our platform may contain links to third-party websites. We are not responsible for their privacy
                practices, and we encourage you to review their policies.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Updates to This Privacy Policy</h2>
            <p className="mb-4">
                We may update this policy from time to time. Significant changes will be communicated via email or a
                prominent notice on our platform.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Contact Us</h2>
            <p className="mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none mb-4">
                <li><strong>Farmers Mart</strong></li>
                <li>Email: <a href="mailto:info@FarmersMart.ng" className="text-blue-500">info@FarmersMart.ng</a></li>
                <li>Phone: +234-02013301080</li>
            </ul>

            <p className="mt-6">
                Thank you for trusting <strong>Farmers Mart!</strong>
            </p>
        </div>
    )
}

export default PrivacyPolicy