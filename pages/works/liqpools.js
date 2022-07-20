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
  <Layout title="Bicoin Liquidation Pools">
    <Container>
      <Title>
        Bitcoin Liquidation Pools<Badge>2019</Badge>
      </Title>
      <P>
        A BitMEX client for getting the approximate liquidation points of the incoming
        orders. BitMEX exchange is well known to offer up to 100x leverage, this also
        makes a lot of people to gamble and, subsequently, to be liquidated. I coded this
        client with the hypothesis that external market making bots or even a BitMEX
        assotiated trading desk was responsible of these liquidations.
      </P>
      <P>
        For every incoming order, it plots the liquidation levels for an hypothetical
        levarage of 25x, 50x and 100x. The result is a heatmap with the most possible
        price levels in the next hours.
      </P>            
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/liqpools.png" alt="liqpools" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
