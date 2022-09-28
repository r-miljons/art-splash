export default {
    name: "product",
    type: "document",
    title: "Products",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Product Name",
            validation: Rule => Rule.required(),
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: "A unique URL for the product",
            options: {
                //Change to schema title to automatically populate
                source: "name",
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
            name: "description",
            type: "richText",
            title: "Description",
            validation: Rule => Rule.required(),
        },
        {
            name: "picture",
            type: "image",
            title: "Picture",
            description: "Product Image. It's best to keep file sizes below 200KB to avoid long loading times.",
            validation: Rule => Rule.required(),
        },
        {
            title: 'Artist',
            name: 'author',
            description: "Add an artist first, if there isn't one.",
            validation: Rule => Rule.required(),
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'artist'},
                  // etc
                ]
              }
            ]
        },
        {
            title: 'Category',
            name: 'category',
            description: "Create a category first, if it doesn't exist.",
            validation: Rule => Rule.required(),
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'category'},
                  // etc
                ]
              }
            ]
        },
        {
            name: "amount",
            type: "number",
            title: "Amount",
            description: "Leave empty if product is one of a kind."  
        },
        {
            name: "price",
            type: "number",
            title: "Price",
            description: "Price in Euros, cents separated by a dot. examples: 10 = 10 EUR; 550.66 = 550.66 EUR etc."  
        }

    ]
}