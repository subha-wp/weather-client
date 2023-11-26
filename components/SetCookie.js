"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SetCookie() {
  const router = useRouter();
  const fetchLocation = async () => {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    const { latitude, longitude } = data;
    Cookies.set("lat", latitude);
    Cookies.set("lon", longitude);
    router.refresh();
  };
  useEffect(() => {
    fetchLocation();
  });

  return;
  null;
}
