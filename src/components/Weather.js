import React from 'react'

export default function Weather(props) {
    return (
        <div className='col-start-1 col-end-7'>
            {
                props.country && <span className='text-black inline-block bg-yellow-200 p-2 mt-5 mb-3 rounded-md text-base font-normal'><strong>Country : </strong>{props.country}</span>
            }
            {
                props.city && <span className='text-black inline-block bg-yellow-200 p-2 mt-5 mb-3 rounded-md float-right text-base font-normal'><strong>City : </strong>{props.city}</span>
            }
            {
                props.country && <hr></hr>
            }
            {
                props.tempreature && <p className='text-base font-normal mb-3 mt-3'><strong>Tempreature : </strong>{props.tempreature}</p>
            }
            {
                props.humidity && <p className='text-base font-normal mb-3 mt-3'><strong>Humidity : </strong>{props.humidity}</p>
            }
            {
                props.description && <p className='text-base font-normal mb-3 mt-3'><strong>Description : </strong>{props.description}</p>
            }
            {
                props.error && <p className='bg-red-300 w-full p-3 mt-8 mb-8 rounded-md text-black text-base font-normal text-center'>Error : {props.error}</p>
            }
        </div>
    )
}
