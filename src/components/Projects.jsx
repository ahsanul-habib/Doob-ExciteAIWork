import React, { useState } from 'react';

const ProjectContainer = ({ projects }) => {
  const [selectedOption, setSelectedOption] = useState('all');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const appendProject = () => {
    if (selectedOption === 'all') {
      const allProjects = Object.keys(projects).map((key) => projects[key]).flatMap((project) => Object.values(project).filter((value) => typeof value === 'object'));
      return allProjects.map((project, index) => (
        <ProjectBox
          key={index}
          imgSrc={project.img}
          caption={project.title}
          category={project.category}
          href={project.href}
        />
      ));
    } else {
      const projectList = projects[selectedOption] || {};
      const projectKeys = Object.keys(projectList).filter((key) => typeof projectList[key] === 'object');
      return projectKeys.map((key, index) => (
        <ProjectBox
          key={index}
          imgSrc={projectList[key].img}
          caption={projectList[key].title}
          category={projectList[key].category}
          href={projectList[key].href}
        />
      ));
    }
  };

  return (
    <div className="flex flex-col items-center mb-24">
      <div id="projects-button" className="px-6 mb-20">
        <button
          className={selectedOption === 'all' ? 'px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white bg-blue-500 text-white dark:text-white' : 'px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white text-black dark:text-white'}
          onClick={() => handleOptionChange('all')}
        >
          All
        </button>
        {Object.keys(projects).map((key) => (
          <button
            key={key}
            className={selectedOption === key ? 'px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white bg-blue-500 text-white dark:text-white' : 'px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white text-black dark:text-white'}
            onClick={() => handleOptionChange(key)}
          >
            {projects[key].title}
          </button>
        ))}
      </div>
      <div id="projects-container" className="w-10/12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appendProject()}
      </div>
    </div>
  );
};

const ProjectBox = ({ imgSrc, caption, category, href }) => {
  return (
    <a className="p-4 hover:scale-105" href={href}>
      <div className="bg-gray-100 rounded-lg dark:bg-gray-500">
        <img src={imgSrc} className="w-full rounded-lg" alt={caption} />
        <div className="px-10 py-8">
          <h1 className="mb-2 font-bold text-xl dark:text-white">{caption}</h1>
          <h3 className="text-gray-700 dark:text-gray-300">{category}</h3>
        </div>
      </div>
    </a>
  );
};

export default ProjectContainer;


<div class="flex flex-row flex-wrap mb-28 dark:text-white justify-center" id="projects-button">
                <button class="px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white bg-blue-500 text-white" onclick="appendProject('all')" id="all">All Project</button>
            <button class="px-5 py-2 my-3 mx-3 rounded-lg hover:bg-blue-500 hover:text-white" id="catagory-01">Application</button><button class="px-5 py-2 my-3 mx-3 rounded-lg hover:bg-blue-500 hover:text-white" id="catagory-02">Art</button><button class="px-5 py-2 my-3 mx-3 rounded-lg hover:bg-blue-500 hover:text-white" id="catagory-03">Development</button></div>