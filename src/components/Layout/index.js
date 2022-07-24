import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">  
        <span className="tags top-tags">3D artist</span> {/*3D artist displayed on landing page at top rigth corner */}

        <Outlet />

        <span className='tags bottom-tags'> {/* Displayed at the left bottom corner of the landing/home page */}
          Blender
          <br/>
          <span className='bottom-tag-html'>&lt;Substance Painter&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
