import React from 'react'

const OrderDetails = ({ params, searchParams }) => {
  console.log('searchParams')
  const { id } = params
  return (
    <div>
      {id}
    </div>
  )
}

export default OrderDetails
