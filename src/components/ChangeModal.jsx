import MenuChange from './ModelBox/MenuChange';
import BioChange from './ModelBox/BioChange';
import SkillChange from './ModelBox/SkillChange';
import FooterChange from './ModelBox/FooterChange';
import BlogsChange from './ModelBox/BlogsChange';



const changeModal=(props)=>{
    const changeMenu = (updatedMenus) => {
        props.changeData({ ...props.Data, menus: updatedMenus });
      };

      const changeBio=(updatedBio)=>{
        props.changeData({...props.Data, ...updatedBio });
        console.log(props.Data);
      }

      const changeSkill=(updatedSkill)=>{
        props.changeData({...props.Data,skills:updatedSkill });
        console.log(props.Data);
      }

      const changeFooterSections=(updatedFooterServices,updatedFooterProjects)=>{
        props.changeData({...props.Data,footer_services:updatedFooterServices,footer_projects:updatedFooterProjects});
      }

    return(
        <>
        <MenuChange toggleModalChange={props.toggleModalChange} menus={props.Data["menus"]} changeMenu={changeMenu}/>
        <BioChange toggleModalChange={props.toggleModalChange} changeBio={changeBio} bio={{name:props.Data["name"], profession:props.Data["profession"], short_profession:props.Data["short_profession"], intro:props.Data["intro"], phone:props.Data["phone"], location:props.Data["location"], cv:props.Data["cv"]}}/>
        <SkillChange toggleModalChange={props.toggleModalChange} changeSkill={changeSkill} skills={props.Data["skills"]}/>
        <FooterChange toggleModalChange={props.toggleModalChange} changeFooterSections={changeFooterSections} footer_services={props.Data["footer_services"]} footer_projects={props.Data["footer_projects"]} />
        <BlogsChange toggleModalChange={props.toggleModalChange} blogs={props.Data["blogs"]} moto={props.Data["moto"]} />
        </>
    );
}

export default changeModal;