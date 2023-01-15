import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        let { title, description, ImgUrl, NewsUrl } = this.props;
        return (
            <div className="card  mx-auto my-3" >
                <img src={ImgUrl} className="card-img-top" alt="..." />
                <div className="card-body"  >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <footer class="blockquote-footer">By <strong><cite title="Source Title">{this.props.Author} | {new Date(this.props.Date).toDateString()}</cite></strong></footer>
                    <a href={NewsUrl} target="_blank" className="btn btn-sm btn-outline-warning">Read More</a>
                </div>
            </div>
        )
    }
}

