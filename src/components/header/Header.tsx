import { Flex } from "@chakra-ui/react";
import HeadingLink from "./HeadingLink";

export default function Header() {
  return (
    <Flex p="4" alignItems="center">
      <HeadingLink level={1} href="/">
        kevindmorris.github.io
      </HeadingLink>
    </Flex>
  );
}
