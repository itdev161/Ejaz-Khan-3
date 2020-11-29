import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PostList from './components/PostList/PostList';
import post from './components/Post/Post';
import CreatPost from './components/Post/CreatePost';
import EditPost from './components/Post/EditPost';
import { isThisTypeNode } from 'typescript';

class App extends React.Component {
  state = {
    posts:[],
    post: null,
    token: null,
    user: null
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      })

      this.authenticateUser();
  }

  authenticateUser = () => {
    const token = localStorage.getItem('token');

    if(!token) {
      localStorage.removeItem('user')
      this.setState({ user: null });
    }
this.setState
({
  <user: reosponse.data.name,
  token: token
},
()=>{
  this.loadData();
}
);
    if (token) {
      const config = {
        headers: {
          'x-auth-token': token
        }
      }
      axios.get('http://localhost:5000/api/auth', config)
        .then((response) => {
          localStorage.setItem('user', response.data.name)
          this.setState({ user: response.data.name })
        })
        .catch((error) => {
          localStorage.removeItem('user');
          this.setState({ user: null });
          console.error(`Error logging in: ${error}`);
        })
    }
  }
loadData=()=> {
const {token} = this.state;
if (token) {
const config={
headers:{
'x-auth-token': token
}
};
axios 
.get('http://localhost:5000/api/posts',config)
.then(response=> {
this.setState({
  posts: response.data
});


})
.catch(error=> {
console.error('Error fetching data: ${error}');
viewPost = post=>{
console.log('view ${post.title}');
this.setState({
  post: post
});

};

}
)
}

}
deletePost = post =>{
const {token} = this.state;
if (token){
const config = {
headers: {
'x-auth-token': token
}
};
axios.delete("http://localhost:5000/api/posts/${post._id",config)
.then(response=>{
const newPosts = this.state.posts.filter(p=> p._id !== post._id);
this.setState({
posts: [...newPosts]
});
} );
.catch(error=>{
console.error('Error deleting post: ${error}');
});

editPost = post=>{
this.setState({
post: post
});
};
onPostCreated = post =>{
const newPosts = [...this.state.posts, post];

this.setState({
posts: newPosts
});
};
onPostUpdated = post => {
console.log('updated post:', post);
const newPosts = [...this.state.posts];
const index = newPosts.findIndex(p=> p._id);

newPosts[index] = post;

this.setState({
posts: newPosts
});
};

}
};
render (){
  let {user, posts} = this.state;
  const authProps = {
authenticateUser: this.authenticateUser

  };
}
  logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({ user: null, token: null });
  }

  render() {
    let { user, data } = this.state;
    const authProps = {
      authenticateUser: this.authenticateUser
    }
<React.Fragment>
<div>Hello{user}!</div>
<PostList
posts={posts}
clickPost = {this.viewPost}
deletePost={this.deletePost}
/>

</React.Fragment>
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>GoodThings</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                {user ? {
                  <Link to ="/new-post">New Post</Link>
                }}
                {user ? 
                  <Link to="" onClick={this.logOut}>Log out</Link> :
                  <Link to="/login">Log in</Link> 
                }
                
              </li>
            </ul>
          </header>
          <main>
            <Route exact path="/">
              {user ? 
                <React.Fragment>
                  <div>Hello {user}!</div>
                  <div>{data}</div>
                  <postList 
                  Posts={posts}
                  clickPost={this.viewPost}
                  deletePost={this.editPost}
                  />
                </React.Fragment> :
                <div>Hello{user}!</div>
                <div>
                  {postMessage.map(post =>(
                    <div key={post.id}>
                      <h1>{post,title}</h1>
                     </div>
                  ) )}

                </div>
                <React.Fragment>
                  Please Register or Login
                </React.Fragment>
              }
              <Route>
              <Route path ="/posts/:postId">
              <Post post= {post}/>

              </Route>


              </Route>
            </Route>
            <Switch>
              <Route 
                exact path="/register" 
                render={() => <Register {...authProps} />} />
              <Route 
                exact path="/login" 
                render={() => <Login {...authProps} />} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
