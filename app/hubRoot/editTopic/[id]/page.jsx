"use client";
import EditTopicForm from "@/components/EditTopicForm";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShimmerContentBlock } from "react-shimmer-effects";

const EditTopic = ({ params }) => {
  const { id } = params;
  const [topic, setTopic] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getTopic = async () => {
    try {
      const response = await axios.get(`/api/route/getupdate?id=${id}`);
      if (response.status === 200) {
        setTopic(response.data.records);
      } else {
        throw new Error("Failed to fetch topic");
      }
    } catch (error) {
      toast.error("Failed to fetch topic. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getTopic();
    }
  }, [id]);

  return (
    <div className="container">
      {isLoading ? (
        <div>
          <ShimmerContentBlock
            title
            text
            cta
            thumbnailWidth={370}
            thumbnailHeight={370}
          />
        </div>
      ) : (
        <EditTopicForm
          id={id}
          title={topic.title}
          description={topic.description}
          imgUrl={topic?.imgurl}
        />
      )}
    </div>
  );
};

export default EditTopic;
