import { z } from 'zod'

export const blogSchema = z.object({
  content: z
    .string()
    .min(10, 'Content must be at least 10 characters long')
    .max(5000, 'Content cannot exceed 5000 characters'),
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters long')
    .max(100, 'Title cannot exceed 100 characters'),
  image: z
    .string()
    .url('Image must be a valid URL')
    .regex(
      /\.(jpeg|jpg|gif|png)$/,
      'Image must be a valid image format (jpeg, jpg, gif, png)',
    ),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters long')
    .max(200, 'Description cannot exceed 200 characters'),
})

export type BlogFormData = z.infer<typeof blogSchema>
