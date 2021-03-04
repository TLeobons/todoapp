import { useState } from "react";
import styled from 'styled-components'

import Search from "./common/search"
import ResultGrid from './resultGrid'

const ImagesPage = () => {

  const [results, setResults] = useState([])

  const handleSearch = data => {
    setResults(data)
  }

  return (
    <Container>
      <Search onSearch={handleSearch}/>
      <ResultGrid data={results}
      />
    </Container>
  )
}

export default ImagesPage

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`