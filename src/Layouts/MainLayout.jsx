import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const MainLayout = ({children}) => {
    const count=useSelector(state=>state.counter)
    return (<>
              
              <header>
            
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">

                    <div className="container-fluid">
                    
                        <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <i className="fas fa-bars"></i>
                        </button>

                       <div>
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>  <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            height="15"
                            alt="MDB Logo"
                            loading="lazy"
                            /></li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">الرئيسية</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/aboutus">حولنا</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">اتصل بنا</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/convert" className="nav-link" href="#"> تحويل العملة </Link>
                            </li>
                        </ul>
                       </div>
                       
                        <div className="d-flex align-items-center">
                        
                        <a className="link-secondary me-3" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>

                        
                        <div className="dropdown">
                            <a
                            data-mdb-dropdown-init
                            className="link-secondary me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-expanded="false"
                            >
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">{count}</span>
                            </a>
                            <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                            </ul>
                        </div>
                        
                        <div className="dropdown">
                            <a
                            data-mdb-dropdown-init
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            aria-expanded="false"
                            >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-circle"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                            </a>
                            <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"
                            >
                            <li>
                                <a className="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    
                    </div>
                    
                    </nav>

              </header>



              <main>
                {children}
              </main>


              <footer>

              </footer>
         
    </> );
}
 
export default MainLayout;