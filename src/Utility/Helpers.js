/**
 * Helper Functions
 */

 /**
  * Used to get all unique tags for a particular page (landing, blog, etc)
  * @param { all edges from a graphql data query } data 
  * @param { if we only want tags from a particular category} currentCategory 
  */
 export function getAllTagsForSection(data=[], currentCategory=false) {
    const category = (currentCategory) ? currentCategory : null;
    const tagsForAllCategories = data.map((element) => {
        const categories = element.node.frontmatter.categories;
        const tags = element.node.frontmatter.tags;
        if (categories.includes(category) || category == null) {
          return tags;
        }
    
      }).flat();
      console.log('[ INSIDE OF THE FUNCTION ] :: what are tagsForAllCategories?', tagsForAllCategories);

      //remove all nulls
      const filtered = tagsForAllCategories.filter(Boolean);
      console.log('[INSIDE OF THE FUNCTION...FITLERED', filtered);


      // return a new unique set
      return Array.from(new Set(filtered));
 }