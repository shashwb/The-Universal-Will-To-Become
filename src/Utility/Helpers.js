/**
 * Helper Functions
 */

 /**
  * Used to get all unique tags for a particular page (landing, blog, etc)
  * @param { all edges from a graphql data query } data 
  * @param { if we only want tags from a particular category} currentCategory 
  */
 export function getAllTagsForSection(data=[], currentCategory=false) {
   console.log('function getAlLTagsForSection :: data', data, 'currentCategory', currentCategory);
    const category = (currentCategory) ? currentCategory : null;
    console.log('cateegory?', category);
    const tagsForAllCategories = data.map((element) => {
        const categories = element.node.frontmatter.categories;
        const tags = element.node.frontmatter.tags;
        if (categories.includes(category) || category == null) {
          return tags;
        }
      });

      console.log('>> what is tagsForAllCategories', tagsForAllCategories);

      //flatten all tags
      const flattened_tagsForAllCategories = [].concat.apply([], tagsForAllCategories);

      //remove all nulls
      const filtered = flattened_tagsForAllCategories.filter(Boolean);
      console.log('what is filtered?', filtered);

      // return a new unique set
      return Array.from(new Set(filtered));
 }