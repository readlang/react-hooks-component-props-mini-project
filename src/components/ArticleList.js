import React from "react";
import Article from "./Article.js"

function ArticleList({posts}) {
    const mapper = posts.map(x => {
        return ( 
            <Article key={x.id} title={x.title} date={x.date} preview={x.preview}/> 
        )
    })
    
    return(
        <main>
            {mapper}
        </main>
    )
}

export default ArticleList;