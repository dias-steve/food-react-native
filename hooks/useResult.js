import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default (initialSearch) => {
    const [results, setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchAPI = async searchTerm => {
        console.log('hi!');
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term : searchTerm,
                    location:'san jose'
                }
            });
            console.log(response);
            setResults(response.data.businesses);
        }catch(err){
            console.log(err);
            setErrorMessage('Somthing went wrong');
        };
    };
    useEffect(()=>{searchAPI(initialSearch)}, []);
    return [results,errorMessage,searchAPI];
};