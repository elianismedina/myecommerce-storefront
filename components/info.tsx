"use client";

import { ShoppingCart } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import Link from "next/link";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Tamaño:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Descripción:</h3>
          <div>{data?.description}</div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-4 text-lg"
        >
          Añadir al carrito
          <ShoppingCart size={20} />
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-x-3">
        <Link href="https://wa.me/573008828214" target="_blank">
          <Button className="flex items-center gap-x-4 text-md bg-white text-black border border-gray-900">
            Asesoría personalizada
            <BsWhatsapp size={20} color="green" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
