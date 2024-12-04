import { useEffect, useState } from 'react';
import MainLayout from '../Layouts/MainLayout'
import {Link} from 'react-router-dom'

const List = () => {

    const [products,setproducts]=useState([]);

    useEffect(()=>{
      
        fetch('https://fakestoreapi.com/products') // send request 
        .then((response)=>response.json())  // step1 convert data to json 
        .then((data)=>{

           setproducts(data)
        })

      
    },[])

    console.table(products)
    return (
    <>
    <MainLayout>
     <div className="container">
        <div className="row">
            <div className="col">
                {
                    products.map((e)=>

                       <div className="card mt-2">
                          <div className="card-body">
                            <div className="row">
                                <div className="col">
                                   <span className='badge bg-danger'>
                                    {e.price}
                                   </span>
                                    <div className="row mt-5" >
                                        <div className="col">
                                            <Link to={`/details?id=${e.id}`}>
                                               <button className='btn btn-secondary'>معاينة التفاصيل</button>
                                            </Link>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9 mt-3 text-start">
                                     <h5 className='alert alert-light text-dark'>{e.title}</h5>
                                    
                                     <p>{e.description}</p>
                                     
                                </div>
                                <div className="col-sm-1 d-flex justify-content-end ">
                                  <img src={e.image} alt="" width={80} height={80} />
                                </div>
                            </div>
                          </div>
                       </div>

                    )
                }
            </div>
        </div>
     </div>
    </MainLayout>
    </>)
    ;
}
 
export default List;