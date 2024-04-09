import { Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      px={8}
      pt={4}
      flexDirection={["column", "row"]}
      gap={4}
      style={{
        height: 80,
        position: "sticky",
        top: 0,
        left: 0,
        alignItems: "start",
        backdropFilter: "blur(10px)",
        maskImage: "linear-gradient(to bottom,white 70%,transparent 100%)",
      }}
    >
      <HeaderBrand />
    </Flex>
  );
}

function HeaderBrand() {
  return (
    <Link
      as={NavLink}
      to="/"
      fontSize="2xl"
      fontWeight="bold"
      color="grey.900"
      textDecoration="none"
      fontFamily="Gloria Hallelujah"
      _hover={{
        color: "gray.600",
        transition: "color 0.2s ease-in-out",
      }}
    >
      kevindmorris.github.io
    </Link>
  );
}
