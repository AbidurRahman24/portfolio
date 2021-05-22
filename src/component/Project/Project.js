import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Project = () => {
    
    const [news, setNews] = useState([]);
    useEffect( () =>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4aad6d1b666c49e5b19ec854bdd20c47'
        fetch(url)
        .then(res =>res.json())
        .then(data => setNews(data.articles))

    },[])
    return (
        <div>
            {
                news.map(news => <News news={news}></News>)
            }
        </div>
    );
};

export default Project;