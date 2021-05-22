import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const NewsDetails = () => {
   const {id} = useParams()
   const [news, setNews] = useState({})
   console.log(id)
   useEffect(()=>{
       const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${id}`
       fetch(url)
       .then(res => res.json())
       .then(data =>{
           setNews(data)
       })

   },[])
    return (
        <div>
            <h1>This is News Details Page: {news}</h1>
        </div>
    );
};

export default NewsDetails;