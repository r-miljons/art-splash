import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import queries from "../gql/queries";
import { PortableText } from "@portabletext/react";
import "./styles/Product.css";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

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
					<Gallery>
						<Item
						original={data.Product.picture.asset.url}
						thumbnail={data.Product.picture.asset.url}
						width={data.Product.picture.asset.metadata.dimensions.width}
						height={data.Product.picture.asset.metadata.dimensions.height}
						>
						{({ ref, open }) => (
							<img ref={ref} onClick={open} src={data.Product.picture.asset.url} />
						)}
						</Item>
					</Gallery>
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
