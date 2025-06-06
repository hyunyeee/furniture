import CategoryButton from "@/app/components/product/CategoryButton";
import { Category } from "@/types/products";
import { getCategories } from "@/lib/api/products";
import ProductList from "@/app/components/product/ProductList";

export default async function Products() {
  const categories: Category[] = await getCategories();
  const initialCategoryId = categories[0]?.id;

  return (
    <div className="my-[100px] flex flex-col justify-between gap-10">
      <h1 className="text-center text-3xl font-semibold">Folding Desks</h1>
      <div className="flex justify-center gap-4">
        {categories.map(({ id, name }) => (
          <CategoryButton key={id} id={id} name={name} />
        ))}
      </div>

      <ProductList initialCategoryId={initialCategoryId} />
    </div>
  );
}
