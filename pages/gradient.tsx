import { Box, Flex, Button, Link } from '@chakra-ui/react';

export default function GradientPage() {
    return (
        <>
            <Box w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' />
            <Flex p={10}>
                <Button rounded={6} size='lg' colorScheme="teal">
                    <Link href="https://chakra-ui.com/docs/features/gradient" isExternal>Visit chakra-ui.com gardient documentation</Link>
                </Button>
            </Flex>
        </>
    );
}
