

"use client"
import { useState } from "react";
import Image from "next/image";

export default function Gcsform() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dateOfBirth: "",
    religion: "",
    presentAddress: "",
    permanentAddress: "",
    guardianName: "",
    guardianCNIC: "",
    fatherCNIC: "",
    fatherOccupation: "",
    email: "",
    course: "Associate Degree in Commerce (I.Com) 2 Years",
    // Academic Records
    matricMarks: "",
    matricYear: "",
    matricRollNo: "",
    matricSubjects: "",
    matricBoard: "",
    interMarks: "",
    interYear: "",
    interRollNo: "",
    interSubjects: "",
    interBoard: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.fatherName || !formData.dateOfBirth) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Image
            src="/college-logo.png"
            alt="College Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Government Graduate College of Science</h1>
            <p className="text-sm text-gray-600">Wahdat Road, Lahore</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm">Form No: <span className="font-semibold">5492</span></p>
          <p className="text-sm">Diary No: <span className="font-semibold">4204</span></p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
          <div className="p-4 bg-gray-50 rounded-md">
            <p className="text-gray-800 font-medium">Associate Degree in Commerce (I.Com) 2 Years</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name of Candidate<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Father's Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Father's CNIC<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fatherCNIC"
              value={formData.fatherCNIC}
              onChange={handleChange}
              placeholder="00000-0000000-0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Father's Occupation</label>
            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Guardian's Name</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Guardian's CNIC</label>
            <input
              type="text"
              name="guardianCNIC"
              value={formData.guardianCNIC}
              onChange={handleChange}
              placeholder="00000-0000000-0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth<span className="text-red-500">*</span></label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Religion</label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Present Address</label>
            <textarea
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="2"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Permanent Address</label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="2"
            ></textarea>
          </div>
        </div>

        {/* Matric Details Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Matriculation Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Matric Marks<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="matricMarks"
                value={formData.matricMarks}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Examination Year<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="matricYear"
                value={formData.matricYear}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Roll Number<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="matricRollNo"
                value={formData.matricRollNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Board<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="matricBoard"
                value={formData.matricBoard}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Subjects<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="matricSubjects"
                value={formData.matricSubjects}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder="e.g., Physics, Chemistry, Mathematics"
              />
            </div>
          </div>
        </div>

        {/* Intermediate Details Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Intermediate Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Inter Marks<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="interMarks"
                value={formData.interMarks}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Examination Year<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="interYear"
                value={formData.interYear}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Roll Number<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="interRollNo"
                value={formData.interRollNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Board<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="interBoard"
                value={formData.interBoard}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Subjects<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="interSubjects"
                value={formData.interSubjects}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder="e.g., Economics, Business Studies, Accounting"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
