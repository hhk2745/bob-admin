import { useNavigate } from 'react-router-dom'

const Layout = ({children})=>{
    const navigate = useNavigate();
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={()=>{
                    navigate('/dashboard');
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>{
        navigate('/order');
    }}>
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>{
        navigate('/product');
    }}>
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>{
        navigate('/customer');
    }}>
                Customer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={()=>{
        navigate('/menu');
    }}>
                Menu
              </a>
            </li>
          </ul>

          {/* <h6
            className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
            <span>Saved reports</span>
            <a className="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle" className="align-text-bottom"></span>
            </a>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text" className="align-text-bottom"></span>
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text" className="align-text-bottom"></span>
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text" className="align-text-bottom"></span>
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file-text" className="align-text-bottom"></span>
                Year-end sale
              </a>
            </li>
          </ul> */}
        </div>
      </nav>

      {children}
    </div>
  </div>

</>
}


export default Layout