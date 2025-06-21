import React from 'react'

const items = [
  { id: 1, name: 'Item 1', price: '$10', img: 'src/images/ser1.png', text: 'Source from industry hubs  '},
  { id: 2, name: 'Item 2', price: '$20', img: 'src/images/ser1.png', text: 'Source from industry hubs  '},
  { id: 3, name: 'Item 3', price: '$30', img: 'src/images/ser1.png', text: 'Source from industry hubs  '}, 
  { id: 4, name: 'Item 4', price: '$40', img: 'src/images/ser1.png', text: 'Source from industry hubs  '},
];

const Services = () => {
  return (
    <div className='w-full max-w-[1100px] mx-auto rounded-lg mt-2 p-3'>
      <p className='bold text-xl'>Our Extra Services</p>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 p-2'>
        {items.map(item => (
          <div key={item.id} className='relative border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <img src={item.img} alt={item.name} className='w-full h-32 object-cover mb-2 rounded-md' />
            <div className='absolute right-4 bottom-12 rounded-full p-1 bg-blue-200'>
              <img src="src/images/search.png" alt="" />
            </div>
            <div className='p-2'>
              <h3 className='text-lg font-semibold'>{item.price}</h3>
              <p className='text-gray-600'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services