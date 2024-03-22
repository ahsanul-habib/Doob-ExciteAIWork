import {useState} from 'react';

const BlogsChange=(props)=>{
    const [blogsClient,changeBlogsClient]=useState(props.blogs);
    const [blogIndexClient,changeBlogIndexClient]=useState(0);
    
    // if (blogIndexClient>=blogsClient.length()){
        //     changeBlogIndexClient(0);
    // }
    
    const addABlog=(title,href)=>{
        changeBlogsClient([...blogsClient,{"title":title,"href":href}])   
    }
    
    const handleChange=(index,name,ss)=>{
        console.log(ss);
    }

    const previousBlog=()=>{
        
    }

    const discard = () => {
        props.toggleModalChange("blogs-change-modal");
    };
    const save = () => {
        props.changeSkill(skillClient);
        props.toggleModalChange("blogs-change-modal");
      };
    
    
    const DisplayABlog=()=>{
        const [imageSrc, setImageSrc] = useState('');
        const handleImageInputChange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        };
        return (
            <div className="flex flex-col items-center gap-4">
                        <span className="text-2xl">Blog - {blogIndexClient+1}</span>
                        <input type="file" accept="image/*" onChange={handleImageInputChange} />
                        {imageSrc && <img className="self-center w-36" src={imageSrc} alt="Preview" />}
                        <div className="flex flex-row items-center justify-center w-full gap-2">
                        <span>
                            Title:
                        </span>
                        <textarea name="title" className="h-8 rounded-lg text-center flex-grow" defaultValue={blogsClient[blogIndexClient]['title']} onChange={(e)=>handleChange(blogIndexClient,e.target.value,blogsClient[blogIndexClient])}></textarea>
                        </div>
                        <div className="flex flex-row items-center justify-center w-full gap-2">
                        <span>
                            Category:
                        </span>
                        <textarea name="href" className="h-8 rounded-lg text-center flex-grow" defaultValue={blogsClient[blogIndexClient]['category']} onChange={(e)=>handleChange(blogIndexClient,e.target.value)}></textarea>
                        </div>
                        <div className="flex flex-row items-center justify-center w-full gap-2">
                        <span>
                            Date:
                        </span>
                        <textarea name="href" className="h-8 rounded-lg text-center flex-grow" defaultValue={blogsClient[blogIndexClient]['date']} onChange={(e)=>handleChange(blogIndexClient,e.target.value)}></textarea>
                        </div>
                        <div className={"flex flex-row justify-between gap-2 w-full text-white "}>
                            {blogIndexClient!==0 && <button className="bg-blue-500 px-6 py-2 rounded-lg" onClick={()=>changeBlogIndexClient(blogIndexClient-1)}>Previous</button>} 
                            <button className={"bg-blue-500 px-6 py-2 rounded-lg "+(blogIndexClient===0&&"ml-auto")} onClick={()=>changeBlogIndexClient(blogIndexClient+1)}>Next</button>
                        </div>
            </div>
        )
    }

    return(
        <div className="fixed w-screen h-screen hidden z-20" id="blogs-change-modal">
        <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
          <div className="absolute w-7/12  bg-slate-200 rounded-lg flex flex-col">
            <div className="flex flex-col p-4">
                {/* <span>Hello</span> */}

            <DisplayABlog/>
            <div className='flex flex-row justify-center items-center py-2'>
            <button
              onClick={discard}
              className="text-black hover:text-white py-2 px-6 hover:bg-red-500 border-2 rounded-lg border-red-500"
            >
              Cancel
            </button>
            <button
              onClick={save}
              className="text-white ml-2 py-2 px-8 bg-green-400 rounded-lg"
            >
              Save
            </button>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default BlogsChange;