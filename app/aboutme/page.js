"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <Card>
            <CardHeader>
              <Heading size="md">About Me</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Hello! Im a web developer passionate about creating beautiful
                and functional websites. I specialize in React and modern
                JavaScript.
              </Text>
            </CardBody>
          </Card>
        );
      case "projects":
        return (
          <Card>
            <CardHeader>
              <Heading size="md">My Projects</Heading>
            </CardHeader>
            <CardBody>
              <UnorderedList>
                <ListItem>Personal Website (React)</ListItem>
                <ListItem>E-commerce Platform (Next.js)</ListItem>
                <ListItem>Weather App (React Native)</ListItem>
              </UnorderedList>
            </CardBody>
          </Card>
        );
      case "contact":
        return (
          <Card>
            <CardHeader>
              <Heading size="md">Contact Me</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Feel free to reach out to me at: your.email@example.com
              </Text>
            </CardBody>
          </Card>
        );
      default:
        return (
          <Card>
            <CardHeader>
              <Heading size="md">Welcome to My Personal Website</Heading>
              <Text>Explore to learn more about me and my work</Text>
            </CardHeader>
            <CardBody>
              <Text>
                Hi there! Im a passionate web developer. Feel free to explore my
                site to learn more about my skills, projects, and how to get in
                touch.
              </Text>
            </CardBody>
          </Card>
        );
    }
  };

  return (
    <Flex direction="column" minHeight="100vh" bg="gray.100">
      <Box as="header" p={4} bg="gray.100" color="black">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxWidth="4xl"
          margin="auto"
        >
          <Heading as="h1" size="lg">
            Raksmey Chann
          </Heading>
          <Flex>
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
          </Flex>
        </Flex>
      </Box>

      <Box as="main" flexGrow={1} p={4}>
        <Box maxWidth="4xl" margin="auto">
          {renderContent()}
        </Box>
      </Box>

      <Box as="footer" p={4} bg="gray.200">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxWidth="4xl"
          margin="auto"
        >
          <Text>&copy; 2023 Your Name. All rights reserved.</Text>
          <Flex>
            <Button
              as="a"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <Github />
            </Button>
            <Button
              as="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <Linkedin />
            </Button>
            <Button as="a" href="mailto:your.email@example.com" variant="ghost">
              <Mail />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
