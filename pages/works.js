import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPlantula from '../public/images/works/plantula1.png'
import thumbOpenMolcas from '../public/images/works/open_molcas.png'
import thumbGronor from '../public/images/works/gronor.jpg'
import thumbLiqPools from '../public/images/works/liqpools.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="plantula"
                        title="Plantula"
                        thumbnail={thumbPlantula}
          >
            A plant-recognition mobile app to help farmers with weeds
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="gronor" thumbnail={thumbGronor} title="GronOR">
            A quantum chemistry software package based on the Non-Orthogonal
            Configuration Interaction method
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="openmolcas"
            thumbnail={thumbOpenMolcas}
            title="OpenMolcas"
          >
            Popular and widely used quantum chemistry software
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="liqpools" thumbnail={thumbLiqPools} title="Bitcoin Liquidation Pools">
            Client for getting the approximate liquidation points in BitMEX
            based on incoming orders
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
