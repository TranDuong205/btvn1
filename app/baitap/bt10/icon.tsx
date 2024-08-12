import { TemplateContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import React from 'react'
import { FaSave , FaCoffee , FaEye } from 'react-icons/fa'

export default function icon() {
  return (
    <div>
      <h1>Danh sach cac icon</h1>
      <p><FaSave/> <FaCoffee /> <FaEye/></p>
    </div>
  )
}

