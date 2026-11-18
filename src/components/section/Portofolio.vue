```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import type { Category, GalleryItem } from '@/data/gallery'

const router = useRouter()

const openGallery = (item: GalleryItem): void => {
  router.push({
    path: '/picture',
    query: {
      category: item.category
    }
  })
}

const activeCategory = ref<Category>('all')

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Liga 1', value: 'LIGA 1' },
  { label: 'Liga 2', value: 'LIGA 2' },
  { label: 'Liga 3', value: 'LIGA 3' },
  { label: 'Liga 4', value: 'LIGA 4' },
  { label: 'Event', value: 'event' },
  { label: 'Portrait', value: 'portrait' },
]

const galleryItems: GalleryItem[] = [
  // LIGA 1
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Aksi pertandingan sepak bola',
    title: 'Liga 1',
    description: 'Dokumentasi pertandingan Liga 1 Indonesia',
    category: 'LIGA 1',
    delay: '0.1s',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pemain sepak bola sedang bertanding',
    title: 'Liga 2',
    description: 'Dokumentasi pertandingan Liga 2',
    category: 'LIGA 2',
    delay: '0.3s',
  },

  // LIGA 3
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pemain sepak bola membawa bola',
    title: 'Liga 3',
    description: 'Dokumentasi kompetisi Liga 3',
    category: 'LIGA 3',
    delay: '0.5s',
  },

  // LIGA 4
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pemain sepak bola sedang beraksi',
    title: 'Liga 4',
    description: 'Dokumentasi kompetisi Liga 4',
    category: 'LIGA 4',
    delay: '0.7s',
  },
  // EVENT
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Peserta event lari',
    title: 'Event',
    description: 'Dokumentasi event olahraga lari',
    category: 'event',
    delay: '0.9s',
  },

  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Portrait atlet pria',
    title: 'Portrait',
    description: 'Sport portrait photography',
    category: 'portrait',
    delay: '1.1s',
  },

]

const filteredGallery = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryItems
  }

  return galleryItems.filter(
    (item) => item.category === activeCategory.value
  )
})

const filterGallery = (category: Category): void => {
  activeCategory.value = category
}
</script>

<template>
  <section class="py-20 bg-white overflow-hidden" id="portofolio-section">
    <div class="container mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-12 animate-fadeIn">
        <span class="text-sm font-['Oswald'] uppercase tracking-widest text-gray-500">
          Our Work
        </span>

        <h2 class="text-4xl md:text-5xl font-['Oswald'] font-bold uppercase tracking-wider text-black mt-2">
          Portfolio
        </h2>

        <div class="w-20 h-1 bg-black mx-auto mt-4"></div>

        <p class="text-gray-600 max-w-2xl mx-auto mt-4 font-['Oswald']">
          Beberapa hasil dokumentasi olahraga yang telah kami kerjakan
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="filterGallery(category.value)"
          :class="[
            'filter-btn px-6 py-2 rounded-full font-[Oswald] uppercase text-sm transition duration-300',
            activeCategory === category.value
              ? 'bg-black text-white'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          ]"
        >
          {{ category.label }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
          v-for="item in filteredGallery"
          :key="item.id"
          @click="openGallery(item)"
          class="gallery-item group relative overflow-hidden rounded-2xl bg-gray-100 animate-slideUp cursor-pointer"
          :style="{ animationDelay: item.delay }"
        >
          <img
            :src="item.image"
            :alt="item.alt"
            class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />

          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <div class="text-center text-white">
              <p class="font-['Oswald'] text-xl font-bold uppercase">
                {{ item.title }}
              </p>

              <p class="text-sm text-gray-300">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slideUp {
  opacity: 0;
  animation: slideUp 0.6s ease-out forwards;
}
</style>
```