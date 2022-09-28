import React from 'react'
import background from "../assets/news.jpg"

export default function Newsletter() {
  return (
    <div className='newsletter-container'>
      <h2 className='section-title'>Get the Latest News</h2>
      <section className='newsletter' style={{backgroundImage: `url(${background})`}}>
        <div className='news-wrap'>
            <p>Never miss the lastest art.</p>
            <p>Join our newsletter and recieve updates on new releases.</p>       
            <form>
              <div className="form-section">
                <input type="text" id='name' name="name" placeholder='Your Name'></input>
              </div>
              <div className="form-section">
                <input type="email" id='email' name="email" placeholder='Your Email'></input>
              </div>
              <button>Join</button>
            </form>
        </div>
      </section>
    </div>
  )
}
