import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import queries from "../gql/queries";
import { PortableText } from "@portabletext/react";
import "./styles/Product.css";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Newsletter from "../components/Newsletter";

export default function Product() {
	const params = useParams();
	const { data, loading, error } = useQuery(queries.GET_PRODUCT, {
		variables: {
			id: params.id,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return (
		<div className="product-page-container">
			{
				<div className="product-page-product-wrap">
					<img src={data.Product.picture.asset.url} alt={data.Product.name} />
          <div className="product-page-info">
            <h1>{data.Product.name}</h1>
            <PortableText value={data.Product.descriptionRaw} />
            <p className="product-page-info-price">{data.Product.price} €</p>
            <div className="product-page-buttons">
              <button>BUY</button>
              <button>ADD TO CART</button>
            </div>
          </div>
				</div>
			}
			<FeaturedProducts />
			<Newsletter />
		</div>
	);
}
