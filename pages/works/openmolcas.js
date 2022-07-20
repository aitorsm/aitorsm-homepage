import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="OpenMolcas">
    <Container>
      <Title>
        OpenMolcas<Badge>2019</Badge>
      </Title>
      <P>
        A popular quantum chemistry software developed by a big scientific community.
        It implements several multiconfigurational electornic structure methods.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>FORTRAN, Global Arrays</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/open_molcas.png" alt="openmolcas" />
      <WorkImage src="/images/works/openm_ascii.png" alt="openmolcas" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
