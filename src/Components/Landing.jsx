import MainLayout from '../Layouts/MainLayout'
import {Link} from 'react-router-dom'

const Landing = () => {
   
  
   
   
    return (<>
        <MainLayout>
          
           <div className="container">
              <div className="row mt-5">
                <div className="col">
                    <h1 className='text-end '>  <span className='badge bg-success'>أهلا بكم في موقعنا للتسويق الإليكتروني</span>   </h1>
                    <small className='d-flex justify-content-end mt-2 '>يحتوي موقعنا على العديد من المنتجات المصنفة حسب الفئات مثل الإليكترونيات و المفروشات وأدوات المنزل </small>
                </div>
              </div>

              <div className="row mt-5 d-flex justify-content-end">
                 <div className="col ">
                    <div className="row ">
                        <div className="col ">
                           <Link to="/list">
                           <div className="card" id="card1">
                              <div className="card-body">
                                <h5>منتجات</h5>
                                <i className="bi bi-phone" id="icon"></i>
                              </div>
                           </div>
                           </Link>
                          
                        </div>
                        <div className="col">
                        <div className="card" id="card2">
                              <div className="card-body">
                                <h5>المفروشات</h5>
                                <i className="bi bi-kanban-fill" id="icon"></i>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                        <div className="card" id="card3">
                              <div className="card-body">
                                <h5>الأدوات المنزلية</h5>
                                <i class="bi bi-house-door" id="icon"></i>
                              </div>
                           </div>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </MainLayout>
    </>);
}
 
export default Landing;