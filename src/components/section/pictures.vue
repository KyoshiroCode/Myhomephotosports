
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const goToHome = (): void => {
  router.push('/')
}

type Category = 'all' | 'LIGA 1' | 'LIGA 2' | 'LIGA 3' | 'LIGA 4' | 'event' | 'portrait'

interface GalleryItem {
  id: number
  image: string
  title: string
  category: Exclude<Category, 'all'>
  location: string
  description: string
  size: string
}

const selectedImage = ref<GalleryItem | null>(null)

// Ambil kategori dari URL
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
  // ==================== LIGA 1 ====================
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=85',
    title: 'Football Action',
    category: 'LIGA 1',
    location: 'Liga 1 Indonesia',
    description: 'Momen duel dan aksi pemain di tengah pertandingan.',
    size: 'row-span-2',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=85',
    title: 'Match Day',
    category: 'LIGA 1',
    location: 'Liga 1 Indonesia',
    description: 'Suasana pertandingan sepak bola profesional.',
    size: '',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=85',
    title: 'The Striker',
    category: 'LIGA 1',
    location: 'Liga 1 Indonesia',
    description: 'Aksi pemain saat membawa bola menuju gawang.',
    size: '',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?auto=format&fit=crop&w=1200&q=85',
    title: 'The Competition',
    category: 'LIGA 1',
    location: 'Liga 1 Indonesia',
    description: 'Persaingan sengit dalam pertandingan.',
    size: '',
  },

  // ==================== LIGA 2 ====================
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=85',
    title: 'Team Spirit',
    category: 'LIGA 2',
    location: 'Liga 2 Indonesia',
    description: 'Kerja sama dan semangat para pemain.',
    size: 'row-span-2',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=85',
    title: 'On The Field',
    category: 'LIGA 2',
    location: 'Liga 2 Indonesia',
    description: 'Momen pertandingan di atas lapangan.',
    size: '',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85',
    title: 'The Challenge',
    category: 'LIGA 2',
    location: 'Liga 2 Indonesia',
    description: 'Perjuangan pemain dalam merebut bola.',
    size: '',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85',
    title: 'Match Atmosphere',
    category: 'LIGA 2',
    location: 'Liga 2 Indonesia',
    description: 'Suasana dan atmosfer pertandingan.',
    size: '',
  },

  // ==================== LIGA 3 ====================
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=1200&q=85',
    title: 'Championship',
    category: 'LIGA 3',
    location: 'Liga 3 Indonesia',
    description: 'Dokumentasi kompetisi sepak bola.',
    size: 'row-span-2',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=85',
    title: 'The Game',
    category: 'LIGA 3',
    location: 'Liga 3 Indonesia',
    description: 'Aksi dan momen selama pertandingan.',
    size: '',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85',
    title: 'Football Ground',
    category: 'LIGA 3',
    location: 'Liga 3 Indonesia',
    description: 'Dokumentasi suasana lapangan.',
    size: '',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1200&q=85',
    title: 'Final Whistle',
    category: 'LIGA 3',
    location: 'Liga 3 Indonesia',
    description: 'Momen penting dalam kompetisi.',
    size: '',
  },

  // ==================== LIGA 4 ====================
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?auto=format&fit=crop&w=1200&q=85',
    title: 'Rising Stars',
    category: 'LIGA 4',
    location: 'Liga 4 Indonesia',
    description: 'Perjuangan para pemain dalam kompetisi.',
    size: 'row-span-2',
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=85',
    title: 'Young Talent',
    category: 'LIGA 4',
    location: 'Liga 4 Indonesia',
    description: 'Aksi pemain muda di lapangan.',
    size: '',
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=85',
    title: 'Game On',
    category: 'LIGA 4',
    location: 'Liga 4 Indonesia',
    description: 'Momen pertandingan penuh semangat.',
    size: '',
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=85',
    title: 'United Team',
    category: 'LIGA 4',
    location: 'Liga 4 Indonesia',
    description: 'Kekompakan dan kebersamaan tim.',
    size: '',
  },

  // ==================== EVENT ====================
  {
    id: 17,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85',
    title: 'Running Festival',
    category: 'event',
    location: 'Sport Event',
    description: 'Dokumentasi kegiatan olahraga lari.',
    size: 'row-span-2',
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85',
    title: 'Marathon Day',
    category: 'event',
    location: 'Marathon Event',
    description: 'Perjuangan peserta mencapai garis akhir.',
    size: '',
  },
  {
    id: 19,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85',
    title: 'Sports Festival',
    category: 'event',
    location: 'Sport Event',
    description: 'Suasana kegiatan dan kompetisi olahraga.',
    size: '',
  },
  {
    id: 20,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=85',
    title: 'Cycling Event',
    category: 'event',
    location: 'Community Event',
    description: 'Dokumentasi kegiatan olahraga komunitas.',
    size: '',
  },

  // ==================== PORTRAIT ====================
  {
    id: 21,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
    title: 'Athlete Profile',
    category: 'portrait',
    location: 'Sport Portrait',
    description: 'Potret individu dengan karakter yang kuat.',
    size: 'row-span-2',
  },
  {
    id: 22,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    title: 'Personal Portrait',
    category: 'portrait',
    location: 'Portrait Session',
    description: 'Dokumentasi potret personal.',
    size: '',
  },
  {
    id: 23,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    title: 'The Athlete',
    category: 'portrait',
    location: 'Sport Portrait',
    description: 'Potret dengan pendekatan editorial.',
    size: '',
  },
  {
    id: 24,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    title: 'Character Study',
    category: 'portrait',
    location: 'Portrait Session',
    description: 'Menampilkan ekspresi dan karakter subjek.',
    size: '',
  },
]

// Validasi kategori dari URL
const validCategories: Category[] = categories.map(category => category.value)

