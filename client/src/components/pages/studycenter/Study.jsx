import React from 'react';
import BookApp from '../../common/studycenter/bookappointment/BookApp';
import CourseList from '../../common/studycenter/coursecard/CourseList';
import Tabs from '../../common/studycenter/cards/Coursecards';
import WhatsApp from '../../whatsapp/WhatsApp';
import FloatingMailIcon from '../../email floating icon/Floating';

export default function Study() {
  return (
    <div>
      <div className="container-fluid bg-breadcrumbtwo">
        <div className="container text-center py-5" style={{maxWidth: 900}}>
          <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Atama Study Center </h3>
        </div>
      </div>
      {/* <CourseList/> */}
      <Tabs/>
      <BookApp/>
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a>   
      <WhatsApp phoneNumber="9843542042" message="Hello! I'm interested in your services."/>
      <FloatingMailIcon emailAddress="Shafichannel123@gmail.com" /> 
    </div>
  );
}
