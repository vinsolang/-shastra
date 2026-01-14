import { Project, Template } from './types';

// ---------------------------------------------------------------------------
// INSTRUCTIONS TO CONNECT:
// 1. Deploy your Google Apps Script as a Web App.
// 2. Set 'Who has access' to 'Anyone'.
// 3. Paste the URL below inside the quotes.
// ---------------------------------------------------------------------------
const GOOGLE_SCRIPT_URL = 'INSERT_YOUR_DEPLOYED_GOOGLE_SCRIPT_URL_HERE'; 

// Helper to normalize keys to lowercase so Sheet headers can be "Title" or "title"
const normalizeKeys = <T>(data: any[]): T[] => {
  return data.map(item => {
    const newItem: any = {};
    Object.keys(item).forEach(key => {
      newItem[key.toLowerCase()] = item[key];
    });
    return newItem as T;
  });
};

export const api = {
  // --- Projects ---
  async getProjects(): Promise<Project[]> {
    // Check configuration before trying to fetch to avoid console errors
    if (GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) {
      console.warn("API Not Configured: Using default projects data.");
      throw new Error("API Not Configured");
    }

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getProjects`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return normalizeKeys<Project>(data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
      throw error;
    }
  },

  async addProject(project: Partial<Project>): Promise<boolean> {
    if (GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) return false;

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=addProject`, {
        method: 'POST',
        body: JSON.stringify(project)
      });
      return response.ok;
    } catch (error) {
      console.error("Failed to add project", error);
      return false;
    }
  },

  async updateProject(project: Partial<Project>): Promise<boolean> {
    if (GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) return false;

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=updateProject`, {
        method: 'POST',
        body: JSON.stringify(project)
      });
      return response.ok;
    } catch (error) {
      console.error("Failed to update project", error);
      return false;
    }
  },

  async deleteProject(id: number): Promise<boolean> {
    if (GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) return false;

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=deleteProject`, {
        method: 'POST',
        body: JSON.stringify({ id })
      });
      return response.ok;
    } catch (error) {
      console.error("Failed to delete project", error);
      return false;
    }
  },

  // --- Templates ---
  async getTemplates(): Promise<Template[]> {
    // Check configuration before trying to fetch to avoid console errors
    if (GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) {
      console.warn("API Not Configured: Using default templates data.");
      throw new Error("API Not Configured");
    }

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getTemplates`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return normalizeKeys<Template>(data);
    } catch (error) {
      console.error("Failed to fetch templates", error);
      throw error;
    }
  },

  async addTemplate(template: Partial<Template>): Promise<boolean> {
    if (GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) return false;

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=addTemplate`, {
        method: 'POST',
        body: JSON.stringify(template)
      });
      return response.ok;
    } catch (error) {
      console.error("Failed to add template", error);
      return false;
    }
  },

  async updateTemplate(template: Partial<Template>): Promise<boolean> {
    if (GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) return false;

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=updateTemplate`, {
        method: 'POST',
        body: JSON.stringify(template)
      });
      return response.ok;
    } catch (error) {
      console.error("Failed to update template", error);
      return false;
    }
  },

  async deleteTemplate(id: number): Promise<boolean> {
    if (GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) return false;

    try {
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=deleteTemplate`, {
        method: 'POST',
        body: JSON.stringify({ id })
      });
      return response.ok;
    } catch (error) {
      console.error("Failed to delete template", error);
      return false;
    }
  }
};