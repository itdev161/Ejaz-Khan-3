import React, {useState} from 'react';
import axios from 'axios';
import {userHistory}from 'react-router-dom';
import './styles.css';
import { title } from 'process';
import { createPostfix, tokenToString } from 'typescript';
import { create } from 'domain';


const CreatPost = ({onPostCreated}) => {
let history = useHistory();
const [postData, setPostData] = useState({
title:'',
body: ''
});
cibst{title,body} = postData;

const onChange = e =>{
const {name,value} =e.target;
setPostData({
...postData,
[name]: value

});

};
const create= ansyc() =>{
if(!title || !body){
console.log('Title and body are required');
}else {
    const newPost={
title: title,
body: body
};
try{
const config = {
headers: {
'Content-Type': 'application/json',
'x-auth-token': token
}
};
const body =JSON.stringify(newPost);
const res = await axios.post(
'http://localhost:5000/api/posts',
body,
congif
);
onPostCreated(res.date);
history.pushState('/');
}catch(error){
console.error('Error creating post: ${error.response.date}');
}
}
};
 
return(
<div className="form-container">
<h2>Creat New Post</h2>
<input
name="title"
type="text"
placeholder="Title"
value={title}
onChange={e => onChange(e)}

/>

<button 
name="body"
cols="30"
rows="10"
value={body}
onChange={e => create()}>Submit</button>
</div>

);
};

export default createPost;