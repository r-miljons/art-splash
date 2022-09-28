import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import queries from '../gql/queries';

export default function Products() {
  const params = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(queries.GET_PRODUCTS);
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    data && setSearchResults(data.allProduct.filter(product => product.name.toLowerCase().includes(params.query)));
  }, [data, params.query])

  if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

  console.log(searchResults);

  return (
    <>
      <p>Results for "{params.query}"</p>
      <div className='category-products'>
        {searchResults?.map((product) => {
          return (
            <div className="category-product-wrap" key={product.slug.current}>
              <div className="category-product">
                <img
                  src={product.picture.asset.url}
                  onClick={() =>
                    navigate(
                      `/product/${product._id}`
                    )
                  }
                />
                <div className="product-info">
                  <div className="product-text">
                    <h2>{product.name}</h2>
                    <p>{product.price} €</p>
                  </div>
                  <div className="product-buttons">
                    <button
                      onClick={() =>
                        navigate(
                          `/product/${product._id}`
                        )
                      }
                    >
                      SHOP
                    </button>
                    <button>ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>  
    </>
  )
}
