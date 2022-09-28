import React from 'react'
import { useQuery } from '@apollo/client';
import queries from '../gql/queries';
import { PortableText } from '@portabletext/react';
import { useNavigate } from 'react-router-dom';

export default function CategorySelection() {
  const { data, loading, error } = useQuery(queries.GET_CATEGORIES);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className='category-container'>
      <h2 className='section-title'>Browse the Art</h2>
      <section className='categories'>
        {
          data.allCategory.map(category => {
            return <div className='category-card' key={category._id}>
            <img src={category.picture.asset.url} alt=''/>
            <div className='category-info'>
              <h2>{category.title}</h2>
              <PortableText value={category.descriptionRaw}/>
            </div>
            <button onClick={() => navigate(`/category/${category._id}`)}>Shop</button>
          </div>
          })
        }
      </section>
    </div>
  )
}
