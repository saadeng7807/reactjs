import { useEffect, useState } from 'react';
import MainLayout from '../Layouts/MainLayout'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Details = () => {

    const [products,setproducts]=useState([]);


    const location=useLocation();  // link URL 
    const queryparams=new URLSearchParams(location.search); // get Parameters 
    const id=queryparams.get('id');
    const dispatch=useDispatch();

    useEffect(()=>{
      
        fetch(`https://fakestoreapi.com/products/${id}`) // send request 
        .then((response)=>response.json())  // step1 convert data to json 
        .then((data)=>{
           setproducts(data)
        })
        
        // Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "Your work has been saved",
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
    })

    console.table(products)
    return (
    <>
    <MainLayout>
     <div className="container">
        <div className="row">
            <div className="col">
               

                       <div className="card mt-2">
                          <div className="card-body">
                            <div className="row">
                                <div className="col">
                                   <span className='badge bg-danger'>
                                      {products.price}
                                   </span>
                                    <div className="row mt-5" >
                                        <div className="col">
                                            <ul>
                                                <li>
                                                   <button className='btn btn-success ' onClick={()=>dispatch({type:'INCREMENT'})}>اضافة الى السلة</button>
                                                </li>
                                                <li>
                                                   <Link to={"/checkout"} state={{id:products.id}}>
                                                     <button className='btn btn-secondary'> مواصلة الشراء </button>
                                                   </Link>
                                                
                                                 </li>
                                            </ul>
                                           
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 mt-3 text-start">
                                     <h5 className='alert alert-light text-dark'>{products.title}</h5>
                                    
                                     <p>{products.description}</p>
                                     
                                </div>
                                <div className="col-sm-1 d-flex justify-content-end ">
                                  <img src={products.image} alt="" width={80} height={80} />
                                </div>
                            </div>
                          </div>
                       </div>

                   
            </div>
        </div>
     </div>
    </MainLayout>
    </>)
    ;
}
 
export default Details;