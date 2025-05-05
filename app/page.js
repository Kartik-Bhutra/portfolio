"use client";
import { useEffect } from "react";
import { useTitle } from "@/context/PageTitle";

export default function Home() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("About Me");
  }, [setTitle]);

  return (
    <p>
      I’m a Creative Developer and UI/UX Designer who enjoys turning complex
      problems into simple, beautiful, and intuitive designs. I focus on
      crafting experiences that are functional, user-friendly, and visually
      appealing.
    </p>
  );
}
