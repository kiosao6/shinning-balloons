import { BreadCrumb, OrdersTable } from "@/components/index";


export default async function OrderPage() {

  const links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Shop',
      href: '/shop'
    },
    {
      name: 'Orders',
      href: '/orders'
    },

  ]


  return (
    <main className="px-8 mx-auto max-w-6xl text-base-heading">
      <section className="mt-10 mb-16 max-w-6xl mx-auto">
        <BreadCrumb links={links} />
        <div className="my-12">
          <h1 className="text-4xl max-w-3xl font-bold mb-4 tracking-tight lg:text-5xl">My orders</h1>
        </div>
        <OrdersTable />
      </section>

    </main>
  );
}