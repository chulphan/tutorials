import React, { Component } from 'react';
import BlogList from './components/blog/BlogList';
import LikeList from './components/like/LikeList';
import data from './data/data.json';

class App extends Component {

  likeId = 0

  state = {
    bloglist: [],
    likelist: [],
    displayed: false
  }

  componentDidMount() {

  }

  handleDisplayBlog = () => {
    const { displayed } = this.state;


    if (displayed) {
      this.setState({
        bloglist: [],
        displayed: !displayed
      });
    } else {
      this.setState({
        bloglist: [...data.body],
        displayed: !displayed
      });
    }
  }

  addLikeList = (data) => {
    const { likelist } = this.state;
  
    this.setState({
      likelist: likelist.concat({ id: this.likeId++, title: data })
    });
  }

  removeLikeList = (title) => {
    const { likelist } = this.state;
    this.setState({
      likelist: likelist.filter((like) => like.title !== title)
    });
  }

  render() {
    const { bloglist, likelist } = this.state;
    console.log('blog list', bloglist);
    return (
      <div>
        <h1>MINI BLOG!!!</h1>
        <button onClick={this.handleDisplayBlog}>글 불러오기</button>
        <BlogList list={bloglist}
          addLikeList={this.addLikeList}
        />
        <LikeList
          likes={likelist}
          removeLikeList={this.removeLikeList}
        />
      </div>
    );
  }
}

export default App;
