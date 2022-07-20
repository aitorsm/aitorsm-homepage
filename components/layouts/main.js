import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
//import VoxelObjLoader from '../voxel-obj-loader';

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

//const LazyVoxelObj = dynamic( () => import('../voxel-obj'), {
//  ssr: false,
//  loading: () => <VoxelObjLoader />
//})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Aitor's homepage" />
        <meta name="author" content="Aitor Sanchez" />
        <meta name="author" content="aitorsm" />
        <link rel="apple-touch-icon" href="180.png" />
        <link rel="shortcut icon" href="/32.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Aitor Sanchez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aitorsm" />
        <meta name="twitter:creator" content="@aitorsm" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Aitor Sanchez" />
        <meta name="og:title" content="Aitor Sanchez" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Aitor Sanchez  - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
