'use client'
import { Button } from "@/components/index"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { ShippingSchema } from "@/validators/Schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "../ui/input"
import {  setCookies } from "@/actions"


interface Props {
  addressCookie?: string
}

export const ShippingForm = ({addressCookie}: Props) => {

  const addressCookies = addressCookie;
  const cookies = JSON.parse(addressCookies || '{}');

  const router = useRouter();
  const pathName = usePathname();
  

  const form = useForm<z.infer<typeof ShippingSchema>>({
    resolver: zodResolver(ShippingSchema),
    defaultValues: {
      name: cookies.name || null,
      address: cookies.address || null,
      city: cookies.city || null,
      postalCode: cookies.postalCode || null,
      state: cookies.state || null,
      phone: cookies.phone || null,
    }
  });

  const onSubmit = () => {
    const data = JSON.stringify(form.getValues());
    setCookies("shippingAddress", data);
    router.push(pathName + "?step=payment")
    
  }


  return (
    <Form {...form}>
      <form id="shipping-form" onSubmit={form.handleSubmit(onSubmit)} className="mt-2">

        <div className="space-y-6 md:space-y-0 md:gap-6 md:grid md:grid-cols-2">
          {/* Name Input */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                    ${form.formState.errors.name && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Input */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Company Name (Optional)"
                    className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                    ${form.formState.errors.company && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address Input */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your address"
                    className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                    ${form.formState.errors.address && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City Input */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your city"
                    className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                    ${form.formState.errors.city && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Postal Code Input */}
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your postal code"
                    className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                    ${form.formState.errors.postalCode && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* State Input */}
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State / Province </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your state or province"
                    className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                    ${form.formState.errors.state && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country Input */}
          <FormField
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    disabled
                    placeholder="United States"
                    className="border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all"
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Input */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone"
                    className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                    ${form.formState.errors.phone && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="bg-moon-500 text-base h-12 rounded-[0.5rem] text-white hover:bg-moon-600 mt-8"
          size="lg"
          type="submit"
        >
          Continue to payment
        </Button>
      </form>
    </Form>
  )
}