import React from 'react'
import { PortableText } from '@portabletext/react';
import queries from '../gql/queries';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const { data, loading, error } = useQuery(queries.GET_ARTISTS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className='about-container'>
      <h2 className='section-title'>Meet the Artists</h2>
      <section className='about'>
        {
          data.allArtist.map((artist, index) => {
            return <div className={(index + 1) % 2 === 0 ? 'artist reversed' : 'artist'} key={index}>
              <div className='artist-info'>
                <h2>{artist.name}</h2>
                <PortableText value={artist.descriptionRaw}/>
                <button onClick={() => navigate(`/artist/${artist._id}`)}>See art</button>
              </div>
              <img src={artist.picture.asset.url} alt='artist' onClick={() => navigate(`/artist/${artist._id}`)}/>
            </div>
          })
        }
      </section>
    </div>
  )
}
