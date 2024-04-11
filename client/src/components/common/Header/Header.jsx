import React from 'react'

export default function Header() {
  return (
    <div>
        <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{maxWidth: 900}}>
      <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h3>
      <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Pages</a></li>
        <li className="breadcrumb-item active text-primary">About</li>
      </ol>    
    </div>
  </div>
    </div>
  )
}
