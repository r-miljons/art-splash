import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import queries from '../gql/queries';

function ArtistProducts({artistId}) {
    const { data, loading, error } = useQuery(queries.GET_PRODUCTS);
	const [productsData, setProductsData] = useState();
	const navigate = useNavigate();

    useEffect(() => {
		data &&
			setProductsData(
				data.allProduct.filter(
					(product) => product.author[0]._id === artistId
				)
			);
	}, [data]);

  if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

  return (
    <div className='category-products'>
      {productsData?.map((product) => {
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
  )
}

export default React.memo(ArtistProducts);
