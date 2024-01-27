import AddBasketButton from "@/components/add-basket-button/AddBasketButton";
import Link from "next/link";

import { store } from "./store";
import { fetchProducts } from "./store/products-store";

export default async function Home() {
  await store.dispatch(fetchProducts());
  const {products} = store.getState().products;
  return (
    <>
      <h4>Home Page</h4>
      <div className="products-wrapper">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h4 className="product-title">{product.title}</h4>
          <p className="">{product.price}</p>
          <AddBasketButton product={product}/>
          <Link href={`/${product.id}`}>See detail</Link>
          </div>
        ))}
      </div>
    </>
  );
}
