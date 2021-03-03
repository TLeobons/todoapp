import Search from "./common/search"
import styled from 'styled-components'

const Images = () => {
  return (
    <Container>
      <Search/>
    </Container>
  )
}

export default Images

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`