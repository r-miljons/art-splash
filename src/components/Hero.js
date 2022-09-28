import React from 'react'
import main from '../assets/23.jpg'
import secondary1 from '../assets/18.jpg'
import secondary2 from '../assets/22.jpg'

export default function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero'>
            <div className='hero-primary'>
                <div className='dark-overlay'></div>
                <img src={main} alt='main'/>
                <div className='hero-info'>
                    <div className='hero-text'>
                        <h1>Artist spotlight</h1>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                        <button>Shop art</button>
                    </div>
                </div>
            </div>
            <div className='hero-secondary1'>
                <img src={secondary1} alt='secondary'/>
            </div>
            <div className='hero-secondary2'>
                <img src={secondary2} alt='secondary'/>
            </div>
        </div>
    </div>
  )
}
