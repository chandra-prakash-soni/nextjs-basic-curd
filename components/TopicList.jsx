"use client";
import React, { useEffect, useState } from 'react';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import axios from 'axios';
import { ShimmerContentBlock, ShimmerSimpleGallery } from 'react-shimmer-effects';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTopic } from '@/redux/action/api';
import { CCard, CCardBody, CCardHeader, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import { Row, Col } from 'reactstrap'; // Import the necessary components
import { GiSemiClosedEye } from "react-icons/gi";

const TopicList = ({modalHandler}) => {
    const { responseOk, alltopics_Response } = useSelector((state) => state.collections);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTopic())
    }, [responseOk]);

    return (
        <>
            <h3 className="d-flex justify-content-center text-3xl font-bold mt-3">All Topics</h3>
            <Row >
                {alltopics_Response ?
                    alltopics_Response?.records?.map((data) => (
                        <Col xs={12} md={4} key={data._id} className='my-3 d-flex justify-content-center'>
                            <CCard style={{ width: '22rem', height: "25rem" }}>
                                <CCardImage orientation="top h-50" src={data.imgurl} />
                                <CCardBody>
                                    <CCardTitle>{data.title}</CCardTitle>
                                    <CCardText>
                                        {data.description}
                                    </CCardText>
                                    <div className="flex gap-2">
                                        <button type="button" class="btn btn-outline-primary m-1"><RemoveBtn id={data._id} /></button>
                                        <button type="button" class="btn btn-outline-primary m-1"> <a href={`hubRoot/editTopic/${data._id}`}>
                                            <HiPencilAlt size={24} />
                                        </a></button>
                                        <button type="button" class="btn btn-outline-primary m-1" onClick={()=>modalHandler(data)}><GiSemiClosedEye/></button>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </Col>
                    ))
                    : <Col xs={12} key={Math.random()} className='my-5 d-flex justify-content-center'>
                        <ShimmerSimpleGallery row={1} card imageHeight={300} caption />
                    </Col>
                }

            </Row>

        </>
    );
};

export default TopicList;
