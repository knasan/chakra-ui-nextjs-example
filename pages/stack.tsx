import { VStack, Box, StackDivider, Flex, Button, Link } from '@chakra-ui/react';
export default function stack() {
    return (
        <>
            <Box bgSize={600} minW={600} >
                <VStack
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    align='stretch'
                >
                    <Box h='40px' bg='yellow.200'>
                        1
                    </Box>
                    <Box h='40px' bg='tomato'>
                        2
                    </Box>
                    <Box h='40px' bg='pink.100'>
                        3
                    </Box>
                </VStack>
            </Box>
            <Flex py={6}>
                <Button rounded={6} size='lg' colorScheme="teal">
                    <Link href="https://chakra-ui.com/docs/layout/stack" isExternal>Visit chakra-ui.com stack documentation</Link>
                </Button>
            </Flex>
        </>
    );
}
