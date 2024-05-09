import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Sanity Studio Link
// https://deliverookingiex.sanity.studio/

export default defineConfig({
  name: 'default',
  title: 'deliveroo-clone-v1',

  projectId: 'he39d1od',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
