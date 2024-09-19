import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { CiCirclePlus } from 'react-icons/ci'
import { IoHomeSharp } from 'react-icons/io5'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW='1140px' px={4}>
      <Flex
        h={16}
        alignItems='center'
        justifyContent='space-between'
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <Text
          fontSize={{ base: '22', sm: '28' }}
          fontWeight='bold'
          textTransform='uppercase'
          textAlign='center'
          bgGradient='linear(to-r, green.400, blue.500)'
          bgClip='text'
        >
          <Link to='/'>e-Comm Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems='center'>
          <Link to='/'>
            <Button bg={useColorModeValue('gray.300')}>
              <IoHomeSharp fontSize={30} />
            </Button>
          </Link>
          <Link to='/create'>
            <Button bg={useColorModeValue('gray.300')}>
              <CiCirclePlus fontSize={30} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} bg={useColorModeValue('gray.300')}>
            {colorMode === 'light' ? (
              <MdDarkMode fontSize={30} />
            ) : (
              <MdOutlineLightMode fontSize={30} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
