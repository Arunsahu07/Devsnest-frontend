import React from 'react'
import { Post } from './Post'

export const Posts = () => {
    return (
        <div className="post-container">
         {   [...Array(15)].map((_,idx)=>
            <Post index={idx} />
            )}
        </div>
    )
}
