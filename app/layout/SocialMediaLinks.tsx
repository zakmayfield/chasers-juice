import { Box, Flex } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "@remix-run/react";
import { MotionBox } from "~/shared/components";

export const SocialMediaLinks = () => {
  return (
    <Flex justifyContent="space-between">
      <Link to="https://www.facebook.com/chasersjuicetoronto/" target="_blank">
        <Box
          border="1px solid black"
          display="inline-block"
          transition="ease"
          transitionDuration="200ms"
          _hover={{ color: "primary.600" }}
        >
          <MotionBox whileHover={{ scale: 1.2 }} p="2.5">
            <FaFacebookF />
          </MotionBox>
        </Box>
      </Link>
      <Link to="https://www.instagram.com/chasersjuicetoronto/" target="_blank">
        <Box
          border="1px solid black"
          display="inline-block"
          transition="ease"
          transitionDuration="200ms"
          _hover={{ color: "primary.600" }}
        >
          <MotionBox whileHover={{ scale: 1.2 }} p='2.5'>
            <FaInstagram />
          </MotionBox>
        </Box>
      </Link>
    </Flex>
  );
};
