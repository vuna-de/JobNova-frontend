import React, { useState, useEffect } from "react";

const NotificationSettings = () => {
  // Load state from local storage or set default values
  const [mentionNotification, setMentionNotification] = useState(
    () => JSON.parse(localStorage.getItem("mentionNotification")) || false
  );
  const [followNotification, setFollowNotification] = useState(
    () => JSON.parse(localStorage.getItem("followNotification")) || false
  );
  const [shareNotification, setShareNotification] = useState(
    () => JSON.parse(localStorage.getItem("shareNotification")) || false
  );
  const [messageNotification, setMessageNotification] = useState(
    () => JSON.parse(localStorage.getItem("messageNotification")) || false
  );
  // Add more state variables for other checkboxes
  const [saleNotification, setSaleNotification] = useState(
    () => JSON.parse(localStorage.getItem("saleNotification")) || false
  );
  const [companyNewsNotification, setCompanyNewsNotification] = useState(
    () => JSON.parse(localStorage.getItem("companyNewsNotification")) || false
  );
  const [weeklyJobsNotification, setWeeklyJobsNotification] = useState(
    () => JSON.parse(localStorage.getItem("weeklyJobsNotification")) || false
  );
  const [unsubscribeNewsNotification, setUnsubscribeNewsNotification] =
    useState(
      () =>
        JSON.parse(localStorage.getItem("unsubscribeNewsNotification")) || false
    );
  // Add more state variables for other checkboxes

  // Update local storage whenever state changes
  useEffect(() => {
    localStorage.setItem(
      "mentionNotification",
      JSON.stringify(mentionNotification)
    );
  }, [mentionNotification]);

  useEffect(() => {
    localStorage.setItem(
      "followNotification",
      JSON.stringify(followNotification)
    );
  }, [followNotification]);

  useEffect(() => {
    localStorage.setItem(
      "shareNotification",
      JSON.stringify(shareNotification)
    );
  }, [shareNotification]);

  useEffect(() => {
    localStorage.setItem(
      "messageNotification",
      JSON.stringify(messageNotification)
    );
  }, [messageNotification]);

  // Add similar useEffect blocks for other checkboxes
  useEffect(() => {
    localStorage.setItem("saleNotification", JSON.stringify(saleNotification));
  }, [saleNotification]);

  useEffect(() => {
    localStorage.setItem(
      "companyNewsNotification",
      JSON.stringify(companyNewsNotification)
    );
  }, [companyNewsNotification]);

  useEffect(() => {
    localStorage.setItem(
      "weeklyJobsNotification",
      JSON.stringify(weeklyJobsNotification)
    );
  }, [weeklyJobsNotification]);

  useEffect(() => {
    localStorage.setItem(
      "unsubscribeNewsNotification",
      JSON.stringify(unsubscribeNewsNotification)
    );
  }, [unsubscribeNewsNotification]);

  // Add more useEffect blocks for other checkboxes

  // Function to handle checkbox change
  const handleCheckboxChange = (e, setState) => {
    setState(e.target.checked);
  };
  return (
    <div className="row">
      <div className="col-md-6 mt-4 pt-2">
        <h5>Account Notifications :</h5>

        <div className="d-flex justify-content-between mt-4">
          <h6 className="mb-0">When someone mentions me</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={mentionNotification}
              onChange={(e) => handleCheckboxChange(e, setMentionNotification)}
            />
            <label className="form-check-label"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <h6 className="mb-0">When someone shares my activity</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={shareNotification}
              onChange={(e) => handleCheckboxChange(e, setShareNotification)}
            />
            <label className="form-check-label"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <h6 className="mb-0">When someone messages me</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={messageNotification}
              onChange={(e) => handleCheckboxChange(e, setMessageNotification)}
            />
            <label className="form-check-label"></label>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h5>Marketing Notifications :</h5>

        <div className="d-flex justify-content-between mt-4">
          <h6 className="mb-0">When someone follows me</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={followNotification}
              onChange={(e) => handleCheckboxChange(e, setFollowNotification)}
            />
            <label className="form-check-label"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <h6 className="mb-0">There is a sale or promotion</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={saleNotification}
              onChange={(e) => handleCheckboxChange(e, setSaleNotification)}
            />
            <label className="form-check-label"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <h6 className="mb-0">Company news</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={companyNewsNotification}
              onChange={(e) =>
                handleCheckboxChange(e, setCompanyNewsNotification)
              }
            />
            <label className="form-check-label"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <h6 className="mb-0">Weekly jobs</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={weeklyJobsNotification}
              onChange={(e) =>
                handleCheckboxChange(e, setWeeklyJobsNotification)
              }
            />
            <label className="form-check-label"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <h6 className="mb-0">Unsubscribe News</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={unsubscribeNewsNotification}
              onChange={(e) =>
                handleCheckboxChange(e, setUnsubscribeNewsNotification)
              }
            />
            <label className="form-check-label"></label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationSettings;
