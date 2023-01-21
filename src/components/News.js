import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const  News = (props) =>{

    const[articles , setArticles] = useState([]);
    const[loading , setLoading] = useState(true);
    const[page , setPage] = useState(1);
    const[totalResults , setTotalResults] = useState(0);
    

    const CapitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const  updateNews = async() => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&PageSize=${props.pages}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let ParsedData = await data.json();
        props.setProgress(70);
        setArticles(ParsedData.articles);
        setTotalResults(ParsedData.totalResults);
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(()=>{
        document.title = `${CapitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews()
     }, [])   
    

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&PageSize=${props.pages}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        setArticles(articles.concat(ParsedData.articles))
        setTotalResults(ParsedData.totalResults)
        setPage(page + 1)
    };
        return (
            <>
                <h1 className='text-center' style={{ marginTop: "90px" }}>NewsMonkey - Top {CapitalizeFirstLetter(props.category)} headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container my-3">
                        <div className="row ">
                            {articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} decription={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
}

News.defaultProps = {
    country: "in",
    pages: 8,
    category: 'general'
}

News.PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News
