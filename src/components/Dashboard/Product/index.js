import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar';
import {Row, Col, Card, Icon} from 'react-materialize';
import Button from '../../Button/index';
import {firestore} from '../../../config/firebase';
 


const Index = ({displayName}) => {

const [userProduct, setUserProduct] = useState([]);

const uid = localStorage.getItem('uid'); 

useEffect (() => {
  const getProduct = async () => {
      const product = await firestore.collection('products').get();
      const listOfProducts = [];
      if (product) {
          product.forEach((product) => {
           
            if (uid === product.data().uid) {
                const userProduct = {
                    id: product.id,
                    productName: product.data().productName,
                    productValue: product.data().productValue
                }
                listOfProducts.push(userProduct);
            }
             
          })
          setUserProduct(listOfProducts);
      }
  }
  getProduct();
},[userProduct,uid]);
 
     const handleDelete = async (id) => {
        try{
            const getProduct = await firestore.collection('products').get();
            getProduct.forEach((product) => {
              if (product.id === id) {
                  firestore.collection('products').doc(id).delete();
                  console.log('item is deleted');
              }
            })
        }
        catch(error){
                  console.log('error');
        }
     }
 return (
     <div>
         <Navbar displayName={displayName}/>
         <Row>
         {userProduct.map((product) => {
             return(
                     <div key={product.id}>
                         <Col m={4} s={12}>
                             <Card
                             className="blue-grey darken-1"
                             closeIcon={<Icon>close</Icon>}
                             revealIcon={<Icon>more_vert</Icon>}
                             textClassName="white-text"
                             title={product.productName}>
                     {product.productValue}

                     <Button text="Delete" handleClick={() => {handleDelete(product.id)}}/>
                          </Card>
                     </Col>
                 </div>  
             )
         })}
         </Row>
     </div>
 )
}


export default Index;