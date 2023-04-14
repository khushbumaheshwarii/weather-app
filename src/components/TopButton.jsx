import React from 'react'

const TopButton = () => {
    const cities=[
        {
            id:1,
            title:'Delhi'

        },
        {
            id:1,
            title:'Mumbai'

        },
        {
            id:1,
            title:'Lucknow'

        },
        {
            id:1,
            title:'Chandigarh'

        },
        {
            id:1,
            title:'Bangalore'

        }
    ]
  return (
  
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} className='text-lg font-medium text-white'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButton