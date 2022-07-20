import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
          &copy; {new Date().getFullYear()} Aitor Sanchez. All Rights Reserved.<br /> Credits to <a href="https://www.craftz.dog/">Takuya Matsuyama (craftdog)</a> for creating the template                                                               
    </Box>
  )
}

export default Footer
