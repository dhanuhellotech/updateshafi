import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../../clientaxios/Client';
import axios from 'axios';

export default function Topbar() {
  const [tobbarData, setTobbarData] = useState(null);

  useEffect(() => {
    const fetchTobbarData = async () => {
      try {
        const response = await client.get('/tobbar');
        setTobbarData(response.data);
      } catch (error) {
        console.error('Error fetching tobbar data:', error);
      }
    };

    fetchTobbarData();
  }, []);

  return (
    <div>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center" style={{ height: 45 }}>
          <div className="col-lg-8 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              {tobbarData &&
                tobbarData.map(entry => (
                  <React.Fragment key={entry._id}>
                    <Link to= 'https://maps.app.goo.gl/JDevvVBy4pSnRnz79' className="text-light me-4">
                      <i className="fas fa-map-marker-alt text-primarynew me-2" /> {entry.location}
                    </Link>
                    <Link to={`tel:${entry.number}`} className="text-light me-4">
                      <i className="fas fa-phone-alt text-primarynew me-2" />+91-{entry.number}
                    </Link>
                    <Link to={`mailto:${entry.mailid}`} className="text-light me-0">
                      <i className="fas fa-envelope text-primarynew me-2" /> {entry.mailid}
                    </Link>
                  </React.Fragment>
                ))}
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              <Link to="https://youtube.com/shorts/QnLPtqOEBwI?si=0QS5QBD1jGgLVvQc" className="btn btn-light btn-square border rounded-circle nav-fill me-3">
                <i className="fab fa-youtube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
