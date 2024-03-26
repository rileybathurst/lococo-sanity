import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'texture',
  title: 'Texture',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
