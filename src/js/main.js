import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderProjectsGrid } from './components/projectsGrid.js';
import { renderSkills } from './components/skills.js';
import { renderContact } from './components/contact.js';

async function initPortfolio() {
  try {
    const [profileRes, projectsRes] = await Promise.all([
      fetch('./src/data/profile.json'),
      fetch('./src/data/projects.json')
    ]);

    if (!profileRes.ok || !projectsRes.ok) {
      throw new Error('Failed to load database JSON components.');
    }

    const profileData = await profileRes.json();
    const projectsData = await projectsRes.json();

    renderNavbar(profileData);
    renderHero(profileData);
    renderProjectsGrid(projectsData);
    renderSkills(profileData.skillCategories);
    renderContact(profileData.socials);

  } catch (error) {
    console.error('Initialization Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', initPortfolio);