
<script setup lang="ts">
</script>

<template>
  <section id="about-section" class="py-20 md:py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

        <!-- Image -->
        <div class="md:w-1/2 relative group">
          <div class="absolute -bottom-3 -right-3 w-full h-full border-2 border-black rounded-2xl"></div>

          <img
            src="/Assets/about.jpeg"
            alt="Tentang Wijaya Group"
            class="relative rounded-2xl shadow-xl w-full h-[350px] md:h-[480px] object-cover transition-transform duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1"
          />
        </div>

        <!-- Content -->
        <div class="md:w-1/2">

          <span class="text-sm font-bold uppercase tracking-[0.25em] text-gray-500 font-['Oswald']">
            Who We Are
          </span>

          <h2 class="text-4xl md:text-5xl font-['Oswald'] font-bold uppercase tracking-wide mt-3 mb-4 text-black">
            Tentang Wijaya Group
          </h2>

          <div class="w-20 h-1 bg-black mb-7"></div>

          <p class="text-gray-700 text-base md:text-lg leading-relaxed mb-4 font-['Oswald']">
            Wijaya Group adalah jasa foto olahraga profesional yang berfokus
            pada mengabadikan momen terbaik para atlet, tim, dan event olahraga.
          </p>

          <p class="text-gray-700 text-base md:text-lg leading-relaxed mb-7 font-['Oswald']">
            Kami hadir untuk membantu atlet dan tim olahraga memiliki
            dokumentasi visual berkualitas tinggi dengan hasil yang cinematic
            dan penuh energi.
          </p>

          <!-- Statistics -->
          <div class="grid grid-cols-3 gap-3 md:gap-4 text-center">

            <div class="bg-gray-100 p-4 md:p-5 rounded-xl border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group">
              <p class="text-3xl md:text-4xl font-['Oswald'] font-bold text-black group-hover:text-white">
                50+
              </p>
              <p class="text-xs md:text-sm text-gray-600 group-hover:text-gray-300 font-['Oswald'] uppercase tracking-wider mt-1">
                Proyek
              </p>
            </div>

            <div class="bg-gray-100 p-4 md:p-5 rounded-xl border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group">
              <p class="text-3xl md:text-4xl font-['Oswald'] font-bold text-black group-hover:text-white">
                98%
              </p>
              <p class="text-xs md:text-sm text-gray-600 group-hover:text-gray-300 font-['Oswald'] uppercase tracking-wider mt-1">
                Kepuasan
              </p>
            </div>

            <div class="bg-gray-100 p-4 md:p-5 rounded-xl border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group">
              <p class="text-3xl md:text-4xl font-['Oswald'] font-bold text-black group-hover:text-white">
                4.9
              </p>
              <p class="text-xs md:text-sm text-gray-600 group-hover:text-gray-300 font-['Oswald'] uppercase tracking-wider mt-1">
                Rating
              </p>
            </div>

          </div>

          <!-- Button -->
          <a
            href="#contact"
            class="inline-flex items-center gap-3 bg-black text-white px-8 py-3.5 rounded-full font-semibold font-['Oswald'] uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-all duration-300 mt-7 group"
          >
            Hubungi Kami

            <svg
              class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-7-7 7 7-7 7"
              />
            </svg>
          </a>

        </div>
      </div>
    </div>
  </section>
</template>
