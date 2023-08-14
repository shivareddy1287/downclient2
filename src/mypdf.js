import React, { useState, useEffect } from "react";
import axios from "axios";
import "./mypdf.css";

function Mypdf() {
  const [databack, setDataBack] = useState("");
  const [imageURL, setImageURL] = useState("");

  const fetchDataFrom = async () => {
    try {
      const response = await axios.get(
        "https://dummydowanload1.azurewebsites.net/dummy"
      );
      setDataBack(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          "https://dummydowanload1.azurewebsites.net/get-image",
          {
            responseType: "blob",
          }
        );

        const blobURL = URL.createObjectURL(response.data);
        setImageURL(blobURL);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
    fetchDataFrom();
  }, []);

  console.log(databack);

  return (
    <div>
      <div class="padding-all-cont">
        <div class="new-cont-img-name">
          <div class="img-cont">
            {imageURL && (
              <img src={imageURL} class="img-profile" alt="Uploaded" />
            )}
          </div>
          <div>
            {databack && databack.name && (
              <h1 class="name-head">{databack.name}</h1>
            )}

            <p class="market-para">Marketing Manager</p>
            <p class="summary-para">{databack.aboutHeadline}</p>
          </div>
        </div>

        <div class="main-cont">
          <div class="img-contact-other-cont">
            <div>
              <h1 class="left-side-head">Contact</h1>
              <hr class="hr-line-left" />
              <div class="padding-right-cont">
                <div class="icons-email-cont">
                  <svg
                    class="email-icon-top"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <p class="left-side-conta-para1 email-marign-0">Email</p>
                </div>
                {databack && databack.email && (
                  <h1 class="left-side-conta-para">{databack.email}</h1>
                )}

                <div class="icons-email-cont">
                  <svg
                    class="email-icon-top"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  {databack && databack.phone && (
                    <p class="left-side-conta-para1 email-marign-0">
                      {databack.phone}
                    </p>
                  )}
                </div>

                <div class="icons-email-cont">
                  <svg
                    class="email-icon-top"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>

                  <p class="left-side-conta-para1 email-marign-0">
                    {databack.linkedin}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 class="left-side-head u-marign-top-small">Education</h1>
              <hr class="hr-line-left" />
              <div class="padding-right-cont">
                <div>
                  {databack.educationTotal &&
                    databack.educationTotal.map((each) => (
                      <div>
                        <p class="left-side-edu-para1">{each.fromSchoolVal}</p>
                        <p class="left-side-edu-para2">{each.degreeVal}</p>
                        <p class="left-side-edu-para3">{each.schoolVal}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div>
              <h1 class="left-side-head u-marign-top-small">Skills</h1>
              <hr class="hr-line-left" />
              <ul class="left-side-ul-para padding-right-cont">
                {databack.totalSkills &&
                  databack.totalSkills.map((each) => (
                    <div>
                      <li class="left-side-edu-para1">{each.skill}</li>
                    </div>
                  ))}
              </ul>
            </div>
          </div>
          <div class="name-exp-cont">
            <div>
              <h1 class="experience-head">Experience</h1>
              <hr class="exp-bottom-hr-line" />
              <div>
                <div class="list-item">
                  <div>
                    {databack.workExpTotal &&
                      databack.workExpTotal.map((each) => (
                        <div>
                          <p class="work-p2">{each.actualFromDateValue}</p>
                          <h2 class="job-position-head">{each.positionVal}</h2>

                          {each.workVal.map((eachVal) => (
                            <div>
                              <li class="work-p3">{eachVal.skillsListVal}</li>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypdf;
