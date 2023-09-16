import React, { Component } from 'react'
import Cards from './Cards'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class NewsSection extends Component {

    //Setting Default Props
    // static defaultProps = {
    //     pageSize: 4,
    //     Country: 'us',
    //     Category: 'general'
    // }
    // //Setting Default PropTypes
    // static PropTypes = {
    //     pageSize: PropTypes.number,
    //     Country: PropTypes.string,
    //     Category: PropTypes.string
    // }

    //Using State Variables In Class
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            articles: [],
            pageNo: 1,
            total: 0
        }
    }
    async getNewsFromApi() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apikey=a0545d7adb5d4f73b341bf5736a3c314&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, total: parsedData.totalResults, loading: false });



    }
    async componentDidMount() {

        this.getNewsFromApi();

    }
    // HandlePreClick = async () => {
    //     this.setState({ pageNo: this.state.pageNo - 1 });
    //     this.getNewsFromApi();
    // }
    // HandleNextClick = async () => {
    //     this.setState({ pageNo: this.state.pageNo + 1 });
    //     this.getNewsFromApi();

    // }
    fetchMoreData = async () => {
        this.setState({ pageNo: this.state.pageNo + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apikey=a0545d7adb5d4f73b341bf5736a3c314&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), total: parsedData.totalResults, loading: false });
    }

    render() {

        return (

            <>
                <h2 className='text-center ' style={{ marginTop: "70px" }}>DawnNews Top Headlines About - {this.props.Topic}</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.total !== this.state.articles.length}
                    loader={<Spinner />}>
                    <div className="container-fluid row mt-3" >
                        {this.state.articles.map((elements) => {
                            return <div className="col-3" key={elements.url}>
                                <Cards title={elements.title === null ? 'Title Not Available' : elements.title}
                                    description={elements.description === null ? 'Description Not Available' : elements.description}
                                    ImgUrl={elements.urlToImage === null ? 'https://images.wsj.net/im-593285/social' : elements.urlToImage}
                                    NewsUrl={elements.url}
                                    Author={!elements.author ? "Unknow" : elements.author}
                                    Date={elements.publishedAt} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
                {/* <div className="conatiner d-flex justify-content-around my-5">
                    <button disabled={this.state.pageNo <= 1} className="btn btn-lg btn-warning" onClick={this.HandlePreClick}>
                        &lt; Previous
                    </button>
                    <button disabled={this.state.pageNo > Math.ceil(this.state.total / this.props.pageSize)} className="btn btn-lg btn-warning" onClick={this.HandleNextClick}>
                        Next &gt;
                    </button>
                </div> */}
            </>
        )
    }
}
