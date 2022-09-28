export default {
    name: "artist",
    type: "document",
    title: "Artists",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Artist Name",
            validation: Rule => Rule.required(),
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: "A unique URL for the artist",
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
            description: "Artist picture. It's best to keep file sizes below 200KB to avoid long loading times.",
            validation: Rule => Rule.required(),
        },
        {
            name: "background",
            type: "image",
            title: "Background picture",
            description: "To be used in artists' page. It's best to keep file sizes below 200KB to avoid long loading times.",
            validation: Rule => Rule.required(),
        }
    ]
}