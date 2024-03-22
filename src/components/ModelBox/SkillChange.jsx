import { useState } from "react";

const SkillChange = (props) => {
  const [skillClient, changeSkillClient] = useState(props.skills);

  const handlePercentageChange = (index, newValue) => {
    changeSkillClient(prevSkills => {
        return prevSkills.map((skill, i) => {
            if (i === index) {
                return { ...skill, percentage: `${newValue}%` };
            }
            return skill;
        });
    });
};

    const deleteABox=(index)=>{
        changeSkillClient(prevSkills => {
            return prevSkills.filter((_, i) => i!== index);
        });
    }



  const handleNameChange = (index, newValue) => {
    changeSkillClient(prevSkills => {
        return prevSkills.map((skill, i) => {
            if (i === index) {
                return { ...skill, title: newValue };
            }
            return skill;
        });
    });
};

const addABox=(title,percentage)=>{
    changeSkillClient([...skillClient,{"title":title,"percentage":percentage}]);
  }

//   const handleChange=(e)=>{
//     if (skill.title === "App Development") {
//         return { ...skill, percentage: "85%" };
//     }
//     return skill;
//     // changeSkillClient({...skillClient, [e.target.name]: e.target.value});
//     console.log(e.target.name);
//   }

  const discard = () => {
    props.toggleModalChange("skill-change-modal");
};
const save = () => {
    props.changeSkill(skillClient);
    props.toggleModalChange("skill-change-modal");
  };

  return (
    <div className="fixed w-screen h-screen hidden z-20" id="skill-change-modal">
      <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
        <div className="absolute w-7/12  bg-slate-200 rounded-lg flex flex-col">
          <div className="flex flex-col items-center justify-center p-9 gap-7">
            {skillClient.map((skill,index)=>
            <div key="index" className="w-full flex flex-row justify-center gap-6">
            <input type="text" defaultValue={skill.title}  onChange={(e) => handleNameChange(index, e.target.value)}/>
            <input type="range" className="flex-grow" min={0} max={100} defaultValue={parseInt(skill.percentage)} name={skill.title} onChange={(e) => handlePercentageChange(index, e.target.value)}/>
            <button onClick={()=>deleteABox(index)}><span class="material-symbols-outlined">
delete
</span></button>
          </div>
                )}
            <button onClick={()=>addABox('','50%')} className="text-white px-6 py-2 bg-blue-500 rounded-lg flex flex-row gap-2">Add More<span class="material-symbols-outlined">
add_circle
</span></button>
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

export default SkillChange;
