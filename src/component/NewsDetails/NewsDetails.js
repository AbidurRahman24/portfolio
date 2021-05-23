import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const NewsDetails = () => {
   const {id} = useParams()
   const [news, setNews] = useState({})
   useEffect(()=>{
       const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4aad6d1b666c49e5b19ec854bdd20c47`
       fetch(url)
       .then(res => res.json())
       .then(data =>{
           setNews(data)
           console.log(data)
       })

   },[])
    return (
        <div>
            <h1>This is News Details Page: {news}</h1>
        </div>
    );
};

export default NewsDetails;