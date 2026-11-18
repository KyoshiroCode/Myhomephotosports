<script setup lang="ts">
import { ref } from 'vue'

interface OtherServiceItem {
  id: number
  title: string
  subtitle: string
  description: string
  icon: string
  features: string[]
  badge: string
}

const otherServices: OtherServiceItem[] = [
  {
    id: 1,
    title: 'Rental PlayStation (PS)',
    subtitle: 'Rental & Gaming Station',
    description: 'Sewa konsol PlayStation terbaru untuk turnamen e-sports, event gathering, atau hiburan di tempat.',
    icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
    features: ['Unit PS5 & PS4 Terbaru', 'Lengkap dengan Stik & Game', 'Cocok untuk Event & Turnamen'],
    badge: 'GAMING'
  },
  {
    id: 2,
    title: 'Wedding & Engagement',
    subtitle: 'Dokumentasi Pernikahan',
    description: 'Mengabadikan hari bahagia pernikahan dan pertunangan Anda dengan gaya sinematik dan elegan.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    features: ['Liputan Akad & Resepsi', 'Cinematic Wedding Clip', 'Album Eksklusif & File Master'],
    badge: 'POPULAR'
  },
  {
    id: 3,
    title: 'Graduation & Wisuda',
    subtitle: 'Dokumentasi Wisuda',
    description: 'Abadikan momen kelulusan dan wisuda bersama keluarga, sahabat, dan pasangan dengan hasil terbaik.',
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    features: ['Sesi Foto Kampus / Studio', 'Edit Warna & Retouching Profesional', 'Cetak Foto & Bingkai Premium'],
    badge: 'SPECIAL'
  }
]

const selectedService = ref<OtherServiceItem | null>(null)

const openServiceModal = (service: OtherServiceItem): void => {
  selectedService.value = service
}

const closeServiceModal = (): void => {
  selectedService.value = null
}

const bookViaWhatsApp = (serviceTitle: string): void => {
  const phoneNumber = '6285815564801'
  const message = `Halo Wijaya Grup! Saya tertarik untuk konsultasi dan pemesanan layanan "${serviceTitle}". Mohon info detailnya.`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}
</script>

