import {Link} from 'react-router-dom'
const BlogList = ({blogs, deletBlog}) => {
    
    
    
    return ( 

        <div style={{display: "flex", flexWrap: "wrap", paddingTop: "50px"}} className="blogsContainer">
        
        {blogs.map((blog)=> (

        
        <div key={blog.id} class="card border-danger mb-3" style={{maxWidth:"20rem", margin:"20px", width: "18rem"}}>
        <Link style={{textDecoration:"none" , color: "#e74c3c"}} to={`/blogdetails/${blog.id}`}>
        <div class="card-header"> {blog.title} </div>
        </Link>
        <div class="card-body">
        
        <h4 class="card-title">{blog.author}</h4>
        <p class="card-text"> {blog.title}</p> 
        
        </div>
        </div>

        ))}
    </div>
     );
}
 
export default BlogList;