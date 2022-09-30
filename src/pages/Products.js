import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import queries from '../gql/queries';
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

export default function Products() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(queries.GET_PRODUCTS);
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    data && setSearchResults(data.allProduct.filter(product => product.name.toLowerCase().includes(params.query.toLowerCase())));
  }, [data, params.query])

  if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>; 

  return (
    <>
      <p style={{textAlign: "center", marginBottom: "2rem"}}>{searchResults?.length > 0 ? "Results" : "No results"} for "{params.query}"</p>
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
                    <button onClick={() => dispatch(addItem(product))}>ADD TO CART</button>
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
