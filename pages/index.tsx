import Header from '@/components/Header'
import Calculator from '@/components/Calculator'
import { Container, Title, ActionIcon } from '@mantine/core'
import { CarCrash } from 'tabler-icons-react';
import Head from 'next/head';

export default function Home() {
  const links = [{ link: '/', label: 'Home' }, { link: '#', label: 'About Project' },{ link:'/damage-detection', label: 'Damage Detection' }]

  return (
    <>
      <Head>
        <title>Car Insurance Premium Calculator</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Header links={links} />
      <Container mb={10} size="lg">
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <ActionIcon size="xl">
            <CarCrash size="2rem" strokeWidth={1.5} /> |
        </ActionIcon>
        <Title align="center" order={1} my={25} size={20}> Car Insurance Premium Calculator</Title>
        </div>
            <Calculator />
      </Container>
    </>
  )
}
