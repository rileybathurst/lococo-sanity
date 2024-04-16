import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    {
      title: 'Notes',
      name: 'notes',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
    
    "posts": *[_type == "post" && references(^._id)]{
      title,
      slug
    }
    
  ],
})
