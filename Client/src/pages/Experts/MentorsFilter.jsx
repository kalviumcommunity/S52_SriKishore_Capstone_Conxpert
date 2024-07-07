import { useState } from "react";
import Select from "react-select";
// import styled from "styled-components";

const optionsOne = [
  { value: "all", label: "All" },
  { value: "mockInterview", label: "Mock Interview" },
  { value: "resumeReview", label: "Resume Review" },
  { value: "projectGuidance", label: "Project Guidance" },
  { value: "mentorship", label: "Mentorship" },
  { value: "careerGuidance", label: "Career Guidance" },
  { value: "personalDevelopment", label: "Personal Development" },
];

const optionsTwo = [
    { value: "all", label: "All" },
    { value: "FrontEndEngineer", label: "Front-end engineer" },
    { value: "FullStackDeveloper", label: "FullStack Developer" },
    { value: "HeadHR", label: "Head HR" },
    { value: "ProductManager", label: "Project Manager" },
    { value: "SoftwareEngineer", label: "Software Engineer" },
    { value: "DevOpsEngineer", label: "DevOps engineer" },
  ];

  const optionsThree = [
    { value: "all", label: "All" },
    { value: "google", label: "Google" },
    { value: "meta", label: "Meta" },
    { value: "apple", label: "Apple" },
    { value: "microsoft", label: "Microsoft" },
    { value: "accenture", label: "Accenture" },
    { value: "zoho", label: "Zoho" },
    { value: "adobe", label: "Adobe" },
  ];

// Custom styles for react-select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    borderRadius:"0px",
    borderColor: state.isFocused ? "grey" : "grey",
    boxShadow: state.isFocused ? "0 0 0 0.3px blue" : "none",
    "&:hover": {
      borderColor: "black",
    },
  }),
};

const MentorsFilter = () => {
  const [selectOptionOne, setSelectOptionOne] = useState(null);
  const [selectOptionTwo, setSelectOptionTwo] = useState(null);
  const [selectOptionThree, setSelectOptionThree] = useState(null);

  const handleChangeOne = (selectOptionOne) => {
    setSelectOptionOne(selectOptionOne);
  };

  const handleChangeTwo = (selectOptionTwo) => {
    setSelectOptionTwo(selectOptionTwo);
  };

  const handleChangeThree = (selectOptionThree) => {
    setSelectOptionThree(selectOptionThree);
  };

  return (
    <div className="md:flex md:justify-evenly m-[20px]">
    <div className="mb-[10px] md:mb-[0px]">
      <label className="text-textColor font-[800] text-[15px]">SERVICE:</label>
      <Select
        className="lg:w-[20rem] mt-[8px]"
        options={optionsOne}
        value={selectOptionOne}
        onChange={handleChangeOne}
        isSearchable={true}
        styles={customStyles}
      />
    </div>


    <div className="mb-[10px] md:mb-[0px]">
      <label className="text-textColor font-[800] text-[15px]">ROLE:</label>
      <Select
        className="lg:w-[20rem] mt-[8px]"
        options={optionsTwo}
        value={selectOptionTwo}
        onChange={handleChangeTwo}
        isSearchable={true}
        styles={customStyles}
      />
    </div>


    <div className="mb-[10px] md:mb-[0px]">
      <label className="text-textColor font-[800] text-[15px]">COMPANY:</label>
      <Select
        className="lg:w-[20rem] mt-[8px]"
        options={optionsThree}
        value={selectOptionThree}
        onChange={handleChangeThree}
        isSearchable={true}
        styles={customStyles}
      />
    </div>

    </div>
    
  );
};

export default MentorsFilter;