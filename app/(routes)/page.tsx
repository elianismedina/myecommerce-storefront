import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import billboard from "@/components/ui/billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("5dccabf1-4718-49f9-accb-583f4ead39e9");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-4">
        <ProductList title="Productos destacados" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
