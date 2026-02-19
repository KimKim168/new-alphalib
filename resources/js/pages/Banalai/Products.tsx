import React from 'react'
import BanalaiLayout from './Layout'
import ProductsSection from '@/components/Banalai/ProductsSection';
import CTASection from '@/components/Banalai/CTASection';

const Products = () => {
  return (
    <BanalaiLayout>
        <ProductsSection/>
        <CTASection/>
    </BanalaiLayout>
  )
}

export default Products;
