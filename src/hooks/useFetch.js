import {useContext} from 'react'
import axios from 'axios'

import { searchURL, paramsData } from 'config/apiData'
import {GlobalDispatchContext} from "context/todoStore"

const useFetch = () => {

  const dispatch = useContext(GlobalDispatchContext)
  
  const fetchData = async searchTerm => {
    let results
    try {
      dispatch({type:'IMAGE_LOADING'})
      const {data} = await axios.get(searchURL, {
        params: {
          ...paramsData,
          query: searchTerm
        }
      })
      results = data.results
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
