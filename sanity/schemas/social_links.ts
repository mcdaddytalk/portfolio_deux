export const SocialSchema ={
    name: 'socials',
    title: 'Social Links',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        }
    ]
}