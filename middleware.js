"use client"
import { NextResponse } from "next/server";
// const localStorageData = localStorage.getItem("token")

export default function midleware(req){
    const verify = req.cookies.get("token");
    const url = req.url
    if(!verify && url.includes("/hubRoot") ){
      return  NextResponse.redirect("http://localhost:3000/")
    }
}