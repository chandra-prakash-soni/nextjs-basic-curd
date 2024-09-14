"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Select from "react-select";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogtype, setType] = useState("");
  const [base64Image, setBase64Image] = useState("");

  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [spinner, setspinner] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setspinner(true);
      const response = await axios.post(`/api/route/create`, {
        title,
        description,
        imgurl: base64Image,
        blogtype,
      });

      if (response.status === 200) {
        setspinner(false);
        router.push("/");
        const timestamp = new Date().toLocaleTimeString();
        toast.success(`Topic created successfully at ${timestamp}!`);
      } else {
        setspinner(false);

        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      setspinner(false);

      toast.error("Failed to create a topic. Please try again.");
    }
  };
  const options = [
    { value: "food", label: "food" },
    { value: "Fruits", label: "Fruits" },
    { value: "Vegitable", label: "Vegitable" },
    { value: "city", label: "city" },
  ];
  return (
    <>
      <span className="d-flex justify-content-center mt-8 font-bold">
        Add Topic
      </span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 container my-8 w-50 "
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-indigo-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          type="text"
          placeholder="Topic Title"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-indigo-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          type="text"
          placeholder="Topic Description"
        />
        <div className="custom-input d-flex justify-content-between border border-slate-500 px-4">
          <input
            onChange={(e) => handleImageChange(e)}
            className="custom-input"
            height={100}
            width={100}
            type="file"
            accept="image/*"
          />
          {selectedImage && (
            <div>
              <small>Selected Image:</small>
              <img
                src={URL.createObjectURL(selectedImage)}
                height={100}
                width={100}
                alt="img.png"
              />
            </div>
          )}
        </div>
        <Select onChange={(e) => setType(e.value)} options={options} />

        {!spinner ? (
          <button
            type="submit"
            className="btn btn-outline-primary py-2 px-6 w-fit"
          >
            Add Topic
          </button>
        ) : (
          <button
            class="btn btn-outline-primary py-2 px-6 w-fit"
            type="button"
            disabled
          >
            <span
              class="spinner-grow spinner-grow-sm mx-2"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        )}
      </form>
    </>
  );
};

export default AddTopic;
