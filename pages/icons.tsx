import { PhoneIcon, AddIcon, WarningIcon, AtSignIcon } from '@chakra-ui/icons'
import { Box, Flex, Button, Link } from '@chakra-ui/react';


export default function IconsPage() {
    return (
        <>
            <Box bgSize={200} mb={30}>
                <PhoneIcon minW={10} />

                <AddIcon w={6} h={6} minW={10} />

                <WarningIcon w={8} h={8} color="red.500" minW={10} />

                <AtSignIcon w={6} h={6} minW={10} color="blue.500" />
            </Box>
            <Flex py={6}>
                <Button rounded={6} size='lg' colorScheme="teal">
                    <Link href="https://chakra-ui.com/docs/media-and-icons/icon" isExternal>Visit chakra-ui.com icons documentation</Link>
                </Button>
            </Flex>
        </>
    );
}
