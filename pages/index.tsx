import { Box, Button, Flex, Heading, Link, Container, Text, Center, Square } from "@chakra-ui/react"

const IndexPage = () => (
  <Container>
    <Flex alignItems="center" justifyContent="center">
      <Heading>Next JS with chakra ui framework example</Heading>
    </Flex>

    <Flex>
      <Button rounded={6} size='lg' colorScheme="teal">
        <Link href="https://chakra-ui.com/" isExternal>Visit chakra-ui.com</Link>
      </Button>
    </Flex>
  </Container>
)

export default IndexPage
