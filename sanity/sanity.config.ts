import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schema } from './schema'

export default defineConfig({
  name: 'default',
  title: 'Fluxo CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'undefined',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/px219_panel',
  plugins: [deskTool(), visionTool(), codeInput()],
  schema,
}) 