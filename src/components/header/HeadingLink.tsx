import { Link, LinkProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

interface HeadingLinkProps extends LinkProps {
  level: number;
}

const MotionHeading = motion(Link);

const HeadingLink: React.FC<HeadingLinkProps> = ({
  level,
  children,
  ...rest
}) => {
  return (
    <MotionHeading
      as={NavLink}
      fontSize={level === 1 ? "2xl" : `xl`}
      fontWeight="bold"
      color="grey.900"
      textDecoration="none"
      _hover={{
        color: "gray.500",
        transition: "color 0.5s ease-in-out",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      {...rest}
    >
      {children}
    </MotionHeading>
  );
};

export default HeadingLink;
