import React, {useEffect, useState} from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { restaurantListAction } from '../Actions/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    // to hold value
    const [allRestaurants,setRestaurants]=useState([])  //to  hold the data from json format, use empty []
    // function to call API to get all restaurant items from restaurant.json
    // const getRestaurants=async()=>{
        // await fetch('/restaurants.json')
        // .then((data)=>{
          // data.json()
          // .then((result)=>{
            // setRestaurants(result.restaurants); //to convert array of objects to array - restaurants(json list name)
            // console.log(result);
          // })  
        // })
    // }
    // console.log(allRestaurants);
    const dispatch = useDispatch();
    const result = useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList} = result
    useEffect(()=>{
        // getRestaurants()
        dispatch(restaurantListAction());
    },[])
  return (
    <div>
      <Row>
      {
      restaurantList.map(item=>(
        // <h1>{item.name}</h1>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Restaurantcards restaurant={item}/>
        </Col>
      ))
      }
      </Row>
      </div>
  )
}

export default Restaurantlist