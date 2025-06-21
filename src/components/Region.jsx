import React from 'react'
const items = [
  { id: 1, name: 'North America', img: 'src/images/icon.png' ,text:'shopname.ae'},
  { id: 2, name: 'Europe', img: 'src/images/icon.png',text:'shopname.ae' },
  { id: 3, name: 'Asia', img: 'src/images/icon.png',text:'shopname.ae' },
  { id: 4, name: 'Africa', img: 'src/images/icon.png',text:'shopname.ae' },
  { id: 5, name: 'Australia', img: 'src/images/icon.png',text:'shopname.ae' },
  { id: 6, name: 'South America', img: 'src/images/icon.png',text:'shopname.ae' },
  { id: 7, name: 'Antarctica', img: 'src/images/icon.png',text:'shopname.ae' },
  { id: 8, name: 'Middle East', img: 'src/images/icon.png',text:'shopname.ae' },
  { id: 9, name: 'Central America', img: 'src/images/icon.png',text:'shopname.ae' },
  { id: 10, name: 'Caribbean', img: 'src/images/icon.png',text:'shopname.ae' },
];

const Region = () => {
  return (
    <div className='w-full max-w-[1100px] mx-auto rounded-lg mt-2 p-3'>
      <p className='font-semibold text-xl'>Supplier by Region</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 p-2'>
        {
          items.map(item => (
            <div key={item.id + item.name} className='flex p-3 gap-2 items-center bg-white rounded-md shadow'>
              <img src={item.img} alt={item.name} className='w-[28px] h-[20px] object-cover mt-2' />
              <div>
                <h3 className='text-[14px]'>{item.name}</h3>
                <p className='text-[10px] text-gray-500'>{item.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Region