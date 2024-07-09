import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg1 from '../assets/images/hero/bg.jpg';
import Navbar from "../componants/navbar";
import AboutTwo from "../componants/aboutTwo";
import FormSelect from "../componants/formSelect";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";
import { FiClock, FiMapPin, FiBookmark } from "../assets/icons/vander";
import { jobData } from "../data/data";

export default function JobListOne() {
    const [filteredJobs, setFilteredJobs] = useState(jobData);

    const handleSearch = ({ keyword, location, type }) => {
        const filtered = jobData.filter(job => {
            const matchesKeyword = job.title.toLowerCase().includes(keyword.toLowerCase());
            const matchesLocation = location ? job.country === location : true;
            const matchesType = type ? job.jobTime === type : true;

            return matchesKeyword && matchesLocation && matchesType;
        });

        setFilteredJobs(filtered);
    };

    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={true} />

            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: 'top' }}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Job Vacancies</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 mt-4">
                            <div className="features-absolute">
                                <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-4">
                                    <FormSelect onSearch={handleSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-60">
                    <div className="row g-4">
                        {filteredJobs.map((item, index) => (
                            <div className="col-12" key={index}>
                                <div className="job-post job-post-list rounded shadow p-4 d-md-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex align-items-center w-310px">
                                        <img src={item.image} className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />
                                        <div className="ms-3">
                                            <Link to={`/job-detail-one/${item.id}`} className="h5 title text-dark">{item.title}</Link>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between d-md-block mt-3 mt-md-0 w-100px">
                                        <span className="badge bg-soft-primary rounded-pill">{item.jobTime}</span>
                                        <span className="text-muted d-flex align-items-center fw-medium mt-md-2"><FiClock className="fea icon-sm me-1 align-middle" />{item.posted} days ago</span>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between d-md-block mt-2 mt-md-0 w-130px">
                                        <span className="text-muted d-flex align-items-center"><FiMapPin className="fea icon-sm me-1 align-middle" />{item.country}</span>
                                        <span className="d-flex fw-medium mt-md-2">$950 - $1100/mo</span>
                                    </div>

                                    <div className="mt-3 mt-md-0">
                                        <Link to="" className="btn btn-sm btn-icon btn-pills btn-soft-primary bookmark"><FiBookmark className="icons" /></Link>
                                        <Link to={`/job-detail-three/${item.id}`} className="btn btn-sm btn-primary w-full ms-md-1">Apply Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-12 mt-4 pt-2">
                            <ul className="pagination justify-content-center mb-0">
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Previous">
                                        <span aria-hidden="true"><i className="mdi mdi-chevron-left fs-6"></i></span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Next">
                                        <span aria-hidden="true"><i className="mdi mdi-chevron-right fs-6"></i></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <AboutTwo />
            </section>
            <Footer top={true} />
            <ScrollTop />
        </>
    );
}