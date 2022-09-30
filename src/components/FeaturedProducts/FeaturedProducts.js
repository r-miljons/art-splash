import React from 'react'
import { useQuery } from '@apollo/client'
import queries from '../../gql/queries';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProducts.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cartSlice';

export default function FeaturedProducts() {
  const { data, loading, error } = useQuery(queries.GET_FEATURED);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  return (
    <div className='featured-container'>
      <h2 className='section-title'>Featured Art</h2>
      <section className='featured-products'>
        <Slider {...settings}>
          {
            data.allFeatured[0].product.map(item => {
              return <div className='featured-product' key={item._id}>
                <div className='product-wrap'>
                  <img src={item.picture.asset.url} onClick={() => navigate(`/product/${item._id}`)}/>
                  <div className='featured-info'>
                    <div className='featured-text'>
                      <h2>{item.name}</h2>
                      <p>{item.price} €</p>
                    </div>
                    <div className='featured-buttons'>
                      <button onClick={() => navigate(`/product/${item._id}`)}>SHOP</button>
                      <button onClick={() => dispatch(addItem(item))}>ADD TO CART</button>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </Slider>
      </section>
    </div>
  )
}
