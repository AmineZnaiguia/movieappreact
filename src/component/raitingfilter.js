import React from 'react'
import Raitng from './raiting'
import { Row, Col } from "antd";
export default function raitingfilter({raiting,handleRate}) {
    return (
        <div className="raiting" >
            <Col span={8}></Col>
            <Col span={8}>
            <h3>Raiting</h3>
            <Raitng raiting= {raiting} handleRate={(newRate)=>{
                handleRate(newRate)
            }}/></Col>
             <Col span={8}></Col>
        </div>
    )
}
