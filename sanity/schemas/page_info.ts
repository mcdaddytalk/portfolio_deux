export const PageInfoSchema = {
    name: 'pageInfo',
    title: 'Page Info',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'backgroundInformation',
            title: 'Background Information',
            type: 'string'
        },
        {
            name: 'profilePic',
            title: 'Profile Picture',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        }
    ]
}