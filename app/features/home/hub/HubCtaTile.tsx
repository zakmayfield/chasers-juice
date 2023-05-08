import { Box, Flex, Button, Heading, Text } from '@chakra-ui/react';
import { Link as RemixLink } from "@remix-run/react";

type HubCtaTileProps = {
  title: string;
  content: string;
  route: string;
};

export default function HubCtaTile({ title, content, route }: HubCtaTileProps) {
  return (
    <Flex
      flexFlow="column"
      alignItems="space-between"
      textAlign={{ base: "center", md: "left" }}
      px="12"
      my={{ base: "12", md: 0 }}
    >
      <Heading as="h3" fontWeight="semibold">
        {title}
      </Heading>

      <Text my="5">{content}</Text>

      <Box>
        <Button as={RemixLink} to={route}>
          Learn More
        </Button>
      </Box>
    </Flex>
  );
}
