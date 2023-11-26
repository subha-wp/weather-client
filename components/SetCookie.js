"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SetCookie() {
  const router = useRouter();
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        Cookies.set("lat", position.coords.latitude);
        Cookies.set("lon", position.coords.longitude);
        router.refresh();
      });
    }
  }, []);

  return;
  null;
}
