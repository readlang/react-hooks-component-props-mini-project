import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    let emojiString = ""

    if (minutes < 30) {
        const count = Math.ceil(minutes / 5)
        for (let i = 0; i < count; i++) {
            emojiString += "☕️"
        }
    } else {
        const count = Math.ceil(minutes / 10)
        for (let i = 0; i < count; i++) {
            emojiString += "🍱"
        }
    }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{emojiString} {minutes} min read</p>
              
        </article>
    )
}

export default Article;