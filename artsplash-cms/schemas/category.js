export default {
    title: 'Category',
    name: 'category',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      // add a unique slug field for queries, permalinks etc
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description: "Auto generates a slug (unique URL) from the title field",
        options: {
            //Change to schema title to automatically populate
            source: "title",
            slugify: (input) =>
              input
                .toLowerCase()
                //Remove spaces
                .replace(/\s+/g, "-")
                //Remove special characters
                .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
            validation: (Rule) => Rule.required(),
          },
      },
      {
        name: "picture",
        type: 'image',
        title: "Picture",
        description: "A picture for the category to display in the category page. It's best to keep file sizes below 200KB to avoid long loading times.",
        validation: Rule => Rule.required(),
      },
      {
        name: "description",
        type: "richText",
        title: "Description",	
        description: "A description for the category to display in the category page.",
        validation: Rule => Rule.required(),
      }
    ]
  }