'use client'



import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from '@/validators/Schemas';
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
import { useState } from "react";
import { PasswordIcon } from "@/components/index";
import { registerUser } from "@/actions";
import { login } from "@/actions/auth/login";
import { LoaderCircle } from "lucide-react";




export const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
    }
  })

  const onSubmit = async(values: z.infer<typeof RegisterSchema>) => {
    setIsLoading(true);
    const { ok, message } = await registerUser(values.name, values.email, values.password);
    if(!ok)
    {
      form.setError("email", {
        type: 'manual',
        message
      })
      setIsLoading(false);
      return
    }
    await login(values.email.toLowerCase(), values.password);
    window.location.replace('/')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">

        {/* Name Input */}
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className={`border border-zinc-300 pl-4 rounded-xl hover:border-zinc-400 transition-all
                    ${form.formState.errors.name  && 'bg-red-100 border-red-500 !outline-red-500 hover:border-red-500'}
                    `}
                    {...field}
                  />

                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Input */}
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
                    ${(form.formState.errors.email) && 'bg-red-100 border-red-500 !outline-red-500 hover:border-red-500'}
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
                      placeholder="Create a password"
                      className={`border border-zinc-300 pl-4 rounded-xl hover:border-zinc-400 transition-all
                      ${form.formState.errors.password && 'bg-red-100 border-red-500 !outline-red-500 hover:border-red-500'}
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

        <Button
          disabled={isLoading}
          className="bg-moon-500 text-base h-12 rounded-xl w-full text-white hover:bg-moon-600 mt-8 flex items-center gap-2"
          size="lg"
          type="submit"
        >
          Create account
          { isLoading && (<LoaderCircle size={18} className="animate-spin" />)}
        </Button>
      </form>
    </Form>
  )
}