import { Box, Flex, Image, Link, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { FaHome, FaFire, FaRegCompass, FaRegBell } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="red.600" color="white" padding="4">
        <Link href="/">
          <Image src="/youtube-logo.svg" alt="YouTube Logo" boxSize="40px" />
        </Link>
        <Spacer />
        <HStack spacing="24px">
          <IconButton aria-label="Home" icon={<FaHome />} />
          <IconButton aria-label="Trending" icon={<FaFire />} />
          <IconButton aria-label="Explore" icon={<FaRegCompass />} />
          <IconButton aria-label="Notifications" icon={<FaRegBell />} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;