import React from 'react';
import logo from '../../assets/logo-dark.png'
import { Facebook, Instagram, Twitter, Pinterest, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Farmers Mart Description */}
        <div>
          <img src={logo} alt="Farmers Mart Logo" className="mb-4" />
          <p className="text-sm text-gray-700">
            The Farmers Mart is that hub that offers multiple services for the benefits of all farm stakeholders.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="text-gray-500 hover:text-gray-800" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="text-gray-500 hover:text-gray-800" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="text-gray-500 hover:text-gray-800" />
            </a>
            <a href="#" aria-label="Pinterest">
              <Pinterest className="text-gray-500 hover:text-gray-800" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedIn className="text-gray-500 hover:text-gray-800" />
            </a>
          </div>
        </div>

        {/* Customer Service Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">CUSTOMER SERVICE</h4>
          <ul>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-500 text-sm">
                Help Center
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-gray-700 hover:text-gray-500 text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Policy Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">POLICY</h4>
          <ul>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-500 text-sm">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Service Center Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">SERVICE CENTER</h4>
          <p className="text-sm text-gray-700">
            Address: 8, Olarewaju Street, off Billings Way Oregun, Lagos State
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Phone: +234-02013301080
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Email: info@FarmersMart.ng
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
