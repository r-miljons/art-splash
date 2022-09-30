import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import queries from "../gql/queries";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

function CategoryProducts({ categoryId }) {
	const { data, loading, error } = useQuery(queries.GET_PRODUCTS);
	const [productsData, setProductsData] = useState();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		data &&
			setProductsData(
				data.allProduct.filter(
					(product) => product.category[0]._id === categoryId
				)
			);
	}, [data]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return (
		<div className="products-container">
			<div className="category-products">
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
										<button onClick={() => dispatch(addItem(product))}>ADD TO CART</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default React.memo(CategoryProducts);
