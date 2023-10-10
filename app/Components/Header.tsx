import {Flex, Heading, Text, Input, Button} from "@chakra-ui/react"

const Header = () => {
    return (
        <>
        <Flex p="2rem" direction="column" alignItems="center">
            <Heading as='h1' size='4xl' noOfLines={1}
            className="tasklist-title">Tasklist.io</Heading>
        </Flex>
        <Text mt='1rem' className="tasklist-slogan" textAlign='center'>
            TaskList est un outil qui vous simplifie votre quotidien en toute simplicité !
        </Text>
        </>
    )
}
export default Header