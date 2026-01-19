/**
 * Fetches taxonomy data
 * @returns {Promise<object>} Taxonomy data with tag mappings
 */
export async function fetchTaxonomy() {
  try {
    const response = await fetch('/taxonomy.json');
    if (!response.ok) return null;
    const json = await response.json();
 
    // Handle multi-sheet format
    if (json[':type'] === 'multi-sheet') {
      // Try to get the current language sheet, fallback to 'default' or 'en'
      const lang = document.documentElement.lang || 'en';
      return json[lang] || json.default || json.en;
    }
 
    // Handle single-sheet format (backward compatibility)
    return json;
  } catch (error) {
    return null;
  }
}
 