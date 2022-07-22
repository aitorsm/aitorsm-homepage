import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
//import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Plantula">
    <Container>
      <Title>
        Plantula <Badge>2021</Badge>
      </Title>
      <P>
        Plantula is plant-recognition mobile app which identifies more than 50 weeds species        which harm harvests in Spain and also makes recommendation of how to deal with these        plagues.
      </P>
      <P>
        Its algorithm is more advanced than others, it can recognize the species in every           stage of growth!
      </P>
      <UnorderedList my={4}>
        <ListItem>Weed identification based on photo</ListItem>
        <ListItem>Treatment recommendations</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android and iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Dart, Python, Tensorflow</span>
        </ListItem>        
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="./"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>
      <WorkImage src="/images/works/plantula1.png" alt="plantula" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
