'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from '@/validators/Schemas';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { LuCheck } from "react-icons/lu";
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { PasswordIcon } from "./PasswordIcon";
import "react-dom";
import { login } from "@/actions/auth/login";
import { useSearchParams } from "next/navigation";
import { LoaderCircle } from "lucide-react";




export const LoginForm = () => {

  const params = useSearchParams();
  const mustRedirectToCheckout = !!params.get("redirect");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
    }
  })

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsLoading(true)
    const { ok, message } = await login(values.email, values.password, mustRedirectToCheckout)
    if (!ok) {

      form.setError("root", {
        type: 'manual',
        message
      })
      setIsLoading(false)
      return;
    }
    setSuccessMessage(message);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">

        {/* Email Input */}
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className={`border border-zinc-300 pl-4 rounded-xl hover:border-zinc-400 transition-all
                    ${(form.formState.errors.email || form.formState.errors.root) && 'bg-red-100 border-red-500 !outline-red-500 hover:border-red-500'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Input  */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="">

                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="!relative flex items-center justify-center">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className={`border border-zinc-300 pl-4 rounded-xl hover:border-zinc-400 transition-all
                      ${(form.formState.errors.password || form.formState.errors.root) && 'bg-red-100 border-red-500 !outline-red-500 hover:border-red-500'}
                      `}
                      {...field}
                    />
                    <PasswordIcon callback={togglePasswordVisibility} showPassword={showPassword} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {form.formState.errors.root && (
          <div className="text-red-500 text-sm mt-4">
            {form.formState.errors.root.message}
          </div>
        )}
        {successMessage && (
          <p className="flex items-center gap-2 text-emerald-600 p-2 rounded w-fit bg-emerald-100 text-sm mt-6 text-left">{successMessage}
          <LoaderCircle size={17} className="animate-spin" />
          </p>
        )}
        <Button
          disabled={isLoading}
          className="bg-moon-500 text-base h-12 rounded-xl w-full text-white hover:bg-moon-600 mt-8 flex items-center gap-2"
          size="lg"
          type="submit"
        >
          Login
          {isLoading && (<LoaderCircle size={17} className="animate-spin" />)}
        </Button>
      </form>
    </Form>
  )
}
