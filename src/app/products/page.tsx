import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <>
      <Input placeholder="Search products..." />
      <Button variant="primary" size="sm">
        Search
      </Button>
      <Button variant="secondary" size="sm">
        Search
      </Button>
    </>
  );
}

export default ProductsPage;
