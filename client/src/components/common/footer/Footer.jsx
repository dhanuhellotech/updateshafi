// import React from "react";
// import { Link } from "react-router-dom";
// // import './footer.css'
// export default function Footer() {
//   return (
//     <div>
//       <div
//         className="container-fluid footer py-5 wow fadeIn"
//         data-wow-delay="0.2s"
//       >
//         <div className="container py-5">
//           <div className="row g-4 align-items-center justify-content-center ">
//             <div className="col-md-6 col-lg-6 col-xl-4">
//               <div className="footer-item d-flex flex-column">
//                 <h4 className="text-white mb-4 text-start">
//                   SHAFI ACUPUNCTURE & AYURVEDIC HEALTH CENTRE
//                 </h4>
//                 <p>
//                   Welcome to SHAFI ACUPUNCTURE & AYURVEDIC HEALTH CENTRE.
//                   Specializing in holistic healing through acupuncture,
//                   ayurveda, and wellness products, our team is dedicated to your
//                   well-being.
//                 </p>
//                 <div className="d-flex align-items-center ">
//                   <i className="fas fa-share fa-2x text-white me-2" />

//                   <Link
//                     to="https://youtube.com/shorts/QnLPtqOEBwI?si=0QS5QBD1jGgLVvQc"
//                     className="btn-square btn btn-primary text-white rounded-circle mx-1"
//                   >
//                     <i className="fab fa-youtube" />
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 col-lg-6 col-xl-4">
//               <div id="re" className="footer-item d-flex flex-column">
//                 <h4 className="mb-4 text-white text-start">Quick Links</h4>
//                 <Link to="/" className="nav-item nav-link active">
//                   Home
//                 </Link>
//                 <Link to="/about" className="nav-item nav-link">
//                   About
//                 </Link>
//                 <Link to="/treatment" className="nav-item nav-link">
//                   Therapeutic Approaches
//                 </Link>
//                 <Link to="/Products" className="nav-item nav-link">
//                   Our Offerings
//                 </Link>
//                 <Link to="/Institution" className="nav-item nav-link">
//                   Atama Study Center
//                 </Link>
//                 <a href="https://shafiadmin.helloregister.in" className="nav-item nav-link">
//                   Admin
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-4">
//               <div className="footer-item d-flex flex-column">
//                 <h4 className="mb-4 text-white text-start">Contact Info</h4>
//                 <a href>
//                   <i className="fa fa-map-marker-alt me-2" /> SHAFI acu &
//                   ayurvedic, 470, W First Cross St, Mellur, KK Nagar, Madurai,
//                   Tamil Nadu 625020
//                 </a>
//                 <a href>
//                   <i className="fas fa-envelope me-2" />{" "}
//                   Shafichannel123@gmail.com
//                 </a>
//                 <a href>
//                   <i className="fas fa-phone me-2 fa-flip-horizontal" />
//                   +91-9843542042
//                 </a>
//                 <a href className="mb-3">
//                   <i className="fas fa-print me-2" />
//                   9843276306
//                 </a>
//               </div>
//             </div>

      
//           </div>
          
//         </div>
//       </div>

//       <div className="container-fluid copyright py-4">
//         <div className="container">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-md-6 text-center text-white">
//               Designed By{" "}
//               <Link to="https://hellowtec.com/" style={{ color: "" }}>
//                 {" "}
//                 Hello Technologies
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './foot.css'
// function Footer() {
//   return (
//     <div className="footer-dark">
//       <footer>
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-6 col-md-3 item">
//               <h3 className='font'>Services</h3>
//               <ul>
//                 <li>
//                   <li>     <Link to="/" className="">
//                   Home
//                 </Link></li>
//           <li>  <Link to="/about" className="">
//                   About
//                 </Link></li>
//              <li>  <Link to="/treatment" className="">
//                   Therapeutic Approaches
//                 </Link></li>
//               <li>   <Link to="/Products" className="">
//                   Our Offerings
//                 </Link></li>
//              <li> <Link to="/Institution" className="">
//                   Atama Study Center
//                 </Link></li>
//                <li>      <Link to=" " className="">
//                   Admin
//                 </Link></li>
          
//                 </li>
//               </ul>
//             </div>
//             <div className="col-sm-6 col-md-3 item">
//               <h3 className='font'>About</h3>
//               <ul>
//                 <li><a href="#">Company</a></li>
//                 <li><a href="#">Team</a></li>
//                 <li><a href="#">Careers</a></li>
//               </ul>
//             </div>
//             <div className="col-md-6 item text">
//               <h3 className='font'>Shafi ayurvedic and Accupunture </h3>
//               <p>  Welcome to SHAFI ACUPUNCTURE & AYURVEDIC HEALTH CENTRE.
//                   Specializing in holistic healing through acupuncture,
//                   ayurveda, and wellness products, our team is dedicated to your
//                   well-being.</p>
//             </div>
//             <div className="col item social">
//               <a href="#"><i className="icon ion-social-facebook"></i></a>
//               <a href="#"><i className="icon ion-social-twitter"></i></a>
//               <a href="#"><i className="icon ion-social-snapchat"></i></a>
//               <a href="#"><i className="icon ion-social-instagram"></i></a>
//             </div>
//           </div>
//           <p className="copyrights">Company Name © 2018</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;
import React from 'react';
import './foot.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="third">
              <h4>Shafi Acupuncture & Ayurvedic</h4>
              <p>Welcome to SHAFI ACUPUNCTURE & AYURVEDIC HEALTH CENTRE. Specializing in holistic healing through acupuncture, ayurveda, and wellness products, our team is dedicated to your well-being.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="first">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="/" className="d-block mb-2 link-color">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="d-block mb-2 link-color">About</Link>
                  </li>
                  <li>
                    <Link to="/treatment" className="d-block mb-2 link-color">Therapeutic Approaches</Link>
                  </li>
                  <li>
                    <Link to="/products" className="d-block mb-2 link-color">Our Offerings</Link>
                  </li>
                  <li>
                    <Link to="/Institution" className="d-block mb-2 link-color">Atama Study Center</Link>
                  </li>
                  <li>
                    <Link to="https://shafiadmin.helloregister.in/login"  className="d-block mb-2 link-color">Admin</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="second">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <a href><i className="fa fa-map-marker-alt me-2" /> SHAFI acu & ayurvedic, 470, W First Cross St, Mellur, KK Nagar, Madurai, Tamil Nadu 625020</a>
                </li>
                <li>
                  <a href><i className="fas fa-envelope me-2" /> Shafichannel123@gmail.com</a>
                </li>
                <li>
                  <a href><i className="fas fa-phone me-2 fa-flip-horizontal" /> +91 9843542042</a>
                </li>
                <li>
               
                
                  <a href><i className="fas fa-phone me-2 fa-flip-horizontal" /> +91 9843276306</a>

                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <div className='youtube'>
              <a href="https://youtube.com/shorts/QnLPtqOEBwI?si=0QS5QBD1jGgLVvQc" target="_blank"><i className="fab fa-youtube fa-2x margin" /></a>
            </div> */}
            <div className="line"></div>
            <div className="second2">
        
              <Link to="https:hellowtec.com/">
              <a href="#"><i class="fas fa-copyright text-light me-2"></i>2024 by</a> <span style={{color:''}}>Hello Technologies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
