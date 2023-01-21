import React from 'react'

const NewsItem = (props) => {
    return (
        <div>
            <div className="card">
                <div className='d-flex position-absolute end-0'><span className="badge rounded-pill bg-danger">{props.source}</span></div>
                <img src={props.imageUrl ? props.imageUrl : "https://techcrunch.com/wp-content/uploads/2019/04/GettyImages-962714224-2.jpg?w=600"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.decription}</p>
                    <p className="card-text"><small classame="text-muted">by {props.author ? props.author : "Unknown"} on {new Date(props.date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
