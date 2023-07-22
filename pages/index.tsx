import Header from '@/components/Header'
import Calculator from '@/components/Calculator'
import { SimpleGrid, Container, Image, Card, Title, ActionIcon } from '@mantine/core'
import { CarCrash } from 'tabler-icons-react';


export default function Home() {
  const links = [{ link: '/', label: 'Home' }, { link: '#', label: 'About Project' },{ link:'#', label: 'Team' }]

  return (
    <>
      <Header links={links} />
      <Container mb={20}>
      <div style={{display:'flex', alignItems:'center'}}>
      <ActionIcon size="xl">
            <CarCrash size="2rem" strokeWidth={1.5} /> |
        </ActionIcon>
        <Title align="center" order={1} mt={20} mb={20} size={20}> Car Insurance Premium Calculator</Title>
        </div>
            <Calculator />
      </Container>
    </>
  )
}
