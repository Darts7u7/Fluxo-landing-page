import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Preguntas Frecuentes',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Contenido',
    },
    {
      name: 'settings',
      title: 'Configuración',
    },
  ],
  fields: [
    defineField({
      name: 'question',
      title: 'Pregunta',
      type: 'string',
      description: 'La pregunta que será mostrada al usuario',
      group: 'content',
    }),
    defineField({
      name: 'answer',
      title: 'Respuesta',
      type: 'text',
      description: 'La respuesta a la pregunta frecuente',
      group: 'content',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      description: 'Categoría para agrupar preguntas relacionadas',
      options: {
        list: [
          { title: 'General', value: 'General' },
          { title: 'Planes y Precios', value: 'Planes y Precios' },
          { title: 'Facturación', value: 'Facturación' },
          { title: 'Cuenta', value: 'Cuenta' },
          { title: 'Seguridad', value: 'Seguridad' },
          { title: 'Soporte', value: 'Soporte' },
        ],
      },
      group: 'settings',
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Posición en la que aparecerá esta pregunta (menor número = mayor prioridad)',
      initialValue: 999,
      group: 'settings',
    }),
    defineField({
      name: 'isActive',
      title: 'Activa',
      type: 'boolean',
      description: 'Si está desactivada, no aparecerá en el sitio',
      initialValue: true,
      group: 'settings',
    }),
  ],
  preview: {
    select: {
      title: 'question'
    }
  }
}) 