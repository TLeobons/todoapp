import {useContext, useState} from 'react'
import axios from 'axios'

import { searchURL, paramsData } from 'config/apiData'
import { TodosContext } from 'context/todoStore'

const useFetch = () => {

  const dispatch = useContext(TodosContext)
  const [results, setResults] = useState([])
  
  const fetchData = async searchTerm => {
    try {
      dispatch({type:'IMAGE_LOADING'})
      const {data} = await axios.get(searchURL, {
        params: {
          ...paramsData,
          query: searchTerm
        }
      })
      setResults(data.results)
      if (results.length === 0) dispatch({type:'ERROR_LOADING', error: 'no images found'})

      dispatch({type:'IMAGE_LOADED',loadedImages: results})
    }
    catch (e) {
      dispatch({type:'ERROR_LOADING',error: e})
    }
  }

  return fetchData
}

export default useFetch
