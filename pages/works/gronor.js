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
  <Layout title="GronOR">
    <Container>
      <Title>
        GronOR<Badge>2019</Badge>
      </Title>
      <P>
        A quantum chemistry software implementing Non-Orthogonal Configuration Interaction,
        a post Hartree-Fock method. The software is capable to run with at exascale and has
        been tested at supercomputers like Summit in the US and JUWELS in EU, being capable
        to take profit of the power of GPUs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>FORTRAN, MPI, OpenMP, OpenACC, CUDA</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/gronor.jpg" alt="gronor" />      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
