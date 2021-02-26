import {useState} from 'react';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Muhammed');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending('true');
        fetch('http://localhost:8000/blogs', {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
        }).then (()=> {
            setIsPending(false);
            console.log('blog added');
        })
    }
    return ( 
        <div className="create-new-blog d-flex justify-content-center">
            <form onSubmit={handleSubmit}> <br/>
            <h1 style={{color:"#d62c1a"}}>Add new blog</h1>
            <div className="form-group">
            <label for="blogTitle">Title</label>
            <input className="form-control" id="blogTitle" required value={title} onChange={(e)=> setTitle(e.target.value)}></input>
            </div>
            <div className="form-group">
            <label for="exampleFormControlTextarea1">Body</label>
            <textarea required value={body} onChange={(e)=> setBody(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <select className="form-control form-control-lg" required value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value='Muhammed'>Muhammed</option>
                <option value='Rob'> Rob</option>
            </select> <br/>
           {!isPending && <button type="submit" className="btn btn-primary">Submit</button>} 
           {isPending && <button class="btn btn-primary" type="button" disabled> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>} 
           
            <p>{title}</p>
            <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;