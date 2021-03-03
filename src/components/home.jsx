import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      Use the navigation bar on top to see some of my projects
    </Container>
  )
}

export default Home

const Container = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92vh;
  font-size:4rem;
`