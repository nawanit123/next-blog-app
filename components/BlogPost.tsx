import Link from 'next/link'
import React from 'react'

interface User {
    id: number;
    name: string;
}

interface Post {
    id: number;
    title: string;
    userId: number;

}
interface PostComponentProps {
    post: Post,
    users: User[]
}

const BlogPost:React.FC<PostComponentProps> = ({post, users} ) => {
    const foundUser = users.find(user => post.userId == user.id) || null
    return (
        <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
                {post.title} - { foundUser && foundUser.name }
            </Link>
        </li>
    )
}

export default BlogPost