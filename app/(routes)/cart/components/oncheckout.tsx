"use server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";
import axios from "axios";
import useCart from "@/hooks/use-cart";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export default async function OnCheckout() {
  const items = useCart((state) => state.items);
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
    {
      productIds: items.map((item) => item.id),
    }
  );
  window.location = response.data.url;
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const preference = await new Preference(client).create({
    body: {
      items: [
        {
          id: "payment",
          title: "Mi producto",
          quantity: 1,
          unit_price: totalPrice,
        },
      ],
    },
  });
  redirect(preference.sandbox_init_point!);
}
