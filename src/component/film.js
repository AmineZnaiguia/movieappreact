import React, { Component } from 'react'
import Addbutton from './addfilm'
import Raiting from './raiting'
import { Card } from 'antd';
import { Row, Col } from 'antd';
const { Meta } = Card;


export default class film extends Component {
    render() {
        return (
            <div className="pad-content disp-film">
            {this.props.movielist.map((el ,i) =>(
                <div className="film-block"  key={i}>
           <Card  hoverable style={{ width: 280 }} cover={<img alt="example" src={el.img} />}>        
           <Meta title={el.titlef} />
           <Raiting raiting={el.raiting} />
           </Card>
           </div>
            )
            )
            }
        
            <Addbutton handleadd={this.props.handleadd} />
     
        </div>
        )
    }
}
