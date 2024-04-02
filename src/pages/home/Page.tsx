import {
  Box,
  BoxProps,
  Container,
  Link,
  LinkProps,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const text = [
  "Welcome to my personal site, a portfolio dedicated to my work experiences, educational background, and plethora of personal projects.",
  "In a nutshell, I am a software engineer dedicated to creating intuitive user interfaces for dynamic, data-driven web applications. With a keen eye for user experience, I specialize in frontend development, where I bring designs to life and ensure seamless interactions.",
  "While my primary focus is frontend development, I also have a solid understanding of backend processes and technologies. This versatility allows me to collaborate effectively across the full stack, ensuring cohesive and robust software solutions.",
  "Committed to precision and attention to detail, I am excited to continue pushing the boundaries of user-centric design and delivering impactful digital solutions.",
];

const icons = [
  { key: "babel" },
  { key: "bash" },
  { key: "bitbucket" },
  { key: "bootstrap" },
  { key: "confluence" },
  { key: "css3" },
  { key: "docker" },
  { key: "eslint" },
  { key: "git" },
  { key: "github" },
  { key: "html5" },
  { key: "java" },
  { key: "javascript" },
  { key: "jenkins" },
  { key: "jira" },
  { key: "junit" },
  { key: "lodash" },
  { key: "materialui" },
  { key: "nextjs" },
  { key: "nodejs" },
  { key: "postgresql" },
  { key: "python" },
  { key: "r" },
  { key: "react" },
  { key: "redux" },
  { key: "rollup" },
  { key: "sass" },
  { key: "spring" },
  { key: "swagger" },
  { key: "tailwindcss" },
  { key: "typescript" },
  { key: "vitejs" },
  { key: "vscode" },
  { key: "vuejs" },
  { key: "webpack" },
];

const first = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const second = {
  start: { opacity: 0, transition: { duration: 1 } },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const third = {
  start: { opacity: 0, transition: { duration: 1 } },
  end: { opacity: 1, transition: { duration: 1 } },
};

export default function Page() {
  return (
    <MotionContainer
      maxW="container.xl"
      py={4}
      variants={first}
      initial="start"
      animate="end"
    >
      <Subtitle>👋 Hello, my name is Kevin!</Subtitle>
      <br />
      {text.map((e, i) => (
        <React.Fragment key={i}>
          <motion.p variants={second}>{e}</motion.p>
          <br />
        </React.Fragment>
      ))}

      <Subtitle>🔗 Let's Connect</Subtitle>
      <br />
      <Stack>
        <Icon
          label="linkedin"
          as={Link}
          href="https://www.linkedin.com/in/kev-morris/"
          isExternal
        />
        <Icon
          label="github"
          as={Link}
          href="https://github.com/kevindmorris"
          isExternal
        />
      </Stack>
      <br />

      <Subtitle>🧰 Tech Stack</Subtitle>
      <br />
      <Stack>
        {icons.map((e) => (
          <Icon key={e.key} label={e.key} />
        ))}
      </Stack>
    </MotionContainer>
  );
}

const MotionContainer = motion(Container);
const MotionBox = motion(Box);

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2
      style={{ fontSize: "1.25rem", fontWeight: 700 }}
      variants={second}
    >
      {children}
    </motion.h2>
  );
};
const Stack = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={second}
      style={{ display: "flex", gap: 4, flexWrap: "wrap" }}
    >
      {children}
    </motion.div>
  );
};
const Icon = ({
  label,
  ...props
}: { label: string } & BoxProps & LinkProps) => {
  return (
    <MotionBox variants={third} {...props}>
      <Tooltip label={label}>
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${label}/${label}-original.svg`}
          width="40"
          height="40"
        />
      </Tooltip>
    </MotionBox>
  );
};
