import React from 'react'
import BanalaiLayout from './Layout'
import PricingPlans from '@/components/Banalai/PricingPlans'
import FeatureComparison from '@/components/Banalai/FeatureComparison'

const Pricing = () => {
  return (
    <BanalaiLayout>
        <PricingPlans/>
        <FeatureComparison/>
    </BanalaiLayout>
  )
}

export default Pricing
