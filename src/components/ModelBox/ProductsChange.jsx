import {useState} from 'react';

const BlogsChange=(props)=>{
    const [blogsClient,changeBlogsClient]=useState(props.blogs);
    const [blogIndexClient,changeBlogIndexClient]=useState(0);

    if (blogIndexClient>=blogsClient.length()){
        changeBlogIndexClient(0);
    }

    const addABlog=(title,href)=>{
        changeBlogsClient([...blogsClient,{"title":title,"href":href}])   
    }

    const displayABlog=()=>{
        return (
            <div>
                <a
                    key={index}
                    className="py-1 text-md text-gray-500 hover:text-gray-200"
                    href={blogsClient[blogIndexClient]["href"]}
                >
                    {blogsClient[blogIndexClient]["title"]}
                </a>
            </div>
        )
    }

    return(
        <div className="fixed w-screen h-screen hidden z-20" id="skill-change-modal">
        <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
          <div className="absolute w-7/12  bg-slate-200 rounded-lg flex flex-col">
            <div className="flex flex-col">
            <displayABlog/>
            </div>
        </div>
        </div>
        </div>
    )
}

export default BlogsChange;