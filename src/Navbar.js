import {Link} from 'react-router-dom'

const Navbar = () => {


      
    return ( 
       
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" style={{color: "white", fontWeight:"bold"}} className="navbar-brand" >My Simple Blog</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">


        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-danger my-2 my-sm-0"> <Link to="/" style={{textDecoration:"none" , color: "white"}}>Home </Link> </button>
          <button className="btn btn-danger ml-2 my-2 my-sm-1"> <Link to="/Create" style={{textDecoration:"none" , color: "white"}}>Create New </Link></button>
        </form>
      </div>
    </nav>

        
     );
}
 
export default Navbar;
