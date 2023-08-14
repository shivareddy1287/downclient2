import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";

import "./App.css";

const skillsTotalList = [
  { skill: "React Js" },
  { skill: "Node js" },
  { skill: "SQL" },
  { skill: "Python" },
  { skill: "MongoDB" },
  { skill: "HTML" },
  { skill: "CSS" },
];

const intialAdd = [
  {
    workVal: [
      {
        skillsListVal:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      },
      {
        skillsListVal:
          "the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        skillsListVal:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        skillsListVal:
          "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more",
      },
      {
        skillsListVal:
          "recently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum.",
      },
    ],
    positionVal: "Super Tech Technology",
    employerVal: "Full Stack Developer",
    scrollDum2Height: "100px",
    fromDateValue: "2020",
    toDateValue: "2021",
    actualFromDateValue: "2022",
    actualToDateValue: "2023",
  },
  {
    workVal: [
      {
        skillsListVal:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
      },
      {
        skillsListVal:
          "the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        skillsListVal:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        skillsListVal:
          "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more",
      },
      {
        skillsListVal:
          "recently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum.",
      },
    ],
    positionVal: "Radiant Spark Technology",
    employerVal: "Full Stack Developer",
    scrollDum2Height: "100px",
    fromDateValue: "2020",
    toDateValue: "2021",
    actualFromDateValue: "2022",
    actualToDateValue: "2023",
  },
];

const intialAddCertifications = [
  {
    certificationName: "Advanced React js",
    issuedOrg: "Nxt Wave",
    fromIssuedOrg: "2021",
    toIssuedOrg: "2022",
    certificationLink: "https://certificates.ccbp.in/intensive",
  },
  {
    certificationName: "Programming Foundations with Python",
    issuedOrg: "Nxt Wave",
    fromIssuedOrg: "2022",
    toIssuedOrg: "2023",
    certificationLink: "https://certificates.ccbp.in/intensive",
  },
];

const intialAddpublications = [
  {
    publicationName: "Nature Communications",
    publicationLink: "https://www.example.com/publication1",
    publicationsFrom: "2019",
    Publicationsto: "2020",
    publicationDescription:
      "Proceedings of the IEEE International Conference on Robotics and Automation (ICRA),and The New EnglandJournal of  respective papers were published.",
  },
  {
    publicationName: "Electrical Generator",
    publicationLink: "https://www.example.com/publication1",
    publicationsFrom: "2022",
    Publicationsto: "2022",
    publicationDescription:
      "Proceedings of the IEEE International Conference on Robotics and Automation (ICRA),and The New EnglandJournal of  respective papers were published.",
  },
];

const intialAddEducation = [
  {
    degreeVal: "SSC",
    schoolVal: "Telangana State Residential",
    fromSchoolVal: "2015",
    toSchoolVal: "2016",
    eduPerc: "90%",
  },
  {
    degreeVal: "Diploma",
    schoolVal: "Jawaharlal Nehru Govt Polytechnic",
    fromSchoolVal: "2016",
    toSchoolVal: "2019",
    eduPerc: "90%",
  },
  {
    degreeVal: "Btech",
    schoolVal: "Nalla Narasimha Reddy Group Of Instituitions",
    fromSchoolVal: "2019",
    toSchoolVal: "2022",
    eduPerc: "91%",
  },
];

const intialHonorAwards = [
  {
    awardName: "Award name1 Sathy",
    Organization: "Company name",
  },
  {
    awardName: "Best Employ",
    Organization: "Organisation Company",
  },
  {
    awardName: "Name award",
    Organization: "Sathy Resource Sathy",
  },
];

const inlanguageTotal = [
  {
    langId: "36431e80-7c57-4cf1-82f7-897440255a42",
    language: "English",
    proficiency: "Full Proficient",
  },
  {
    langId: "51311ae9-a1ad-4dea-a94b-8976f00a12e8",
    language: "Tamil",
    proficiency: "Bigginer",
  },
  {
    langId: "2fa1d70d-e48f-4f20-8670-aeb0e243f6b6",
    language: "Hindi",
    proficiency: "Intermidiate",
  },
];

const inprojectTotal = [
  {
    uniqueId: "cd24041a-19cb-4730-b676-e5d1cf80c1ff",
    collegeProjName: "IOS Meme App",
    createDetails:
      "Developed an iOS application using Swift and Objective-C that allows users to easily create and share memes. Integrated openCV libraryallowing users to effortlessly apply photo filters and effects.",
    addedDetails:
      "Incorporated persistent data storage to archive memes. Leveraged caching for recently accessed memes. Designed RESTful backend serverenabling memes to be stored persistently in an online database. Utilized: Swift, Obj-C, Local Persistent Data, Caching, Cloud Storage, Python,Flask, SQLite, openCV",
  },
  {
    uniqueId: "cda3cab4-78cf-4d56-8c26-d264373c99ff",
    collegeProjName: "Developed an iOS application",
    createDetails: "2022",
    addedDetails: "Developed an iOS application",
  },
];

const data1 = {
  name: "Shiva Aade",
  phone: "+91 9441112347",
  email: "aadeshiva1234@gmail.com",
  linkedin: "www.linkedin.com/in/shiva-aade",
  github: "https://github.com/shivareddy1287",
  summary:
    "Technically-sound Software Engineer effective in analyzing relevant information and guiding product cycle from conception to completion.Manages design effort and guides installation process for on-schedule product launches. Consults with internal and external clientele andemploys additional system resources to review and enhance configuration for optimal customer satisfaction.",
  selectResume: "Resume2",
  totalSkills: skillsTotalList,
  awardTotal: intialHonorAwards,
  educationTotal: intialAddEducation,
  workExpTotal: intialAdd,
  profession: "React Developer",
  aboutHeadline:
    "my future goal is to build big Application My own There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
  certificationTotal: intialAddCertifications,
  publicationsTotal: intialAddpublications,
  selectedFont: "Times New Roman",
  colorChange: "#359ebf",
  languageTotal: inlanguageTotal,
  projectTotal: inprojectTotal,
};

function Main() {
  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post(
        "https://dummydowanload1.azurewebsites.net/profilepic",
        formData
      );
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  //   updateProfilePic = async (profilePicUrl, profileUrl2) => {
  //     this.setState({ isProfileUrlUpdated: true });
  //     const filename = "image.jpg"; // Replace with your desired filename

  //     const file = this.dataURLtoFile(profilePicUrl, filename);

  //     const formData = new FormData();
  //     formData.append("image", file);

  //     await axios.post("http://localhost:3000/profile", formData);
  //     this.setState({ profileUrl: profilePicUrl });
  //   };

  const onDownloadButton = async () => {
    // this.updateProfilePic(this.state.profilePicUrl, 1);

    //coutning mission for trails

    const res1 = await axios.post(
      "https://dummydowanload1.azurewebsites.net/datafront",
      data1
    );
    console.log(res1);
    const res = await axios.get(
      "https://dummydowanload1.azurewebsites.net/downloaddata",
      {
        responseType: "blob",
      }
    );
    const pdfBlob = new Blob([res.data], {
      type: "application/pdf",
    });

    saveAs(pdfBlob);
    // this.setState({ profileUrl: "" });
  };

  return (
    <div>
      <div>
        <h1>Fast Downloader Testing</h1>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div className="img-cont-text">
        {/* <img src={selectedImage} alt="Uploaded" className="img-upload" /> */}
        {/* src={`data:image/png;base64,${selectedImage}`} */}

        <div></div>
      </div>
      <button onClick={onDownloadButton}>Download</button>
    </div>
  );
}

export default Main;
