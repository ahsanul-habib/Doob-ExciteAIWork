import { useState } from "react";

const BioChange = (props) => {
  const [bioClient, changeBioClient] = useState(props.bio);
  const handleChange=(e)=>{
    changeBioClient({...bioClient, [e.target.name]: e.target.value});
    console.log(bioClient);
  }
  const discard = () => {
    changeBioClient(props.bio);
    props.toggleModalChange("bio-change-modal");
};
const save = () => {
    props.changeBio(bioClient);
    props.toggleModalChange("bio-change-modal");
  };
  return (
    <div className="fixed w-screen h-screen hidden z-20" id="bio-change-modal">
      <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
        <div className="absolute w-7/12  bg-slate-200 rounded-lg flex flex-col">
          <div className="flex flex-col items-center justify-center p-9 gap-7">
            <div className="w-full flex flex-row justify-center gap-6">
              <span>Name:</span>
              <input type="text" className="flex-grow" defaultValue={bioClient.name} name="name" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-row justify-center gap-6">
              <span>Short Profession:</span>
              <input type="text" className="flex-grow" defaultValue={bioClient.short_profession} name="short_profession" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-row justify-center gap-6">
              <span>Intro:</span>
              <input type="text" className="flex-grow" defaultValue={bioClient.intro} name="intro" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-row justify-center gap-6">
              <span>Profession:</span>
              <input type="text" className="flex-grow" defaultValue={bioClient.profession} name="profession" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-row justify-center gap-6">
              <span>Phone:</span>
              <input type="text" className="flex-grow" defaultValue={bioClient.phone} name="phone" onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-row justify-center gap-6">
              <span>Location</span>
              <input type="text" className="flex-grow" defaultValue={bioClient.location} name="location" onChange={handleChange}/>
            </div>
            <div>

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
  );
};

export default BioChange;
