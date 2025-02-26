import { getUserOrders } from "@/actions/getUserOrders";
import { auth } from "@/auth.config";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { currencyFormat, formatDate } from "@/lib/utils";
import { redirect } from "next/navigation";
import { ViewOrder } from "../checkout/ViewOrder";
import Link from "next/link";

export async function OrdersTable() {
  const session = await auth();
  if (!session) redirect('/login');
  const userId = session!.user.id;
  const orders = await getUserOrders(userId);

  return (
    !orders?.length ? (
      <div>No hay ordenes</div>
    ) : (
      <div>
        <Table>
          <TableHeader>
            <TableRow className="uppercase hover:bg-neutral-100 bg-neutral-100">
              <TableHead>Order</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Shipping</TableHead>
              <TableHead>{null}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderId} className="rounded-lg">
                <TableCell>
                  <Link href={`/orders/${order.orderId}`}>
                    <div className="flex items-center gap-3">
                      <img
                        className="rounded-lg border"
                        src={`/colors/${order.slug}.png`}
                        width={40}
                        height={40}
                        alt={order.orderId}
                      />
                      <div className="min-w-72">
                        <div className="font-medium text-base-heading">{order.itemName}</div>
                        <span className="mt-0.5 text-xs text-neutral-500">{`#${order.orderId.slice(0, 8)}`}</span>
                      </div>
                    </div>
                  </Link>
                </TableCell>

                <TableCell className="min-w-52">
                  <Link href={`/orders/${order.orderId}`}>
                    {`${formatDate(order.createdAt)}`}
                  </Link>
                </TableCell>

                <TableCell className="min-w-24">
                  <Link href={`/orders/${order.orderId}`}>
                    {currencyFormat(order.total)}
                  </Link>
                </TableCell>

                <TableCell className="min-w-20">
                  <Link href={`/orders/${order.orderId}`}>
                    {order.items}
                  </Link>
                </TableCell>

                <TableCell className="min-w-20">
                  <Link href={`/orders/${order.orderId}`}>
                    {order.deliveryMethod == 'free' ? 'Free Shipping' : 'Express Shipping'}
                  </Link>
                </TableCell>

                <TableCell>
                  <ViewOrder orderId={order.orderId} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  );
}
