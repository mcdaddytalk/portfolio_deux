import { Rule } from "sanity"

export const SkillSchema = {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'progress',
            title: 'Progress',
            type: 'number',
            description: 'Progress of skill from 0 to 100',
            validation: (Rule: Rule) => Rule.min(0).max(100),
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