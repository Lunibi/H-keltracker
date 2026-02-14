// app.js

// Project Management Module
// This module handles the overall management of the project.

class ProjectManager {
  constructor() {
    this.projects = [];
  }
  addProject(project) {
    this.projects.push(project);
  }
  getProjects() {
    return this.projects;
  }
}

// Timer Logic Module
// This module handles timer functionalities including start, stop, and reset.

class Timer {
  constructor() {
    this.time = 0;
    this.interval = null;
  }
  start() {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }
  stop() {
    clearInterval(this.interval);
  }
  reset() {
    this.time = 0;
  }
}

// Rendering Functions
// This module is responsible for rendering project details and timers to the UI.

function renderProjects(projects) {
  const projectList = document.getElementById('project-list');
  projectList.innerHTML = '';
  projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.textContent = project;
    projectList.appendChild(projectItem);
  });
}

function renderTimer(timer) {
  const timerDisplay = document.getElementById('timer-display');
  timerDisplay.textContent = timer.time;
}