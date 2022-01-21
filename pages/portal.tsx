import { Portal, Box, Flex, Button, Link } from '@chakra-ui/react';
import React from 'react';

export default function PortalPage() {
    const ref = React.useRef()
    return (
        <>
            <div>
                <Portal containerRef={ref}>
                    <Box bg='teal.500' color='white'>
                        Parent: Hey welcome,
                        <Portal>Child: I'm attached to my parent portal</Portal>
                    </Box>
                </Portal>
                <Box bg='red.400' color='white' ref={ref} />
            </div>
            <Flex py={6}>
                <Button rounded={6} size='lg' colorScheme="teal">
                    <Link href="https://chakra-ui.com/docs/components/portal" isExternal>Visit chakra-ui.com portal documentation</Link>
                </Button>
            </Flex>
        </>
    );
}
