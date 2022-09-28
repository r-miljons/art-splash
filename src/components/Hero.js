import React from 'react'
import main from '../assets/23.jpg'
import secondary1 from '../assets/18.jpg'
import secondary2 from '../assets/22.jpg'
import { useQuery } from '@apollo/client'
import queries from '../gql/queries'
import { PortableText } from "@portabletext/react"
import { useNavigate } from 'react-router-dom'

export default function Hero() {
    const { data, loading, error } = useQuery(queries.GET_SPOTLIGHT);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

  return (
    <div className='hero-container'>
        <div className='hero'>
            <div className='hero-primary'>
                <div className='dark-overlay'></div>
                <img src={data.allSpotlight[0].mainPicture.asset.url} alt='main'/>
                <div className='hero-info'>
                    <div className='hero-text'>
                        <h1>{data.allSpotlight[0].title}</h1>
                        <PortableText value={data.allSpotlight[0].bodyRaw}/>
                        <button onClick={() => window.location.href = `${data.allSpotlight[0].url}`}>{data.allSpotlight[0].button}</button>
                    </div>
                </div>
            </div>
            <div className='hero-secondary1'>
                <img src={data.allSpotlight[0].secondPicture.asset.url} alt='secondary'/>
            </div>
            <div className='hero-secondary2'>
                <img src={data.allSpotlight[0].thirdPicture.asset.url} alt='secondary'/>
            </div>
        </div>
    </div>
  )
}
