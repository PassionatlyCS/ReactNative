import { useEffect, useState } from "react";
import Yelp from "../API/Yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchApi = async searchTerm => {
      console.log('Hi there!');
      try {
        const response = await Yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'gorgia'
          }
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessage('Something went wrong' + err);
      }
    };
  
    // Call searchApi when component
    // is first rendered.  BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
      searchApi('pasta');
    }, []);
  
    return [searchApi, results, errorMessage];
  };