const syncCategory = () => {
  const queryCategory = route.query.category

  if (
    typeof queryCategory === 'string' &&
    validCategories.includes(queryCategory as Category)
  ) {
    activeCategory.value = queryCategory as Category
  } else {
    activeCategory.value = 'all'
  }

  selectedImage.value = null
}

// Jalankan saat halaman dibuka dan saat URL berubah
watch(
  () => route.query.category,
  syncCategory,
  { immediate: true }
)

// Filter gallery
const filteredGallery = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryItems
  }

  return galleryItems.filter(
    item => item.category === activeCategory.value
  )
})

// Filter manual dari tombol kategori
const setCategory = (category: Category): void => {
  activeCategory.value = category

  if (category === 'all') {
    route.query.category !== undefined &&
      history.replaceState(history.state, '', '/picture')
  } else {
    // Update URL melalui router pada langkah berikutnya
  }
}

const openLightbox = (item: GalleryItem): void => {
  selectedImage.value = item
}

const closeLightbox = (): void => {
  selectedImage.value = null
}
</script>

<template>
  <section id="gallery" class="bg-white py-20 overflow-hidden">

    <div class="container mx-auto px-4">

      <!-- HEADER -->
      <div class="text-center mb-14 animate-fadeIn">
        <!-- BACK BUTTON -->
        <div class="mb-8">
        <button
            @click="goToHome"
            class="inline-flex items-center gap-2 px-5 py-2.5
                border border-gray-300 rounded-full
                text-gray-700 font-['Oswald'] uppercase
                text-sm tracking-wider
                hover:bg-black hover:text-white hover:border-black
                transition-all duration-300"
        >
            <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
            />
            </svg>

            Back to Home
        </button>
        </div>

        <span class="font-['Oswald'] text-sm uppercase tracking-[0.3em] text-gray-500">
          Our Photography
        </span>

        <h2 class="font-['Oswald'] text-4xl md:text-6xl font-bold uppercase tracking-wider text-black mt-3">
          Our Gallery
        </h2>

        <div class="w-20 h-1 bg-red-600 mx-auto mt-5"></div>

        <p class="text-gray-500 max-w-xl mx-auto mt-5 leading-relaxed">
          Setiap momen memiliki cerita. Lihat berbagai hasil dokumentasi
          olahraga yang telah kami abadikan.
        </p>

      </div>


      <!-- FILTER -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">

        <button
          v-for="category in categories"
          :key="category.value"
          @click="setCategory(category.value)"
          :class="[
            'px-6 py-2.5 rounded-full font-[Oswald] text-sm uppercase tracking-wider transition-all duration-300',
            activeCategory === category.value
              ? 'bg-black text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
          ]"
        >
          {{ category.label }}
        </button>

      </div>


      <!-- GALLERY GRID -->
      <TransitionGroup
        name="gallery"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[250px]"
      >

        <div
          v-for="item in filteredGallery"
          :key="item.id"
          @click="openLightbox(item)"
          :class="[
            'group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer',
            item.size
          ]"
        >

          <!-- IMAGE -->
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <!-- OVERLAY -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500">

            <div class="absolute bottom-0 left-0 p-6 w-full translate-y-3 group-hover:translate-y-0 transition-transform duration-500">

              <span class="text-red-400 text-xs uppercase tracking-[0.2em] font-['Oswald']">
                {{ item.location }}
              </span>

              <h3 class="text-white font-['Oswald'] text-2xl font-bold uppercase mt-2">
                {{ item.title }}
              </h3>

              <div class="flex justify-between items-center mt-3">

                <span class="text-gray-300 text-xs">
                  View Photography
                </span>

                <div class="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition duration-300">

                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 3h6v6m-11 5L21 3M5 7H3v14h14v-2"
                    />
                  </svg>

                </div>

              </div>

            </div>

          </div>

        </div>

      </TransitionGroup>


      <!-- EMPTY STATE -->
      <div
        v-if="filteredGallery.length === 0"
        class="text-center py-20 text-gray-400 font-['Oswald'] uppercase"
      >
        No photos available.
      </div>


      <!-- BOTTOM TEXT -->
      <div class="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-8">

        <p class="font-['Oswald'] text-sm uppercase tracking-widest text-gray-500">
          Wijaya Grup Photography
        </p>

        <p class="font-['Oswald'] text-sm font-bold uppercase tracking-widest text-black">
          Every Picture Tells A Story.
        </p>

      </div>

    </div>


    <!-- LIGHTBOX -->
    <Transition name="lightbox">

      <div
        v-if="selectedImage"
        class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
        @click.self="closeLightbox"
      >

        <!-- CLOSE BUTTON -->
        <button
          @click="closeLightbox"
          aria-label="Close image preview"
          class="absolute top-5 right-5 text-white hover:text-red-500 transition z-10"
        >
          <svg
            class="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>


        <!-- IMAGE PREVIEW -->
        <div
          v-if="selectedImage"
          class="max-w-5xl w-full flex flex-col items-center"
        >

          <img
            :src="selectedImage.image"
            :alt="selectedImage.title"
            class="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
          />

          <div class="text-center mt-6">

            <span class="text-red-400 text-xs font-['Oswald'] uppercase tracking-[0.3em]">
              {{ selectedImage.location }}
            </span>

            <h3 class="text-white text-3xl font-['Oswald'] font-bold uppercase mt-2">
              {{ selectedImage.title }}
            </h3>

            <p class="text-gray-400 text-sm mt-2">
              {{ selectedImage.description }}
            </p>

          </div>

        </div>

      </div>

    </Transition>

  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Gallery Transition */
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.35s ease;
}

.gallery-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.gallery-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.gallery-leave-active {
  position: absolute;
}

/* Lightbox Transition */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
```