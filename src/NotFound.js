import {Link} from 'react-router-dom'
const NotFound = () => {
    return ( <div>
        <div className="d-flex justify-content-center">
            <br/>
            <br/>
            <br/>
            <h1>404 Not found</h1> 
            
        </div>
        <div className="d-flex justify-content-center"><button className="btn btn-primary"> <Link style={{textDecoration:"none" , color: "white"}} to="/"> Back to Home </Link> </button> </div>
        </div>
     );
}
 
export default NotFound;