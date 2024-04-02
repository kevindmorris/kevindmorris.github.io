import { Flex, Link, LinkProps } from "@chakra-ui/react";
import { capitalize } from "lodash";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      p="4"
      alignItems={["flex-start", "center"]}
      flexDirection={["column", "row"]}
      gap={4}
    >
      <HeaderBrand href="/">kevindmorris.github.io</HeaderBrand>
      <Flex
        alignItems={["flex-start", "center"]}
        flexDirection={["column", "row"]}
        gap={4}
      >
        {[
          { label: "experience", href: "/experience" },
          { label: "education", href: "/education" },
          { label: "projects", href: "/projects" },
        ].map((e) => (
          <HeaderLink key={e.href} href={e.href}>
            {capitalize(e.label)}
          </HeaderLink>
        ))}
      </Flex>
    </Flex>
  );
}

function HeaderBrand({ children, href, ...props }: LinkProps) {
  return (
    <Link
      as={NavLink}
      to={href}
      fontSize="2xl"
      fontWeight="bold"
      color="grey.900"
      textDecoration="none"
      _hover={{
        color: "gray.500",
        transition: "color 0.5s ease-in-out",
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

function HeaderLink({ children, href, ...props }: LinkProps) {
  return (
    <Link
      as={NavLink}
      to={href}
      fontSize="md"
      color="grey.900"
      textDecoration="none"
      _hover={{
        color: "gray.500",
        transition: "color 0.5s ease-in-out",
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
