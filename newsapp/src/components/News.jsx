import React, { Component } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import  Spinner  from './Spinner';
import PropTypes from 'prop-types'


class News extends Component {
    
    static defaultProps = {
        country : 'in',
        pageSize : 20,
        category : 'general',
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
    }

    constructor(){
        super()
        this.state={
            articles: [],
            loading: false,
            page : 1
        }
    }
    async componentDidMount(){
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1593ceb634ce43f5a40eac538b5c421a&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=(await axios.get(url)).data;
        this.setState({articles : data.articles, totalResults:data.totalResults, loading: false})
    }

    handlePrevClick= async() =>{
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1593ceb634ce43f5a40eac538b5c421a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=(await axios.get(url)).data;
        this.setState({
            page: this.state.page - 1,
            articles : data.articles,
            loading: false
        })
    }
    handleNextClick= async() =>{
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/20))){ 
                let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1593ceb634ce43f5a40eac538b5c421a&page=${this.state.page + 1}&pageSize=20`;
                this.setState({loading:true})
                let data=(await axios.get(url)).data;
                this.setState({
                    page: this.state.page + 1,
                    articles : data.articles,
                    loading:false
                })
    }
    }
    render() {
        return (
        <>
             <div className='container my-3 mx-mx-md-5 '>
                <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
                
                {this.state.loading && <Spinner/>}

                <div className='row'>
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div key={element.url} className="col-md-3">
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
                })}                    
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </>
        );
    }
}

export default News;