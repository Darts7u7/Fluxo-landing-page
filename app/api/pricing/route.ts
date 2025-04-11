import { NextResponse } from 'next/server'
import { sanityFetch } from '@/lib/sanity'
import type { PricingPlan } from '@/lib/sanity'

// Query para obtener todos los planes de precios
const pricingQuery = `*[_type == "pricingPlan"] | order(monthlyPrice asc) {
  _id,
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  currency,
  features,
  highlighted,
  buttonText,
  discount,
  setupFee
}`

export async function GET() {
  try {
    const plans = await sanityFetch<PricingPlan[]>({
      query: pricingQuery,
      tags: ['pricingPlan'],
    })

    return NextResponse.json(plans)
  } catch (error) {
    console.error('Error al obtener planes de precios:', error)
    return NextResponse.json(
      { error: 'Error al obtener los planes de precios' },
      { status: 500 }
    )
  }
} 