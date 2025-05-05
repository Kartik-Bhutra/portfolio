"use client";
import { useEffect } from "react";
import { useTitle } from "@/context/PageTitle";

export default function Contact() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Contact");
  }, []);

  return (
    <div></div>
  );
}
