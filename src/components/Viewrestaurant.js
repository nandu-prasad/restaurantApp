import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';

function Viewrestaurant() {
    
    const params = useParams()
    console.log(params.id);
    const [allRestaurants,setRestaurants]=useState([])  //to  hold the data from json format, use empty []
    // function to call API to get all restaurant items from restaurant.json
    const getRestaurants=async()=>{
        await fetch('/restaurants.json')


        .then((data)=>{
          data.json()
          .then((result)=>{
            setRestaurants(result.restaurants); //to convert array of objects to array - restaurants(json list name)
            // console.log(result);
          })  
        })
    }
    // console.log(allRestaurants);
    useEffect(()=>{
        getRestaurants()
    },[])
    console.log(allRestaurants);
    const viewrest=allRestaurants.find(item=>item.id==params.id)
    console.log(viewrest);
  return (
    <>
    {
        viewrest?
        (
          <Row>
             <Col>
             <Image src={viewrest.photograph}fluid/>
             </Col>
             <Col>
             <p> ID: {viewrest.id}</p>
             <h3>Name: {viewrest.name}</h3>
             <h3>Neighborhood: {viewrest.neighborhood}</h3>
             <h5>Address: {viewrest.address}</h5>
             <h5>Cuisine Type: {viewrest.cuisine_type}</h5>
             <Restoperation operate={viewrest.operating_hours}/>
             <br/>
             <br/>
             <Restreview reviews={viewrest.reviews}/>
             </Col>
          </Row>
        ):'null'
    }
    </>
  )
}

export default Viewrestaurant