export const ProjectSchema = {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'index',
            title: 'Index',
            type: 'string'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'tech',
            title: 'Tech',
            type: 'array',
            of: [
                {
                    name: 'used',
                    title: 'Used',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        },
                        {
                            name: 'slug',
                            title: 'Slug',
                            type: 'string'
                        }
                    ]
                }
            ],
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}