"use client";
import { useEffect } from "react";
import { useTitle } from "@/context/PageTitle";

export default function ProjectsPage() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("My Projects");
  }, []);

  return (
    <div className="space-y-4">
      <p>
        Here's a showcase of my latest projects that combine design,
        interactivity, and problem solving.
      </p>
      <ul className="list-disc list-inside text-sm">
        <li>🌐 Portfolio Website – Built with Next.js and Tailwind</li>
        <li>🧠 AI Chatbot Interface – Built with React and OpenAI APIs</li>
        <li>🚀 Bus Tracking App – Real-time geolocation with Leaflet</li>
      </ul>
    </div>
  );
}
