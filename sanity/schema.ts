import { type SchemaTypeDefinition } from 'sanity'
import schemas from './schemas'

// Asegurar que el esquema sea siempre un array válido
export const schema: { types: SchemaTypeDefinition[] } = {
  types: Array.isArray(schemas) ? schemas : []
} 