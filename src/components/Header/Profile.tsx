import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rodrigo</Text>
          <Text color="gray.300" fontSize="small">
            rodrigo@marques.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Rodrigo Marques"
        src="https://github.com/rodrigomsrocha.png"
      />
    </Flex>
  );
}
