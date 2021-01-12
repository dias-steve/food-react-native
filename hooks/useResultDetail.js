import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default (id) => {
    const [results, setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const getResult = async (id) => {
        console.log(`id>>>${id}`);
        try{
            
            const response = await yelp.get(`/${id}`);
            console.log(response);
            setResults(response.data);
        }catch(err){
            console.log(`err:${err}`);
            setErrorMessage('Somthing went wrong');
        };
    };
    useEffect(() =>{getResult(id);},[]);
    return [results,errorMessage,getResult];
};