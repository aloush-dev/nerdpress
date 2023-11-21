export function slugify(title: string): string {
    title = title.trim();
  
    title = title.toLowerCase();
  
    title = title.replace(/\s+/g, "-");
  
    title = title.replace(/[^a-z0-9-]/g, "");
  
    return title;
  }