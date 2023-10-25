import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category:"general"
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articals: [], // Initialize articles as an empty array
      loading: false,
      page: 1,
      totalResults: 0, // Initialize totalResults to 0
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ddc4c947926d4458a7e111547f87ae89&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articals: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults,
    }); // Set articles, loading state, and totalResults
  }

  handlePrevClick = async () => {
    if (!(this.state.page > 1)) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=ddc4c947926d4458a7e111547f87ae89&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articals: parseData.articles,
        loading: false,
      });
    }
  };

  handleNextClick = async () => {
    if (this.state.page * this.props.pageSize < this.state.totalResults) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=ddc4c947926d4458a7e111547f87ae89&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });

      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articals: parseData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container-fluid bg-dark-subtle">
        <div className="container py-4">
          <h2 className="fw-bold">
            <span className="border-bottom border-black border-2">
              NewsMonkey -Top Headline
            </span>
          </h2>
          {this.state.loading && <Spinner />}
          <div className="row my-2">
            {!this.state.loading &&
              this.state.articals.map((element) => {
                return (
                  <div className="col-lg-3 col-md-4 col-12" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 70)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsurl={element.url}
                    />
                  </div>
                );
              })}
          </div>

          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-primary"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page * this.props.pageSize >= this.state.totalResults
              }
              className="btn btn-primary"
              onClick={this.handleNextClick}
            >
              Next&rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
