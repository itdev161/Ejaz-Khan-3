import React from 'react';




const post = props => {

const {post} = props;

return (

<div>
<h1>{post.title}</h1>
<p>{post.body}</p>
</div>
)


}

export default Post;