import { Flex, Box, Text, Avatar, Badge, Button, Link } from '@chakra-ui/react';

export default function BadgePage() {
    return (
        <>
            <Flex>
                <Avatar src='https://i.pravatar.cc/150?img=3' />
                <Box ml='3'>
                    <Text fontWeight='bold'>
                        Jon Doe
                        <Badge ml='1' colorScheme='green'>
                            New
                        </Badge>
                    </Text>
                    <Text fontSize='sm'>Next js Experte</Text>
                </Box>

            </Flex>
            <Flex p={30}>
                <Button rounded={6} size='lg' colorScheme="teal">
                    <Link href="https://chakra-ui.com/docs/data-display/badge" isExternal>Visit chakra-ui.com badge documentation</Link>
                </Button>
            </Flex>
        </>
    )
}