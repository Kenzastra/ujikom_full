import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <section className="hero is-info is-fullheight">
          
          <div className="hero-body is-align-items-start is-flex-direction-column">
          <p className='is-size-4 has-text-weight-semibold'>Welcome, admin</p>
            <div className="is-flex is-flex-direction-row mt-4">
              <a href='/barang' className="box mb-0 is-flex is-justify-content-center is-align-items-center" style={{width:"250px",height:"200px"}}>
                <p className='p-3'>Master Data</p>
              </a>
            
              <a href="/kasir" className='box mb-0 is-flex is-justify-content-center is-align-items-center ml-5' style={{width:"250px",height:"200px"}}>
                <p className='p-3'>Kasir</p>
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Dashboard