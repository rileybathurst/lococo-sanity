import {defineType} from 'sanity'

export default defineType({
  name: 'steps',
  title: 'Steps',
  type: 'object',
  fields: [
    {type: 'string', name: 'name'},
    {type: 'text', name: 'description'},
    {type: 'text', name: 'notes'},
    {type: 'image', name: 'image'},
    {type: 'number', name: 'order'},
  ],
})
