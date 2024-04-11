import React from 'react'
import { useScript } from '../../customhooks/Script'
import Service from '../../common/Home/Service'
import Navbar from '../../common/navbar/Navbar'

import Topbar from '../../common/topbar/Topbar'
import HomeAbout from '../../common/Home/about/HomeAbout'
import Feature from '../../common/Home/feature/Feature'
import BookApp from '../../common/Home/bookappointment/BookApp'
import ModalVideo from '../../common/Home/Video/ModalVideo'
import Team from '../../common/Home/Team/Team'
import Testimonial from '../../common/Home/testimonial/Testimonial'
import Blog from '../../common/Home/Blog/Blog'
import Footer from '../../common/footer/Footer'
import Carosuel from '../../common/caro/Carosuel'
import WhatsApp from '../../whatsapp/WhatsApp'
import FloatingMailIcon from '../../email floating icon/Floating'
import Testimonialnew from '../../common/Home/testimonial/Newtestimonial'
export default function Home() {
  const div1={width:"100%",overflow:"hidden"}

    useScript('assets/lib/wow/wow.min.js')
    useScript('assets/lib/easing/easing.min.js')
    useScript('assets/lib/waypoints/waypoints.min.js')
    useScript('assets/lib/owlcarousel/owl.carousel.min.js')
    useScript('assets/js/main.js')
  return (
  <div>
  {/* Spinner Start */}


  {/* Navbar & Hero Start */}

  {/* Navbar & Hero End */}
  {/* Services Start */}
<Carosuel/>
<div style={div1}>
<Feature/>
</div>
<BookApp />
<Service/>

  <div style={div1}>
  <Testimonial/>
  </div>
  <div style={div1}><Team/></div>

  {/* Team End */}
  {/* Testimonial Start */}

  {/* Testimonial End */}
  {/* Blog Start */}
  
<Blog/>
<div style={div1}>
<Testimonialnew/>

</div>
  {/* Blog End */}
  {/* Footer Start */}

  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a>  
  <WhatsApp phoneNumber="9843542042" message="Hello! I'm interested in your services."/>
  <FloatingMailIcon emailAddress="Shafichannel123@gmail.com"/>
</div>

  )
}
