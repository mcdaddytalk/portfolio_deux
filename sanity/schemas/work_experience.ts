export const WorkExperienceSchema = {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'index',
            title: 'Index',
            type: 'string'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'from',
            title: 'From',
            type: 'string'
        },
        {
            name: 'to',
            title: 'To',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'summaryPoints',
            title: 'Summary Points',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        }
    ]
}