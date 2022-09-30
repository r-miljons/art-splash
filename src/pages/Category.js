import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryProducts from '../components/CategoryProducts';
import queries from '../gql/queries';
import "./styles/Category.css";

export default function Category() {
  const params = useParams();
  // Learn about using GraphQl variables here
  const { data, loading, error } = useQuery(queries.GET_CATEGORIES);
  const [categoryData, setCategoryData] = useState();

  useEffect(() => {
    data && setCategoryData(data.allCategory.find(category => category._id === params.id));
  }, [data, params.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className='category-container'>
      {
        categoryData && <header className="category-header" style={{backgroundImage: `url(${categoryData.picture.asset.url})`}}>
          <div className="category-text-wrap">
            <h1>{categoryData.title}</h1>
          </div>
        </header>
      }
      <CategoryProducts categoryId={params.id}/>
    </div>
  )
}
