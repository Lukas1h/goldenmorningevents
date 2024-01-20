import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'Golden Morning Events',

  projectId: '7iu3rqrq',
  dataset: 'production',

  plugins: [structureTool(), visionTool(),unsplashImageAsset(),],

  schema: {
    types: schemaTypes,
  },
})
