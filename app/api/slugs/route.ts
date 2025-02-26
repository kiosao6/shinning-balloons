import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const revalidate = 1800;


export async function GET(request: Request) {
  try {
      const response = await prisma.product.findMany({
        where: {
          categoryId: '215ad250-6e5e-4cce-be88-2d0d535d523a'
        },
        select: {slug: true},
      })
      const slugs = response.map(product => product.slug)
      return NextResponse.json(slugs);
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
