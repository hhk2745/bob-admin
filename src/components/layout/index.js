import { Sidebar } from '../nav';

const Layout = ({children})=>{
  return <div class="d-flex" id="wrapper">

  <Sidebar />
  {/* <!-- Page content wrapper--> */}
  <div id="page-content-wrapper">
      {/* <!-- Top navigation--> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div class="container-fluid">
          </div>
      </nav>
      {/* <!-- Page content--> */}
      <div class="container-fluid">
          {children}
      </div>
  </div>
</div>
}


export default Layout