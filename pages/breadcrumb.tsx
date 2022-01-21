import { Flex, Button, Link } from '@chakra-ui/react';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    // BreadcrumbSeparator,
} from '@chakra-ui/react'

export default function BreadcrumbPage() {
    return (
        <>
            <Box bgSize={500}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            {/* <BreadcrumbSeparator /> */}
            <Flex py={6}>
                <Button rounded={6} size='lg' colorScheme="teal">
                    <Link href="https://chakra-ui.com/docs/navigation/breadcrumb" isExternal>Visit chakra-ui.com breadcrumb documentation</Link>
                </Button>
            </Flex>
        </>)
        ;
}
