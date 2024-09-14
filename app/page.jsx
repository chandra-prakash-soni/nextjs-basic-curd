"use client"

import TopicList from '@/components/TopicList'
import reducers from "../redux/reducers";
import Homepage from './homePage/homepage'
import { Provider, useDispatch } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux';
import MainNavbar from '@/components/mainNavbar/mainNavbar';
import { useState } from 'react';
import DefaultPage from "./defaultPage";


export default function Home() {
  const [dec, setdec] = useState(false)

  const [form, setFrom] = useState()
  const pageHandler = (val) => {
      setFrom(val)
  }

  return (
    <>
      {/* <Provider store={store}> */}
        <MainNavbar pageHandler={pageHandler} />
        <div className=" pt-5" >
          {localStorage.getItem("token") ?
            <Homepage />
            :
            <DefaultPage form={form} pageHandler={pageHandler} />
          }
        </div>


      {/* </Provider> */}
    </>

  )
}
