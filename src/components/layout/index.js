import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const Layout = ({children})=>{
    const navigate = useNavigate();
    const location = useLocation();
  console.log(location.pathname);

  const links = [{
      title: '대시보드', to:'/dashboard', options:{
        replace: false,
        state: {},
        preventScrollReset: true,
        relative: "route"
      }
    }, {
      title: '회원관리', to:'/customer', options:{}
    }, {
      title: '메뉴관리', to:'/menu', options:{}
    }, {
      title: '주문관리', to:'/order', options:{}
    }, {
      title: '제품관리', to:'/product', options:{}
    }
  ]
  return <>
  <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <button className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" onClick={()=>{
        navigate('/');
    }}>
        BOB
    </button>
    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search"
      aria-label="Search" />
    <div className="navbar-nav">
      <div className="nav-item text-nowrap">
        <a className="nav-link px-3" href="#">Sign out</a>
      </div>
    </div>
  </header>
  <div className="container-fluid">
    <div className="row">
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3 sidebar-sticky">
          <ul className="nav flex-column">
            {
              links.map((m,idx)=><li className="nav-item" key={idx}>
                <a className={`nav-link ${location.pathname === m.to ? 'active' : ''}`} aria-current="page" href="#" onClick={()=>{
                      navigate(m.to);
                  }}>
                  {m.title}
                </a>
              </li>)
            }
          </ul>
        </div>
      </nav>

      {children}
    </div>
  </div>

</>
}


export default Layout