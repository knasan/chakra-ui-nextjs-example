import { Button, Flex, Heading, Input, Text, useColorModeValue } from "@chakra-ui/react"

export default function LoginPage() {
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (
        <>
            <Flex height="50vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background={formBackground} p={12} rounded={6}>
                    <Heading mb={6}>Log in</Heading>
                    <Input placeholder="Email address" type="email" variant="filled" mb={3} />
                    <Input placeholder="*******" type="password" variant="filled" mb={3} />
                    <Button colorScheme="teal" mb={3}>Log in</Button>
                </Flex>

            </Flex>
            <Flex p={10}>
                <Text>there was no template for login, i implemented it myself</Text>
            </Flex>
        </>
    )
}