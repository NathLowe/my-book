import BasicLayout from '@/components/BasicLayout'
import React from 'react'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <BasicLayout page="New Post" >
      {children}
    </BasicLayout>
  )
}