<template>
<section class="py-20 bg-white overflow-hidden" id="services-section">
  <div class="container mx-auto px-4">
    
    <div class="text-center mb-12 animate-fadeIn">
      <span class="text-sm font-['Oswald'] uppercase tracking-widest text-gray-500">What We Offer</span>
      <h2 class="text-4xl md:text-5xl font-['Oswald'] font-bold uppercase tracking-wider text-black mt-2">Layanan Kami</h2>
      <div class="w-20 h-1 bg-black mx-auto mt-4"></div>
      <p class="text-gray-600 max-w-2xl mx-auto mt-4 font-['Oswald']">
        Spesialisasi kami adalah mengabadikan energi, gerakan, dan emosi dalam setiap momen olahraga.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-200 animate-slideUp" style="animation-delay: 0.1s;">
        <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-['Oswald'] font-bold uppercase tracking-wide text-black mb-3">Foto Aksi</h3>
        <p class="text-gray-600 font-['Oswald'] leading-relaxed">
          Mengabadikan gerakan atlet dengan teknik high-speed dan komposisi dramatis.
        </p>
        <ul class="mt-4 space-y-2 text-sm text-gray-500 font-['Oswald']">
          <li class="flex items-center gap-2 text-black">✓ Shutter speed tinggi</li>
          <li class="flex items-center gap-2 text-black">✓ Komposisi dinamis</li>
          <li class="flex items-center gap-2 text-black">✓ Hasil tajam & berenergi</li>
        </ul>
      </div>
      
      <div class="bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-200 animate-slideUp" style="animation-delay: 0.2s;">
        <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-['Oswald'] font-bold uppercase tracking-wide text-black mb-3">Foto Tim/Group</h3>
        <p class="text-gray-600 font-['Oswald'] leading-relaxed">
          Sesi foto untuk tim sepakbola, basket, futsal, atau grup olahraga lainnya.
        </p>
        <ul class="mt-4 space-y-2 text-sm text-gray-500 font-['Oswald']">
          <li class="flex items-center gap-2 text-black">✓ Posisi profesional</li>
          <li class="flex items-center gap-2 text-black">✓ Hasil cetak kualitas tinggi</li>
          <li class="flex items-center gap-2 text-black">✓ Cocok untuk media sosial</li>
        </ul>
      </div>
      
      <div class="bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-200 animate-slideUp" style="animation-delay: 0.3s;">
        <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-['Oswald'] font-bold uppercase tracking-wide text-black mb-3">Event Olahraga</h3>
        <p class="text-gray-600 font-['Oswald'] leading-relaxed">
          Dokumentasi penuh untuk turnamen, kompetisi, atau event olahraga skala besar.
        </p>
        <ul class="mt-4 space-y-2 text-sm text-gray-500 font-['Oswald']">
          <li class="flex items-center gap-2 text-black">✓ Coverage penuh</li>
          <li class="flex items-center gap-2 text-black">✓ Hasil real-time</li>
          <li class="flex items-center gap-2 text-black">✓ Galeri online</li>
        </ul>
      </div>
      
      <div class="bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-200 animate-slideUp" style="animation-delay: 0.4s;">
        <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-['Oswald'] font-bold uppercase tracking-wide text-black mb-3">Foto Potret Atlet</h3>
        <p class="text-gray-600 font-['Oswald'] leading-relaxed">
          Sesi foto personal untuk atlet, dengan pencahayaan dramatis dan gaya editorial.
        </p>
        <ul class="mt-4 space-y-2 text-sm text-gray-500 font-['Oswald']">
          <li class="flex items-center gap-2 text-black">✓ Pencahayaan studio</li>
          <li class="flex items-center gap-2 text-black">✓ Retouching profesional</li>
          <li class="flex items-center gap-2 text-black">✓ Untuk portofolio atlet</li>
        </ul>
      </div>
      
      <div class="bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-200 animate-slideUp" style="animation-delay: 0.5s;">
        <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-6v6l5 3-.5 1-6-3.5V6h1.5z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-['Oswald'] font-bold uppercase tracking-wide text-black mb-3">Video & BTS</h3>
        <p class="text-gray-600 font-['Oswald'] leading-relaxed">
          Dokumentasi video pendek dan behind-the-scenes untuk konten promosi Anda.
        </p>
        <ul class="mt-4 space-y-2 text-sm text-gray-500 font-['Oswald']">
          <li class="flex items-center gap-2 text-black">✓ Video cinematic</li>
          <li class="flex items-center gap-2 text-black">✓ Editing profesional</li>
          <li class="flex items-center gap-2 text-black">✓ Siap untuk sosial media</li>
        </ul>
      </div>
      
      <div class="bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-200 animate-slideUp" style="animation-delay: 0.6s;">
        <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
          </svg>
        </div>
        <h3 class="text-2xl font-['Oswald'] font-bold uppercase tracking-wide text-black mb-3">Cetak & Album</h3>
        <p class="text-gray-600 font-['Oswald'] leading-relaxed">
          Hasil foto dicetak dengan kualitas premium dan dikemas dalam album eksklusif.
        </p>
        <ul class="mt-4 space-y-2 text-sm text-gray-500 font-['Oswald']">
          <li class="flex items-center gap-2 text-black">✓ Cetak fine art</li>
          <li class="flex items-center gap-2 text-black">✓ Album desain custom</li>
          <li class="flex items-center gap-2 text-black">✓ Bingkai foto</li>
        </ul>
      </div>
      
    </div>
    
    <!-- OTHER SERVICE SECTION (MATCHING OTHER CARDS STYLE) -->
    <div class="mt-16 animate-fadeIn bg-gray-100 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-lg animate-slideUp" style="animation-delay: 0.7s;">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <span class="text-sm font-['Oswald'] uppercase tracking-widest text-gray-500">Specialized Add-ons</span>
          <h3 class="text-3xl md:text-4xl font-['Oswald'] font-bold uppercase tracking-wider text-black mt-2">Other Services</h3>
          <p class="text-gray-600 font-['Oswald'] mt-1">Layanan khusus tambahan untuk melengkapi kebutuhan profesional klub & event Anda.</p>
        </div>
        
      </div>

      <!-- OTHER SERVICES CARDS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="service in otherServices"
          :key="service.id"
          @click="openServiceModal(service)"
          class="group bg-white rounded-2xl p-6 cursor-pointer border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="flex justify-between items-start mb-6">
              <div class="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition duration-300">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"/>
                </svg>
              </div>
              <span class="text-[10px] font-['Oswald'] uppercase tracking-widest bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full text-gray-600">
                {{ service.badge }}
              </span>
            </div>

            <h4 class="font-['Oswald'] text-xl font-bold uppercase tracking-wide text-black mb-2">
              {{ service.title }}
            </h4>
            <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed font-['Oswald']">
              {{ service.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-['Oswald'] uppercase tracking-wider text-black font-bold">
            <span>Lihat Detail</span>
            <span class="text-red-600 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>

    <!-- MODAL DETAIL OTHER SERVICE -->
    <Transition name="lightbox">
      <div
        v-if="selectedService"
        class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
        @click.self="closeServiceModal"
      >
        <div class="bg-white border border-gray-200 rounded-3xl max-w-xl w-full p-8 md:p-10 relative text-black shadow-2xl animate-fadeIn">
          
          <!-- Close button -->
          <button
            @click="closeServiceModal"
            class="absolute top-5 right-5 text-gray-400 hover:text-black transition"
            aria-label="Close modal"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Modal Header -->
          <span class="text-red-600 text-xs font-['Oswald'] uppercase tracking-[0.3em]">
            {{ selectedService.subtitle }}
          </span>
          <h3 class="text-2xl md:text-3xl font-['Oswald'] font-bold uppercase tracking-wide text-black mt-2">
            {{ selectedService.title }}
          </h3>

          <p class="text-gray-600 text-sm mt-4 leading-relaxed font-['Oswald']">
            {{ selectedService.description }}
          </p>

          <!-- Features List -->
          <div class="mt-6 pt-6 border-t border-gray-200">
            <h4 class="font-['Oswald'] text-sm uppercase tracking-widest text-gray-500 mb-3">
              Fasilitas & Keunggulan:
            </h4>
            <ul class="space-y-2.5 font-['Oswald'] text-sm">
              <li v-for="feat in selectedService.features" :key="feat" class="flex items-center gap-3 text-gray-800">
                <span class="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></span>
                {{ feat }}
              </li>
            </ul>
          </div>

          <!-- Action Button -->
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              @click="bookViaWhatsApp(selectedService.title)"
              class="flex-1 bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-['Oswald'] font-bold uppercase tracking-widest transition text-center shadow-lg"
            >
              Konsultasi via WhatsApp
            </button>
            <button
              @click="closeServiceModal"
              class="px-6 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 font-['Oswald'] uppercase tracking-widest text-sm text-black transition"
            >
              Tutup
            </button>
          </div>

        </div>
      </div>
    </Transition>

</template>

<style>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
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
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-slideUp {
    opacity: 0;
    animation: slideUp 0.6s ease-out forwards;
  }

  /* Lightbox / Modal Transition */
  .lightbox-enter-active,
  .lightbox-leave-active {
    transition: opacity 0.3s ease;
  }

  .lightbox-enter-from,
  .lightbox-leave-to {
    opacity: 0;
  }
</style>