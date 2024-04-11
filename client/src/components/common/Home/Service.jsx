import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../pages/Product/product.css';
import WhatsApp from '../../whatsapp/WhatsApp';
import FloatingMailIcon from '../../email floating icon/Floating'
import { Link } from 'react-router-dom';
import { client } from '../../clientaxios/Client';
export default function Service() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Function to fetch products from the admin panel
  const fetchProducts = async () => {
    try {
      // Send GET request to fetch products from the admin panel
      const response = await client.get('/products'); // Update the endpoint accordingly
      setProducts(response.data);
      setFilteredProducts(response.data); // Initialize filtered products with all products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    // Fetch products when component mounts
    fetchProducts();
  }, []);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterProducts(e.target.value);
  };

  // Function to handle dropdown change
  const handleDropdownChange = (e) => {
    setSelectedProduct(e.target.value);
    setSearchTerm(e.target.value); // Set selected product as search term
    filterProducts(e.target.value);
  };

  // Function to filter products based on search term
  const filterProducts = (term) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleBuyNow = (product) => {
    const phoneNumber = '+919843542042'; // Replace with your phone number
    const message = `Check out this product:%0A%0A${product.title}%0A${product.description}%0A${product.imageUrl}`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div>
     
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0">Our Products</h4>
            </div>
            {/* <h1 className="display-3 mb-4">Unlock Your Natural Wellness Potential with Ayurvedic Solutions</h1> */}
            <p className="mb-0">Experience the transformative power of Ayurvedic solutions curated by Dr. S. Kathija Nachiar, offering holistic remedies for anti-aging, digestive health, orthopedic concerns, and more.</p>
            {/* <div className="search-container">
              <input
                type="text"
                placeholder="Search Products"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <select
                value={selectedProduct}
                onChange={handleDropdownChange}
                className="dropdown"
              >
                <option value="">All Products</option>
                {products.map((product) => (
                  <option key={product._id} value={product.title}>{product.title}</option>
                ))}
              </select>
            </div> */}
          </div>
          <div className="row g-4 justify-content-center">
            {filteredProducts.slice(0, 4).map((product) => (
              <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" key={product._id} data-wow-delay={product.delay}>
                <div className="product-item">
                  <div className="product-img">
                    <img src={product.imageUrl} className="img-fluid w-100" alt={product.title} />
                    <div className="info">
                  

                    </div>
                  </div>
                  <div className="product-content">
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                  </div>
                  {/* <button className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2" onClick={() => handleBuyNow(product)}>BUY NOW</button> */}
                </div>
                
              </div>
            ))}
          </div>
          <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
          <Link   to="/products" className="btn btn-primary rounded-pill text-white py-3 px-5">More Products</Link>
        </div>
        </div>
      </div>
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a>   
  {/* <WhatsApp phoneNumber="9843542042" message="Hello! I'm interested in your services."/>
  <FloatingMailIcon emailAddress="Shafichannel123@gmail.com" />  */}
   </div>
  );
}
