"use server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export default async function Checkout() {
  const preference = await new Preference(client).create({
    body: {
      items: [
        {
          id: "donacion",
          title: "Donación",
          quantity: 1,
          unit_price: Number(100),
        },
      ],
    },
  });

  redirect(preference.sandbox_init_point!);
}
