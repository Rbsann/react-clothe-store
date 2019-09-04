import React from 'react';
import SHOP_DATA  from './shop.data'
import '../../components/preview/preview.component'
import PreviewCollection from '../../components/preview/preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            collections:SHOP_DATA
        };
    }
    
    render(){
        const {collections} = this.state
        return (<div className='shop-page'>
        {
            collections.map(({id,...otherCollectionsProp})=>(
                <PreviewCollection key={id} {...otherCollectionsProp} />
            ))
        }
        </div>)
    }
}

export default ShopPage