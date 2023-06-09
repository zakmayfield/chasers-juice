import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import logo from "~/shared/assets/chasers-juice-logo.png";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => {
  return (
    <Box as="footer" bgColor="tertiary.50" px="10" pb="10">
      <Grid
        templateColumns={{ md: "repeat(2, 1fr)" }}
        placeItems="center"
        textAlign="center"
        pt={{ md: "0", base: "8" }}
      >
        <GridItem
          lineHeight="5"
          letterSpacing=".5"
          px="16"
          py={{ md: "16", base: "6" }}
        >
          <Box h="100">
            <Heading
              as="h3"
              pb="5"
              fontSize="medium"
              textTransform="uppercase"
              w="full"
            >
              Contact Us
            </Heading>

            <Link
              as={RemixLink}
              fontSize="sm"
              transition="ease"
              transitionDuration="200ms"
              _hover={{ color: "primary.600" }}
              display="block"
              to="tel:416-259-1557"
            >
              416-259-1557
            </Link>
            <Link
              as={RemixLink}
              fontSize="sm"
              transition="ease"
              transitionDuration="200ms"
              _hover={{ color: "primary.600" }}
              display="block"
              to="mailto:orders@chasersjuice.com"
            >
              orders@chasersjuice.com
            </Link>
          </Box>
        </GridItem>

        <GridItem
          lineHeight="5"
          letterSpacing=".5"
          px="16"
          py={{ md: "16", base: "6" }}
        >
          <Box h="100">
            <Heading as="h3" fontSize="medium" textTransform="uppercase" pb="5">
              Follow Us
            </Heading>

            <SocialMediaLinks />
          </Box>
        </GridItem>
      </Grid>

      <Box>
        <Flex
          pt="7"
          position="relative"
          borderTop="1px solid black"
          borderColor="gray.700"
          textAlign="center"
          alignItems="center"
          flexDir={{ md: "row", base: "column" }}
        >
          <Box
            position={{ md: "absolute", base: "relative" }}
            left={{ md: "0", base: undefined }}
            mb="4"
          >
            <Image src={logo} alt="Chasers Juice logo" w="65px" />
          </Box>

          <Text
            w="full"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="0.5"
          >
            CHASERS FRESH JUICE INC. 218 North Queen St. Etobicoke, ON M9C 4Y1
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
