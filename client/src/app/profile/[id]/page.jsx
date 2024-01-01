"use client"

import React from "react";
import Header from "../../../components/Header";

import profileData from "../../../../public/profile_data";
import { usePathname } from "next/navigation"; // Import from next/navigation

const ProfilePage = () => {
  const pathName = usePathname(); // Use usePathname from next/navigation
  const pathNo = pathName.slice("/profile/".length);
  console.log(pathNo);
  const dataAll = profileData.find((item) => item.id === Number(pathNo));

  if (!dataAll) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="bg-black text-primary-text min-h-screen">
      <Header />

      <div className="flex justify-center items-center mt-10 mx-4">
        <div className="w-1/3 mr-4">
          <h2 className="text-2xl mb-4">Personal Details</h2>
          <div className="bg-background-clr p-8 rounded-lg h-[460px]">
            <div className="p-8 flex flex-col items-center justify-center">
              <div className="bg-role-background p-0 rounded-lg mb-4 w-1/2 mt-0 m-0 h-[150px] overflow-hidden my-0">
             
              </div>
              <h2 className="text-2xl font-bold text-center text-main-text">
                Name: {dataAll.name}
              </h2>
            </div>
            <div className="text-left text-main-text">
              <p className="mb-4">USN: {dataAll.usn}</p>
              <p className="mb-4">BRANCH: {dataAll.branch}</p>
              <p className="mb-4">YEAR: {dataAll.year}</p>
              <p>Email: {dataAll.email}</p>
            </div>
          </div>
        </div>

        <div className="w-1/3 ml-4">
          <h2 className="text-2xl mb-4">Academics</h2>
          <div className="bg-background-clr p-8 rounded-lg h-[460px]">
            <div className="flex mb-4 items-center">
              <div className="w-1/3">
                <label className="block text-white">CGPA:</label>
              </div>
              <div className="w-2/3">
                <input
                  type="text"
                  className="text-white bg-primary-card rounded-md w-full p-2"
                  defaultValue={dataAll.cgpa}
                />
              </div>
            </div>
            <div className="flex mb-4 items-center">
              <div className="w-1/3">
                <label className="block text-white">Active Backlogs:</label>
              </div>
              <div className="w-2/3">
              <input
  type="text"
  className="text-white bg-primary-card rounded-md w-full p-2"
  defaultValue={dataAll.activeBacklogs}
/>

              </div>
            </div>
            <hr className="my-4" />
           <label className="block text-white">Skills:</label>
<div className="flex flex-wrap -mx-2">
  {dataAll.skills.map((skill, index) => (
    <div key={index} className="w-1/3 px-2 mb-4">
      <input
        type="text"
        className="text-white bg-primary-card rounded-md w-full p-2"
        defaultValue={skill}
      />
    </div>
  ))}
  </div>



            <hr className="my-4" />
            <label className="block text-white">Documents:</label>
            <div className="flex mb-4 items-center">
              <div className="w-1/3">
                <label className="block text-white ml-8">Resume:</label>
              </div>
              <div className="w-2/3">
                <input
                  type="text"
                  className="text-white bg-primary-card rounded-md w-full p-2"
                  defaultValue={dataAll.resumeUpload}
                />
              </div>
            </div>

            <div className="flex mb-4 items-center">
              <div className="w-1/3">
                <label className="block text-white ml-8">Aadhaar:</label>
              </div>
              <div className="w-2/3">
                <input
                  type="text"
                  className="text-white bg-primary-card rounded-md w-full p-2"
                  defaultValue={dataAll.aadhaarUpload}
                />
              </div>
            </div>

            <div className="mb-4 flex justify-center items-center">
              <button className="bg-logo-bg text-black font-bold px-10 py-0 rounded-md">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
