import { getCookies, getProductById } from "@/actions";
import { auth } from "@/auth.config";
import { BreadCrumb, LoginInformation, ShippingAddress, PaymentInformation, ReviewInformation, OrderReview } from "@/components/index";
import { notFound } from "next/navigation";


const links = [
  {
    name: 'Shop',
    href: '/shop'
  },
  {
    name: 'Cart',
    href: '/cart'
  },
  {
    name: 'Checkout',
    href: '/checkout'
  }
]



export default async function CheckoutPage() {


  // Mejorar 
  const session = await auth();
  const { email, name, id } = session!.user


  const addressCookie = await getCookies("shippingAddress");
  const productsCookie = await getCookies("productIds");
  const shippingMethod = await getCookies("shippingMethod");
  const shippingValue = shippingMethod?.value === "express" ? 15 : 0;

  if(!productsCookie) return notFound();

  const products = JSON.parse(productsCookie!.value || '[]');
  const productIds = products.map((p: { id: string }) => p.id);
  // Get the products from the database

  const productsFound = await getProductById(productIds);

  const finalProducts = productsFound.map((product) => {
    return {
      ...product,
      quantity: products.find((p: { id: string }) => p.id === product.id).quantity,
      ...(product.category.name === 'Numbers' && { number: products.find((p: { id: string }) => p.id === product.id).number })
    }
  })

  const productsToSend = finalProducts.map((item) => {
    return {
      id: item.id,
      quantity: products.find((p: { id: string }) => p.id === item.id).quantity,
      ...(item.category.name === 'Numbers' && { number: products.find((p: { id: string }) => p.id === item.id).number })
    }
  })

  const subtotal = finalProducts.reduce((acc, product) => acc + product.quantity * (product.discountedPrice ?? product.price), 0)
  const shipping = shippingValue
  const taxes = (subtotal + shippingValue) * 0.07

  const totals = {
    subtotal: subtotal,
    shipping: shippingValue,
    taxes: taxes,
    total: subtotal + shipping + taxes
  }  


  return (
    <main className="px-8 mx-auto max-w-6xl text-base-heading">
      <section className="mt-10 mb-16 max-w-6xl mx-auto">
        <BreadCrumb links={links} />
        <h1 className="text-4xl mt-12 mb-12 font-bold tracking-tight lg:text-5xl">Checkout</h1>


        <div className="justify-between lg:flex lg:flex-row-reverse">
          <OrderReview totals={totals} products={finalProducts} />
          <div className="space-y-6 w-full [&>*]:lg:pr-6">
            
            <div className="w-full">
              <LoginInformation name={name} email={email} />
            </div>

            <div className="w-full">
              <ShippingAddress addressCookie={addressCookie?.value} />
            </div>

            <div className="w-full">
              <PaymentInformation />
            </div>

            <div className="w-full">
              <ReviewInformation address={addressCookie?.value ?? ''} shipping={shippingMethod?.value} products={productsToSend} />
            </div>

          </div>


        </div>
        

      </section>

    </main>
  );
}