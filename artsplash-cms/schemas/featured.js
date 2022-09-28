export default {
    name: 'featured',
    type: 'document',
    title: 'Featured Products',
    fields: [
        {
            title: 'Product',
            name: 'product',
            description: "Add products first, if you haven't already.",
            validation: Rule => Rule.required(),
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'product'},
                  // etc
                ]
              }
            ]
        },
    ]
}