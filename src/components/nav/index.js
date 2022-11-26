export const NavSupport = ()=>{
  return <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#!">Action</a>
                <a class="dropdown-item" href="#!">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#!">Something else here</a>
            </div>
        </li>
    </ul>
  </div>
}


export const Sidebar = ()=>{
  
  return <div class="border-end bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading border-bottom bg-light">
      <span>밥 관리자</span>
      {/* <button class="btn" id="left" onClick={()=>{}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
          </svg>
      </button>
      <button class="btn" id="right" onClick={()=>{}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
          </svg>
      </button> */}
      
      </div>
    <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">회원관리</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">방관리</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">업체관리</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">메뉴관리</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">주문관리</a>
    </div>
  </div>
}