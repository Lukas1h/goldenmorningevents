import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imagecard',
  title: 'Image',
  type: 'document',
  fields: [

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],

  
})
