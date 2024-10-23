"use client";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Github = dynamic(() => import("lucide-react").then((mod) => mod.Github), {
  ssr: false,
});
const Linkedin = dynamic(
  () => import("lucide-react").then((mod) => mod.Linkedin),
  { ssr: false }
);
const Mail = dynamic(() => import("lucide-react").then((mod) => mod.Mail), {
  ssr: false,
});

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <Card>
            <CardHeader>
              <h2>About Me</h2>
            </CardHeader>
            <CardBody>
              <p>
                Hello! I'm a web developer passionate about creating beautiful
                and functional websites. I specialize in React and modern
                JavaScript.
              </p>
            </CardBody>
          </Card>
        );
      case "projects":
        return (
          <Card>
            <CardHeader>
              <h2>My Projects</h2>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5">
                <li>Personal Website (React)</li>
                <li>E-commerce Platform (Next.js)</li>
                <li>Weather App (React Native)</li>
              </ul>
            </CardBody>
          </Card>
        );
      case "contact":
        return (
          <Card>
            <CardHeader>
              <h2>Contact Me</h2>
            </CardHeader>
            <CardBody>
              <p>Feel free to reach out to me at: your.email@example.com</p>
            </CardBody>
          </Card>
        );
      default:
        return (
          <Card>
            <CardHeader>
              <h2>Welcome to My Personal Website</h2>
              <p>Explore to learn more about me and my work</p>
            </CardHeader>
            <CardBody>
              <p>
                Hi there! I'm a passionate web developer. Feel free to explore
                my site to learn more about my skills, projects, and how to get
                in touch.
              </p>
            </CardBody>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="p-4 bg-primary text-primary-foreground">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Raksmey Chann</h1>
          <div className="space-x-4">
            <Button variant="ghost" onClick={() => setActiveSection("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => setActiveSection("about")}>
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </Button>
            <Button variant="ghost" onClick={() => setActiveSection("contact")}>
              Contact
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>

      <footer className="p-4 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:your.email@example.com">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
