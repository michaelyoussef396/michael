import React from 'react'

interface Post {
  title: string;
  excerpt: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
