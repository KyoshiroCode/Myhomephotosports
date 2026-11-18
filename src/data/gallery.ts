export type Category =
  | 'all'
  | 'LIGA 1'
  | 'LIGA 2'
  | 'LIGA 3'
  | 'LIGA 4'
  | 'event'
  | 'portrait'

export interface GalleryItem {
  id: number
  image: string
  alt: string
  title: string
  description: string
  category: Exclude<Category, 'all'>
  delay: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/Assets/porto1.jpeg',
    alt: 'Foto Liga 1',
    title: 'Liga 1',
    description: 'Liga 1 Indonesia',
    category: 'LIGA 1',
    delay: '0.1s',
  },
  {
    id: 2,
    image: '/Assets/porto2.jpeg',
    alt: 'Foto Liga 2',
    title: 'Liga 2',
    description: 'Liga 2 Indonesia',
    category: 'LIGA 2',
    delay: '0.2s',
  },
  // Tambahkan foto lainnya di sini
]