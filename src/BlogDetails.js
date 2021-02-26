import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, loading, err} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(()=> history.push('/'))
    }
    return ( 
        <div className="blog-details">
            {loading && <div class="progress"> <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="120" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div> </div>}
             {err && <div class="alert alert-primary" role="alert"> {err} </div>}
             { blog && (
                <div className="card">
          <div className="card-header">
          { blog.title }
          </div>
          <div className="card-body">
            <h5 className="card-title">Writen by { blog.author }</h5>
            <p className="card-text">{ blog.body }</p>
            <a href="#" onClick={handleDelete} className="btn btn-primary">Delete</a>
          </div>
        </div>  )}

        </div>
        
     );
}
 
export default BlogDetails
