import { useEffect,useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Link, useLocation } from "react-router-dom";
const Checkout = () => {

    const location=useLocation();
    const id=location.state.id;
    const [products,setproducts]=useState('');
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [address,setaddress]=useState('')
    useEffect(()=>{
      
        fetch(`https://fakestoreapi.com/products/${id}`) // send request 
        .then((response)=>response.json())  // step1 convert data to json 
        .then((data)=>{
           setproducts(data)
        })
        
      
    })
     
    return (
    
    <>
    
   <MainLayout>
   
   <section className="h-100 h-custom" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">

            <div className="row">

              <div className="col-lg-7">
                <h5 className="mb-3"><a href="#!" className="text-body badge bg-secondary "><i
                      className="fas fa-long-arrow-alt-left me-2 text-white"></i>  مواصلة الشراء</a></h5>
                <hr />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div>
                  <div>
                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                        className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                  </div>
                </div>

             
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={products.image}
                            className="img-fluid rounded-3" alt="Shopping item" width={100} height={100}  />
                        </div>
                        <div className="ms-3">
                          <small className="p-2">{products.title}</small>
                          <p className="small mb-0">{products.description}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div >
                          <h5 className="fw-normal mb-0">1</h5>
                        </div>
                        <div >
                          <h5 className="mb-0">{products.price}</h5>
                        </div>
                        <a href="#!"><i className="fas fa-trash-alt"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

            

              </div>
              <div className="col-lg-5">

                 <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                    <label className="form-label"> الاسم</label>
                                    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)}></input>
                            </div>
                           
                            <div className="col">
                                    <label className="form-label">البريد الإليكتروني </label>
                                    <input type="text" className="form-control" onChange={(e)=>setemail(e.target.value)}></input>
                            </div>

                            {email}
                        </div>
                        <div className="row">
                            <div className="col">
                                    <label className="form-label"> رقم الهاتف</label>
                                    <input type="text" className="form-control" onChange={(e)=>setphone(e.target.value)}></input>
                            </div>

                            <div className="col">
                                    <label className="form-label">العنوان  </label>
                                    <input type="text" className="form-control" onChange={(e)=>setaddress(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="card mt-3">
                    <div className="card-body  bg-secondary text-white">
                        <div className="row">
                            <h5>بيانات الدفع</h5>
                            <div className="col">
                                    <label className="form-label"> الاسم حسب البطاقة</label>
                                    <input type="text" className="form-control"></input>
                            </div>

                          
                        </div>
                        <div className="row">
                            <div className="col">
                                    <label className="form-label"> رقم البطاقة </label>
                                    <input type="text" className="form-control"></input>
                            </div>

                           
                        </div>
                        <div className="row">
                            <div className="col">
                                    <label className="form-label"> CVV  </label>
                                    <input type="text" className="form-control"></input>
                            </div>
                            <div className="col">
                                    <label className="form-label"> التاريخ  </label>
                                    <input type="text" className="form-control"></input>
                            </div>

                           
                        </div>


                        
                    </div>
                 </div>
                 <div className="row">
                            <div className="col text-center">
                            <Link to={"/invoice"} state={{name:name,email:email,phone:phone,address:address,title:products.title,price:products.price}}>
                               <button className="btn btn-secondary">شراء</button>
                            </Link>
                              
                            </div>
                        </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
   </MainLayout>
    
    </>
    );
}
 
export default Checkout;