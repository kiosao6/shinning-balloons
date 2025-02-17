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
import { Input } from "@/components/ui/input"
import { useState, useTransition, useActionState } from "react";
import { PasswordIcon } from "./PasswordIcon";
import "react-dom";
import { authenticate } from "@/actions";
import { HiExclamationCircle } from "react-icons/hi2";
import { useFormStatus } from "react-dom";
import { login } from "@/actions/auth/login";
import { AlertIcon } from "../ui/AlertIcon";
import { useSearchParams } from "next/navigation";




export const LoginForm = () => {

  const params = useSearchParams();
  const mustRedirectToCheckout = !!params.get("redirect");

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
    }
  })

  const onSubmit = async(values: z.infer<typeof LoginSchema>) => {
    const res = await login(values.email, values.password, mustRedirectToCheckout)
    if(res.error) {
      setErrorMessage(res.error);
    }
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
                    className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                    ${form.formState.errors.email && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
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
                      className={`border border-zinc-300 pl-4 rounded-[0.5rem] hover:border-zinc-400 transition-all
                      ${form.formState.errors.password && 'bg-red-danger-bg/40 border-red-danger !outline-red-danger hover:border-red-danger'}
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

        {errorMessage && (
          <>
            <div className="flex justify-start items-center gap-2 mt-2">
              <AlertIcon />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          </>
        )}
        <LoginButton />
      </form>
    </Form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="bg-moon-500 text-base h-12 rounded-[0.5rem] w-full text-white hover:bg-moon-600 mt-8"
      size="lg"
      type="submit"
    >
      Login
    </Button>
  );
}