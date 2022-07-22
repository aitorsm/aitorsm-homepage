import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Spain!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Aitor Sanchez
          </Heading>
          <p>Developer/ Scientist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/aitor.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Aitor Sanchez is a scientist and a freelancer. He is full of passion for building digital
          services and pushing the barrier of knowledge. Currently he is exploring the benefits of
          state of the art machine learning techniques applied to agriculture and food production.
          He created {' '} 
          <NextLink href="/works/plantula" passHref scroll={false}>
            <Link>Plantula</Link>
          </NextLink>
  , a plant-recognition app for farmers.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Santalecina, Spain.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Physics at University of Zaragoza          
        </BioSection>        
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Working in my phD in collaboration with Oak Ridge National Laboratory, US
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}          
            Drawing, Surfing, Skiing,{' '}
            Physics, Machine Learning
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/aitorsm" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoGithub />}
              >
                @aitorsm
              </Button>
            </Link>
          </ListItem>          
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              Posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
