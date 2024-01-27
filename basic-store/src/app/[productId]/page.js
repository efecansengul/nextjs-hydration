import AddBasketButton from "@/components/add-basket-button/AddBasketButton";
import { store } from "../store";
import { fetchProduct } from "../store/products-store";
export default async function ProductDetailPage({ params }) {
  const id = params.productId;
  await store.dispatch(fetchProduct(id));
    
  const { product } = store.getState().products;
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
}
