import { Col, Form, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import { NavScrollExample } from '../../components/nav'
import AdvancedExample from '../../components/pagination'
import ResponsiveBreakpointsExample from '../../components/table'

const Customer = ()=>{
  return <Layout>
  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div
      className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Customer</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
        </div>
        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar" className="align-text-bottom"></span>
          This week
        </button>
      </div>
    </div>

    <h2>Section title</h2>
    <NavScrollExample />
    <ResponsiveBreakpointsExample/>
    <AdvancedExample/>
  </main>
</Layout>

}

export default Customer