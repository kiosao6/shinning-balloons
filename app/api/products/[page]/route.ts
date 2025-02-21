import { NextResponse } from 'next/server';
import { getPaginatedProducts } from '@/actions';

export const revalidate = 1800;

type Params = Promise<{page: string}>

export async function GET(request: Request, segmentData: { params: Params}) {
  const params = await segmentData.params
  
  const page = Number(params.page) || 1;  
  const take = Number(new URL(request.url).searchParams.get('take')) || 12;

  try {
    const data = await getPaginatedProducts({ page, take });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
