import { useQuery } from '@apollo/client';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArtistProducts from '../components/ArtistProducts'
import { PortableText } from '@portabletext/react';
import queries from '../gql/queries';
import "./styles/Artist.css";

export default function Artist() {
 const {id} = useParams();
 const { data, loading, error } = useQuery(queries.GET_ARTIST, {
  variables: {
    id: id
  }
 });

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error</p>;

  return (
    <div className='artist-container'>
      <header className='artist-header' style={{backgroundImage: `url(${data.Artist.background.asset.url})`}}>
        <div className='artist-info artist-page'>
            <h2>{data.Artist.name}</h2>
            <PortableText value={data.Artist.descriptionRaw}/>
        </div>
      </header>
      <h2 className='section-title'>Art by {data.Artist.name}</h2>
      <ArtistProducts artistId={id}/>
    </div>
  )
}
