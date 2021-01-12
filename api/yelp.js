import axios from 'axios'; 

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer NIgI0USj_8ORGuXVqqlPj9SNLmzZwPbX1nogXHLrt1VALzBUf7urt7Ltstwb2vqmhcHqyNtR2ofvzkozjK0mbOZ_Xp7jMFy0H71qHNLk5kpMmRI94kmzHMbR-q75X3Yx'
    }
});
