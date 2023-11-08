import React, { useEffect, useState } from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import Alldata from "./Alldata";
function Profile() {

    const [profile, setProfile] = useState([]);

    const params = useParams();
    const id = params.id;
    useEffect(() => {
        fetch("https://dummyjson.com/users")
          .then((response) => response.json())
          .then((data) => setProfile(data.users))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

      let filteredData = profile;

        if(id)
        {
          filteredData = profile.filter(item => item.id === parseInt(id));
        }
        console.log(filteredData);
  return (
    <>
    <Alldata/>
      {filteredData.map((filteredData,index) =>
      {
        return (
        <section className="vh-100" key={index} style={{ backgroundcolor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3 border border-0">
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white p-4"
                    // style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;"
                    style={{borderTopLeftRadius:'5rem'}}
                  >
                    <img
                      src={filteredData.image}
                      alt="Avatar"
                      className="img-fluid my-5"
                      // style={{width:' 80px'}}
                      style={{
                        borderRadius: "30rem",
                        background: "white",
                      }}
                    />
                    <h4>{filteredData.firstName} {filteredData.lastName}</h4>
                    <hr  />
                    <h5>{filteredData.company.department}</h5>
                  </div>
                  <div className="col-md-8 gradient-custom text-white "style={{borderBottomRightRadius:"10rem"}}>
                    <div className="card-body p-4 " >
                    <h3   >Personal Information</h3>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6 className='fs-5'> Email</h6>
                          <p className="text-white">{filteredData.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className='fs-5'> Phone</h6>
                          <p className="text-warning fw-bold">{filteredData.phone}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6 className='fs-5'> University</h6>
                          <p className="text-white">{filteredData.university}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className='fs-5'> Address</h6>
                          <p className="text-white">{filteredData.address.address},{filteredData.address.city}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6 className='fs-5'> Age</h6>
                          <p className="text-white">{filteredData.age}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6 className='fs-5'> Gender</h6>
                          <p className="text-white">{filteredData.gender}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6 className='fs-5'> Height</h6>
                          <p className="text-white">{filteredData.height}</p>
                        </div>
                        <div className="col-6 mb-3">
                        <h6 className='fs-5'> Weight</h6>
                          <p className="text-white">{filteredData.weight}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6 className='fs-5'> Birth Date</h6>
                          <p className="text-white">{filteredData.birthDate}</p>
                        </div>
                        <div className="col-6 mb-3">
                        <h6 className='fs-5'> Blood Group</h6>
                          <p className="text-white">{filteredData.bloodGroup}</p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)})}
   </> 
  );
}

export default Profile;
