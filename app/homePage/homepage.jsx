"use client";
import TopicList from "@/components/TopicList";
import DetailPopup from "@/components/popupmodel/DetailPopup";
import { image2, iamge3 } from "@/image";
import { carouselItem } from "@/utils/json";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Homepage = () => {
  const { responseOk } = useSelector((state) => state.collections);
  const [modaldata, setModal] = useState(false);

  useEffect(() => {
    if (responseOk?.success) {
      toast.success(responseOk?.message);
    } else {
      toast.warn(responseOk?.message);
    }
  }, [responseOk]);

  const modalHandler = (data) => {
    if (data) {
      setModal(data);
    } else {
      setModal(false);
    }
  };

  return (
    <div>
      {/* <h1 className="d-flex justify-content-center text-3xl font-bold">Welcome to HomePage</h1> */}
      <CCarousel controls indicators light interval={300}>
        {carouselItem?.items?.map((vl, ky) => (
          <CCarouselItem key={ky}>
            <CImage
              className="d-block w-100 fixed-height-image"
              src={vl?.imageUrl?.src}
              alt="alt.img"
            />
            <CCarouselCaption className="d-none d-md-block text-white">
              <h5 className=" fw-bold">{vl?.title}</h5>
              <p className="" style={{ fontSize: " 2rem" }}>
                {vl?.body}
              </p>
            </CCarouselCaption>
          </CCarouselItem>
        ))}
      </CCarousel>
      <div className="container">
        <TopicList modalHandler={modalHandler} />
      </div>

      {modaldata && (
        <DetailPopup modalHandler={modalHandler} modaldata={modaldata} />
      )}
    </div>
  );
};

export default Homepage;
