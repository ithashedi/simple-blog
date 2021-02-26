import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {



   
          // a custom hooks                         here we put in the end point we want to fetch data from
       const {data: blogs, loading, err} = useFetch('http://localhost:8000/blogs')

    return (
    <div className="Home">
     
            {loading && <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="120" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {err && <div class="alert alert-primary" role="alert"> {err} </div>}  
    </div>
     );
}
 
export default Home;
