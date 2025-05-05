"use client";
import { useEffect } from "react";
import { useTitle } from "@/context/PageTitle";

export default function Hobby() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("My Hobbies");
  }, []);

  return (
    <div></div>
  );
}
