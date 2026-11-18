```vue
<script setup lang="ts">
import { ref } from 'vue'

interface NavItem {
  label: string
  href: string
}

const scrollToSection = (href: string): void => {
  if (href === '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    closeMenu()
    return
  }

  const target = document.querySelector(href)

  if (!target) {
    console.warn(`Target ${href} tidak ditemukan`)
    return
  }

  const navbarHeight = 70

  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  })

  closeMenu()
}


const isMenuOpen = ref(false)

// Navigasi desktop
const desktopLinks: NavItem[] = [
  { label: 'Home', href: '#hero-section' },
  { label: 'Tentang Kami', href: '#about-section' },
  { label: 'Portofolio', href: '#portofolio-section' },
  { label: 'Layanan', href: '#services-section' },
  { label: 'Kontak', href: '#contact-section' },
]

// Navigasi mobile
const mobileLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Tentang Kami', href: '#about-section' },
  { label: 'Layanan', href: '#services-section' },
  { label: 'Portfolio', href: '#portofolio-section' },
  { label: 'Kontak', href: '#contact-section' },
]

// Tutup menu setelah link diklik
const closeMenu = (): void => {
  isMenuOpen.value = false
}

// Toggle hamburger menu
const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50 border-b-2 border-black">

    <div class="container mx-auto px-4 py-2 flex justify-between items-center">

      <!-- Logo -->
      <a href="/" class="flex-shrink-0">
        <img
          src="/Assets/icon.jpg"
          alt="Wijaya Grup"
          class="w-auto h-10"
        />
      </a>

      <!-- Desktop Navigation -->
      <div class="space-x-1 text-sm hidden md:flex items-center">
        <a
          v-for="link in desktopLinks"
          :key="link.label"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          class="text-black font-['Oswald'] uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300"
        >
          {{ link.label }}
        </a>

      </div>

      <!-- Hamburger Button -->
      <button
        type="button"
        @click="toggleMenu"
        class="block md:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        aria-controls="nav-menu"
      >

        <!-- Hamburger Icon -->
        <svg
          v-if="!isMenuOpen"
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          class="w-8 h-8"
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

    </div>

    <!-- Mobile Navigation -->
    <div
      id="nav-menu"
      v-if="isMenuOpen"
      class="md:hidden bg-white border-t-2 border-black shadow-lg"
    >

      <div class="container mx-auto px-4 py-4 flex flex-col space-y-2">

       <a
        v-for="link in mobileLinks"
        :key="link.label"
        :href="link.href"
        @click.prevent="scrollToSection(link.href)"
        class="text-black font-['Oswald'] uppercase tracking-wider px-4 py-3 rounded-lg hover:bg-black hover:text-white transition duration-300 text-center block"
      >
        {{ link.label }}
      </a>

      </div>

    </div>

  </nav>
</template>
```