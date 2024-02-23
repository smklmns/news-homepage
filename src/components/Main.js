import React from 'react'
import imageWeb from '../news-homepage-main/assets/images/image-web-3-desktop.jpg'

const Main = () => {
  return (
    <main>
      <img src={imageWeb} alt="imageWeb" />
        <h1>The Bright Future of Web 3.0?</h1>
      <div className='buttonBox'>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
          But is it really fulfilling its promise?
        </p>
        <button>Read more</button>
      </div>
    </main>
  )
}

export default Main