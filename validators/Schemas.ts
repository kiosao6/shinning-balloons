'use client'


import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string({required_error: 'Email field cannot be empty'}).email({
    message: 'Email field cannot be empty',
  }),
  password: z.string({required_error: 'Password field cannot be empty'}).min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

export const RegisterSchema = z.object({
  name: z.string({ required_error: 'Name field cannot be empty'}).min(2, {
    message: 'Name must be at least 2 characters long'
  }),
  email: z.string({required_error: 'Email field cannot be empty'}).email({
    message: 'Email field cannot be empty',
  }),
  password: z.string({required_error: 'Password field cannot be empty'}).min(6, {
    message: 'Password must be at least 6 characters long',
  }),
})

export const ShippingSchema = z.object({
  name: z.string({ required_error: 'Name field cannot be empty'}).min(2, {
    message: 'Name must be at least 2 characters long'
  }),
  address: z.string({ required_error: 'Address field cannot be empty'}).min(5, {
    message: 'Address must be at least 5 characters long'
  }),
  company: z.string().min(5, {
    message: 'Company must be at least 5 characters long'
  }).optional(),
  postalCode: z.string({ required_error: 'Postal code field cannot be empty'}).min(4, {
    message: 'Postal code must be at least 4 characters long'
  }),
  city: z.string({ required_error: 'City field cannot be empty'}).min(4, {
    message: 'City must be at least 4 characters long'
  }),
  state: z.string({ required_error: 'State field cannot be empty'}).min(4, {
    message: 'State must be at least 4 characters long'
  }),
  phone: z.string({required_error: 'Phone field cannot be empty'}).min(4,{
    message: 'Phone field must be at least 4 characters long',
  }),

})

