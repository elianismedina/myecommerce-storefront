interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  return <div>Individual product</div>;
};

export default ProductPage;
