import { getCookies, getProductById } from "@/actions";
import { getOrder } from "@/actions/getOrder";
import { BreadCrumb, LoginInformation, ShippingAddress, PaymentInformation, ReviewInformation, OrderReview, StepIndicator, CheckIcon } from "@/components/index";
import { notFound } from "next/navigation";



interface Props {
  params: {
    id: string;
  }
}



export default async function OrderPage({ params }: Props) {
  
  
  const links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Order',
      href: `/order/${params.id}`
    },
  
  ]
  
  const { address, products, name, email, subtotal, tax: taxes, total, shippingMethod, number } = await getOrder(params.id)
  const addressData = address[0];
  const totals = {
    subtotal,
    shipping: shippingMethod === "free" ? 0 : 15,
    taxes,
    total
  };

  const productsToSend = products.map(product => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      slug: product.slug,
      price: product.price,
      discountedPrice: product.discountedPrice,
      tags: product.tags,
      material: product.material,
      quantity: product.quantity,
      number: null
    }
  })

  return (
    <main className="px-8 mx-auto max-w-6xl text-base-heading">
      <section className="mt-10 mb-16 max-w-6xl mx-auto">
        <BreadCrumb links={links} />
        <div className="my-12 space-y-1">
          <h1 className="text-4xl max-w-3xl font-bold mb-4 tracking-tight lg:text-5xl">Thank you! Your order was successfully placed.</h1>
          {/* <p>Your order was successfully placed.</p> */}
          <p>We have sent the order confirmation details to <span className="font-semibold">{email}.</span></p>
          <p>Order ID: <span className="font-semibold">{params.id}</span></p>
        </div>

        <div className="justify-between lg:flex">
          <div className="space-y-6 w-full [&>*]:lg:pr-6">

            <div className="w-full">
              {/* <LoginInformation /> */}
              <div className="border border-zinc-300 p-6 rounded-xl">
                <div className="flex gap-8">
                  <StepIndicator step={1} />
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center mb-1">
                      <span className="uppercase text-base text-base-heading/70">Buyer information</span>
                      <CheckIcon />
                    </div>
                    <div className="md:flex items-center font-semibold gap-x-4 max-w-xs [&>*]:text-sm">
                      <p>{name}</p>
                      <p>{email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              {/* <ShippingAddress addressCookie={addressCookie?.value} /> */}
              <div className="border border-zinc-300 p-6 rounded-xl">
                <div className="md:flex justify-between w-full">
                  <div className="flex lg:gap-8 w-full">
                    <StepIndicator step={2} />
                    <div className="flex flex-col gap-1">

                      <div className="flex gap-3 items-center mb-1">
                        <span className="uppercase text-base font-medium">Shipping Address</span>
                        <CheckIcon />

                      </div>

                      <div className="flex items-center font-semibold gap-x-6 max-w-xs">
                      <p className="text-sm">{addressData.address}, {addressData.city}, {addressData.postalCode}, {addressData.state}.</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="border border-zinc-300 p-6 rounded-xl">
                <div className="md:flex ju stify-between" >
                  <div className="md:flex gap-8 w-full">
                    <StepIndicator step={3} />
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex gap-3 items-center mb-1">
                        <span className="uppercase text-base text-[#858585] font-medium">Payment information</span>
                        <CheckIcon />
                      </div>
                      <div className="flex items-center font-semibold gap-x-6">
                        <p className="text-sm">Visa credit card ending in 9789.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <OrderReview totals={totals} products={products} />

        </div>


      </section>

    </main>
  );
}