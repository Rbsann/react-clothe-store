import React from 'react'

import './collection-item.styles.scss'



const CollectionItem = ({id,name,price,imageUrl}) =>(
    <div className='collection-item'>
        <div className='image' style={{backgroundImg:`url${imageUrl}`}}>
        </div>
        <div className='name'>
            <span className='name'>{name}</span>
            <span className='price'>{name}</span>
        </div>
    
    </div>
)

export default CollectionItem