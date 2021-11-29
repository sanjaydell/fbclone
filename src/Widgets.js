import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsanjay.anuchuri%2Fposts%2F1686927088121889&show_text=true&width=350" 
            width="500" 
            height="100%" 
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title='facebook'>
            </iframe>
        </div>
    )
}

export default Widgets
