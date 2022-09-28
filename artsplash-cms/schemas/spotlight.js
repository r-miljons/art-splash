export default {
    name: "spotlight",
    title: "Spotlight",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            name: "body",
            title: "Body",
            type: "richText",
            validation: Rule => Rule.required(),
        },
        {
            name: "button",
            title: "Button text",
            type: "string",
            description: "Text displayed on the button.",
            validation: Rule => Rule.required(),
        },
        {
            name: "url",
            title: "Button URL",
            type: "string",
            description: "Link to navigate to after clicking the button.",
            validation: Rule => Rule.required(),
        },
        {
            name: "mainPicture",
            title: "Main picture",
            type: "image",
            description: "Main picture to be displayed when visiting the website.",
            validation: Rule => Rule.required(),
        },
        {
            name: "secondPicture",
            title: "Second picture",
            type: "image",
            validation: Rule => Rule.required(),
        },
        {
            name: "thirdPicture",
            title: "Third picture",
            type: "image",
            validation: Rule => Rule.required(),
        }
    ]
}