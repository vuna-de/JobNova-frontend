import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/hero/bg5.jpg";
import company1 from "../assets/images/company/linkedin.png";
import company2 from "../assets/images/company/lenovo-logo.png";
import NavbarDark from "../componants/navbarDark";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";
import { candidateSkill, candidatesData } from "../data/data";
import {
  FiSettings,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiPhone,
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiDownload,
  FiMessageCircle,
  FiFileText,
} from "../assets/icons/vander";
import { useMutation } from "@tanstack/react-query";
import useUserInfo from "../hook/useUserInfo";

import 'react-toastify/dist/ReactToastify.css';

import api from "../api/http";
import Loading from "../componants/loading";
import { ContactUs } from "../componants/contact";
export default function CandidateProfile() {

  const token = localStorage.getItem("token");
  const { data: userData } = useUserInfo();
  const user = userData?.data;

  const uploadAvatar = useMutation({
    mutationFn: (formData) => {
      return api.patch("/update-avatar", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
    },
  });


  return (
    <>
      <NavbarDark />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <div className="candidate-cover">
                  <img src={bg1} className="img-fluid rounded shadow" alt="" />
                </div>
                <div className="candidate-profile d-flex align-items-end justify-content-between mx-2">
                  {uploadAvatar.isPending ? (
                    <Loading />
                  ) : (
                    <div className="d-flex align-items-end">
                      <img
                        src={user?.avatar_url}
                        className="rounded-pill shadow border border-3 avatar avatar-medium"
                        alt=""
                      />

                      <div className="ms-2">
                        <h5 className="mb-0">
                          {user?.gender === 0 ? "Mr. " : "Mrs. "}{" "}
                          {user?.firstName == null && user?.last_name == null
                            ? user?.user_name
                            : user?.first_name + " " + user?.last_name}
                        </h5>
                        <p className="text-muted mb-0">{user?.occupation}</p>
                      </div>
                    </div>
                  )}
                  <Link
                    to="/candidate-profile-setting"
                    className="btn btn-sm btn-icon btn-pills btn-soft-primary"
                  >
                    <FiSettings className="icons" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row g-4">
            <div className="col-lg-8 col-md-7 col-12">
              <h5 className="mb-4">Introduction:</h5>

              <p className="text-muted">{user?.intro}</p>

              <h5 className="mt-4">Skills:</h5>

              <div className="row">
                <div className="col-lg-6 col-12">
                  {candidateSkill.slice(0, 3).map((item, index) => {
                    return (
                      <div className="progress-box mt-4" key={index}>
                        <h6 className="font-weight-normal">{item.title}</h6>
                        <div className="progress">
                          <div
                            className="progress-bar position-relative bg-primary"
                            style={{ width: item.value }}
                          >
                            <div className="progress-value d-block text-dark h6">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="col-lg-6 col-12">
                  {candidateSkill.slice(3, 6).map((item, index) => {
                    return (
                      <div className="progress-box mt-4" key={index}>
                        <h6 className="font-weight-normal">{item.title}</h6>
                        <div className="progress">
                          <div
                            className="progress-bar position-relative bg-primary"
                            style={{ width: item.value }}
                          >
                            <div className="progress-value d-block text-dark h6">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <h5 className="mt-4">Experience:</h5>

              <div className="row">
                <div className="col-12 mt-4">
                  <div className="d-flex">
                    <div className="text-center">
                      <img
                        src={company1}
                        className="avatar avatar-small bg-white shadow p-2 rounded"
                        alt=""
                      />
                      <h6 className="text-muted mt-2 mb-0">2019-22</h6>
                    </div>

                    <div className="ms-3">
                      <h6 className="mb-0">Full Stack Developer</h6>
                      <p className="text-muted">Linkedin - U.S.A.</p>
                      <p className="text-muted mb-0">
                        It seems that only fragments of the original text remain
                        in the Lorem Ipsum texts used today. One may speculate
                        that over the course of time certain letters were added
                        or deleted at various positions within the text.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <div className="d-flex">
                    <div className="text-center">
                      <img
                        src={company2}
                        className="avatar avatar-small bg-white shadow p-2 rounded"
                        alt=""
                      />
                      <h6 className="text-muted mt-2 mb-0">2017-19</h6>
                    </div>

                    <div className="ms-3">
                      <h6 className="mb-0">Back-end Developer</h6>
                      <p className="text-muted">Lenovo - China</p>
                      <p className="text-muted mb-0">
                        It seems that only fragments of the original text remain
                        in the Lorem Ipsum texts used today. One may speculate
                        that over the course of time certain letters were added
                        or deleted at various positions within the text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded shadow mt-4">
                <h5>Get in touch !</h5>
                {/* <form className="mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Name :"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Subject
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="Subject :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Comments <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form> */}
                <ContactUs />
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-12">
              <div className="card bg-light p-4 rounded shadow sticky-bar">
                <h5 className="mb-0">Personal Detail:</h5>
                <div className="mt-3">
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="d-inline-flex align-items-center text-muted fw-medium">
                      <FiMail className="fea icon-sm me-2" /> Email:
                    </span>
                    <span className="fw-medium">
                      {user && user.user_name === "Johny Sins"
                        ? "johnysins@gmail.com"
                        : user?.email}
                    </span>
                  </div>

                  {/* <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="d-inline-flex align-items-center text-muted fw-medium">
                      <FiGift className="fea icon-sm me-2" /> D.O.B.:
                    </span>
                    <span className="fw-medium">31st Dec, 1996</span>
                  </div> */}

                  {/* <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="d-inline-flex align-items-center text-muted fw-medium">
                      <FiHome className="fea icon-sm me-2" /> Address:
                    </span>
                    <span className="fw-medium">15 Razy street</span>
                  </div> */}

                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="d-inline-flex align-items-center text-muted fw-medium">
                      <FiMapPin className="fea icon-sm me-2" /> Province:
                    </span>
                    <span className="fw-medium">{user?.state}</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="d-inline-flex align-items-center text-muted fw-medium">
                      <FiGlobe className="fea icon-sm me-2" /> Country:
                    </span>
                    <span className="fw-medium">VN</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="d-inline-flex align-items-center text-muted fw-medium">
                      <FiPhone className="fea icon-sm me-2" /> Mobile:
                    </span>
                    <span className="fw-medium">{user?.phone}</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="text-muted fw-medium">Social:</span>

                    <ul className="list-unstyled social-icon text-sm-end mb-0">
                      <li className="list-inline-item">
                        <Link
                          to="https://dribbble.com/shreethemes"
                          target="_blank"
                          className="rounded"
                        >
                          <FiDribbble className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="http://linkedin.com/company/shreethemes"
                          target="_blank"
                          className="rounded"
                        >
                          <FiLinkedin className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="https://www.facebook.com/shreethemes"
                          target="_blank"
                          className="rounded"
                        >
                          <FiFacebook className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="https://www.instagram.com/shreethemes/"
                          target="_blank"
                          className="rounded"
                        >
                          <FiInstagram className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="https://twitter.com/shreethemes"
                          target="_blank"
                          className="rounded"
                        >
                          <FiTwitter className="fea icon-sm align-middle" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 rounded shadow bg-white mt-2">
                    <div className="d-flex align-items-center mb-2">
                      <FiFileText className="fea icon-md" />
                      <h6 className="mb-0 ms-2">user?.resume_url</h6>
                    </div>

                    <Link
                      to={user?.resume_url}
                      download="pdf"
                      target="_blank"
                      className="btn btn-primary w-100"
                    >
                      <FiDownload className="fea icon-sm me-1" /> Download CV
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center mb-4 pb-2">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title mb-3">Related Candidates</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {candidatesData.slice(0, 4).map((item, index) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4 pt-2"
                  key={index}
                >
                  <div className="candidate-card position-relative overflow-hidden text-center shadow rounded p-4">
                    <div className="content">
                      <img
                        src={item.image}
                        className="avatar avatar-md-md rounded-pill shadow-md"
                        alt=""
                      />

                      <div className="mt-3">
                        <Link
                          to={`/candidate-profile/${item.id}`}
                          className="title h5 text-dark"
                        >
                          {item.name}
                        </Link>
                        <p className="text-muted mt-1">{item.post}</p>

                        <span className="badge bg-soft-primary rounded-pill">
                          Design
                        </span>
                        <span className="badge bg-soft-primary rounded-pill">
                          UI
                        </span>
                        <span className="badge bg-soft-primary rounded-pill">
                          UX
                        </span>
                        <span className="badge bg-soft-primary rounded-pill">
                          Digital
                        </span>
                      </div>

                      <div className="mt-2 d-flex align-items-center justify-content-between">
                        <div className="text-center">
                          <p className="text-muted fw-medium mb-0">Salary:</p>
                          <p className="mb-0 fw-medium">{item.salary}</p>
                        </div>

                        <div className="text-center">
                          <p className="text-muted fw-medium mb-0">
                            Experience:
                          </p>
                          <p className="mb-0 fw-medium">{item.experience}</p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <Link
                          to="/candidate-profile"
                          className="btn btn-sm btn-primary me-1"
                        >
                          View Profile
                        </Link>
                        <Link
                          to="/contactus"
                          className="btn btn-sm btn-icon btn-soft-primary"
                        >
                          <FiMessageCircle className="icons" />
                        </Link>
                      </div>

                      <Link to="#" className="like">
                        <i className="mdi mdi-heart align-middle fs-4"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer top={true} />
      <ScrollTop />
    </>
  );
}
