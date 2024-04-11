import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./about.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsApp from "../../whatsapp/WhatsApp";
import FloatingMailIcon from "../../email floating icon/Floating";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "assets/img/mampics/award4.jpg";
    img.onload=() => {
      setLoaded(true);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 3000,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white justify-content-center display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h3>
          {/* <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Pages</a></li>
        <li className="breadcrumb-item active text-primary">About</li>
      </ol>     */}
        </div>
      </div>
      {/* Header End */}
      {/* About Start */}
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-img pb-5 ps-5">
                {loaded ? (
                  <img
                    src="assets/img/mampics/award4.jpg"
                    className="img-fluid rounded w-100"
                    style={{ objectFit: "cover" }}
                    alt="Image"
                  />
                ) : (
                  <img
                    src="assets/img/mampics/aw4.jpg"
                    className="img-fluid rounded w-100 blurImage"
                    style={{ objectFit: "cover" }}
                    alt="Image"
                  />
                )}
                <div className="about-img-inner">
                  {/* <img src="assets/img/mampics/award3.jpg" className="img-fluid rounded-circle w-50 h-50" alt="Image" /> */}
                </div>
                <div
                  className="about-experience ab "
                  style={{ padding: "10px" }}
                >
                  20 years experience
                </div>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
              <div className="section-title text-start mb-5">
                <center>
                  {" "}
                  <h4 className="sub-title pe-3 mb-0">About Us</h4>
                </center>

                <h1 className="display-3 mb-4 ">
                  Meet Mrs. S. Kathija Nachiar: A Pioneer in Acupuncture and
                  Herbal Therapies
                </h1>
                <p className="mb-4">
                  <b>
                    Mrs. S. Kathija Nachiar Ph.D (Obesity), MD (Acu), M.Sc.
                    (Psy)
                  </b>{" "}
                  I am having 20 years of experience in teaching acupuncture
                  courses and also doing research and clinical work related to
                  acupuncture. Currently I am providing acupuncture treatment on
                  herbal therapies and other adjunctive therapies for
                  anti-aging, digestive disorders, orthopedic problems, spine
                  alignment, genitourinary issues, infertility in both men and
                  women, skin problems, obesity, facial problems, hair problems
                  and also in pain management. Treated the patients in different
                  acupuncture styles like body acupuncture, scalp acupuncture,
                  auiriculo and cosmetic acupuncture. Different types of
                  therapies are utilized like herbal, hijama, cupping,
                  reflexology, electro acupuncture, mosibustion, qi-gong.
                </p>
                <div className="mb-4">
                  <p className="text-secondary">
                    <i className="fa fa-check text-primary me-2" /> Ph.D
                    (Obesity), MD (Acu), M.Sc. (Psy)
                  </p>
                  <p className="text-secondary">
                    <i className="fa fa-check text-primary me-2" />
                    Over 20 years of experience in teaching acupuncture courses.
                  </p>
                  <p className="text-secondary">
                    <i className="fa fa-check text-primary me-2" /> Extensive
                    research and clinical work related to acupuncture.
                  </p>
                </div>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Team Start */}

      <div>
        <section className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mission">
                <h2 className="section-title">Our Mission</h2>
                <p>
                  By 2030, our mission is to create a world where{" "}
                  <b>"Marunthu Illa Ulagam" </b>(a world without illness)
                  becomes a reality through the widespread dissemination and
                  practice of acupuncture and herbal therapies. We are committed
                  to leveraging our expertise and experience to empower
                  individuals with the knowledge and tools they need to achieve
                  optimal health and well-being naturally.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-img">
                <img
                  src="assets/img/mampics/award9.jpg"
                  alt="Vision Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="vision-img">
                <img
                  src="assets/img/mampics/award9.jpg"
                  alt="Vision Image"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mission">
                <h2 className="section-title">Our Vission</h2>
                <p>
                  Our vision is to be at the forefront of revolutionizing
                  healthcare by 2030, pioneering a paradigm shift towards
                  holistic and integrative healing practices. We envision a
                  future where acupuncture and herbal therapies are widely
                  recognized and embraced as primary modalities of treatment,
                  leading to a healthier and happier society. Through education,
                  research, and compassionate care, we aspire to create a world
                  where every individual can experience the profound benefits of
                  traditional healing methods, ultimately contributing to the
                  realization of "Marunthu Illa Ulagam" for all.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div></div>

      <section class="container-fluid youtube-videos py-5">
        <div class="container py-5">
          <div class="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h2 class="display-3 mb-4">Shafi Youtube Videos</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p> */}
          </div>

          <div class="row justify-content-center ">
            <div class="col-md-6 col-lg-4 mb-4">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/IcHwoD8Fs1w?si=wb0ANzKqEdK7tEg2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/EfF4Eyzn8fE?si=QWcut9gcOnQ54afs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/0hIyYPRD1w0?si=6ZV7pzNFXhQlXO36"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* Your existing code for the About page */}

        {/* Photo Gallery Section */}
        <section className="container-fluid team py-5">
          <div className="container py-5">
            <div
              className="section-title mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="sub-style">
                <h4 className="sub-title px-3 mb-0">Photo Gallery</h4>
              </div>
              <h1 className="display-3 mb-4">
                Explore Shafi Ayurvedic & Acupuncture Hospital's Awards Gallery
              </h1>
            </div>
            <Slider {...settings}>
              {/* award img 1 */}
              <div className="team-item rounded">
                <div
                  className="team-img rounded-top h-100"
                  style={{ marginRight: "15px" }}
                >
                  <img
                    src="assets/img/mampics/award3.jpg"
                    className="img-fluid rounded-top w-100 h-auto"
                    alt="Team Member 1"
                  />
                </div>
              </div>
              {/* award img 3 */}
              <div className="team-item rounded">
                <div
                  className="team-img rounded-top h-100"
                  style={{ marginRight: "15px" }}
                >
                  <img
                    src="assets/img/mampics/rsz_award1.jpg"
                    className="img-fluid rounded-top w-100 h-auto"
                    alt="Team Member 3"
                  />
                </div>
              </div>
              {/*award img 2 */}
              <div className="team-item rounded">
                <div
                  className="team-img rounded-top h-100"
                  style={{ marginRight: "15px" }}
                >
                  <img
                    src="assets/img/mampics/award4.jpg"
                    className="img-fluid rounded-top w-100 h-auto"
                    alt="Team Member 2"
                  />
                </div>
              </div>
              {/* Additional Team Members Go Here */}
            </Slider>
          </div>
        </section>
      </div>

      {/* Feature Start */}

      {/* Feature End */}
      {/* Footer Start */}

      {/* Footer End */}
      {/* Copyright Start */}

      {/* Copyright End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up" />
      </a>
      <WhatsApp
        phoneNumber="9843542042"
        message="Hello! I'm interested in your services."
      />
      <FloatingMailIcon emailAddress="Shafichannel123@gmail.com" />
    </div>
  );
}
