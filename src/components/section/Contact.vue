```vue
<script setup lang="ts">
import { ref } from 'vue'

interface ContactInfo {
  title: string
  value: string
  description: string
  icon: string
  link: string
}

const contactInfo: ContactInfo[] = [
  {
    title: 'EMAIL',
    value: 'Email Kami',
    description: 'Hubungi kami melalui email',
    icon: '✉',
    link: 'mailto:email@domain.com',
  },
  {
    title: 'WHATSAPP',
    value: 'WhatsApp',
    description: 'Diskusikan kebutuhan Anda',
    icon: '◉',
    link: 'https://wa.me/6285815564801',
  },
  {
    title: 'INSTAGRAM',
    value: 'Instagram',
    description: 'Lihat karya terbaru kami',
    icon: '◎',
    link: 'https://www.instagram.com/myhome.photosports?dlrf=MWYxam81d2hjYndqdA%3D%3D&wa_status_inline=true',
  },
]

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = (): void => {
  const phoneNumber = '6285815564801'

  const message = `
Halo Wijaya Grup!

Nama: ${form.value.name}
Email: ${form.value.email}
Subjek: ${form.value.subject}

Pesan:
${form.value.message}
  `

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section id="contact-section" class="bg-white py-20 overflow-hidden">

    <div class="container mx-auto px-4">

      <!-- SECTION HEADER -->
      <div class="text-center mb-16 animate-fadeIn">

        <span class="font-['Oswald'] text-sm uppercase tracking-[0.3em] text-gray-500">
          Get In Touch
        </span>

        <h2 class="font-['Oswald'] text-4xl md:text-6xl font-bold uppercase tracking-wider text-black mt-3">
          Hubungi Kami
        </h2>

        <div class="w-20 h-1 bg-black mx-auto mt-5"></div>

        <p class="text-gray-500 max-w-xl mx-auto mt-5 leading-relaxed">
          Punya proyek atau kebutuhan dokumentasi olahraga?
          Mari bekerja sama dan abadikan setiap momen berharga.
        </p>

      </div>


      <!-- CONTACT CONTENT -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

        <!-- LEFT: CONTACT INFORMATION -->
        <div class="lg:col-span-2 bg-black text-white rounded-2xl p-8 md:p-10 relative overflow-hidden">

          <!-- Decoration -->
          <div class="absolute -right-16 -top-16 w-64 h-64 border-[30px] border-white/5 rounded-full"></div>

          <div class="relative z-10">

            <span class="text-gray-400 font-['Oswald'] text-sm uppercase tracking-widest">
              Contact Information
            </span>

            <h3 class="font-['Oswald'] text-3xl md:text-4xl font-bold uppercase mt-4 leading-tight">
              Let's Work
              <span class="text-gray-400">Together.</span>
            </h3>

            <p class="text-gray-400 mt-5 leading-relaxed text-sm">
              Kami siap membantu kebutuhan fotografi dan dokumentasi
              olahraga Anda. Jangan ragu untuk menghubungi tim kami.
            </p>


            <!-- Contact List -->
            <div class="mt-12 space-y-8">

              <a
                v-for="contact in contactInfo"
                :key="contact.title"
                :href="contact.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-5 group"
              >

                <div class="w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center text-xl group-hover:bg-white group-hover:text-black transition duration-300">
                  {{ contact.icon }}
                </div>

                <div>
                  <span class="text-xs text-gray-500 font-['Oswald'] tracking-widest">
                    {{ contact.title }}
                  </span>

                  <h4 class="font-['Oswald'] font-bold uppercase text-lg group-hover:text-gray-400 transition">
                    {{ contact.value }}
                  </h4>

                  <p class="text-xs text-gray-400">
                    {{ contact.description }}
                  </p>
                </div>

              </a>

            </div>


            <!-- Bottom Decoration -->
            <div class="mt-16 pt-6 border-t border-white/20 flex justify-between items-center">

              <span class="font-['Oswald'] text-xs tracking-widest text-gray-500 uppercase">
                Wijaya Grup
              </span>

              <span class="font-['Oswald'] text-4xl font-bold text-white/10">
                01
              </span>

            </div>

          </div>

        </div>


        <!-- RIGHT: CONTACT FORM -->
        <div class="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">

          <div class="mb-10">

            <span class="font-['Oswald'] text-sm uppercase tracking-widest text-gray-500">
              Send Us A Message
            </span>

            <h3 class="font-['Oswald'] text-3xl md:text-4xl font-bold uppercase text-black mt-2">
              Kirim Pesan
            </h3>

            <p class="text-gray-500 text-sm mt-3">
              Isi formulir di bawah ini untuk memulai konsultasi bersama kami.
            </p>

          </div>


          <form @submit.prevent="handleSubmit" class="space-y-6">

            <!-- Name & Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label for="name" class="block font-['Oswald'] text-sm font-bold uppercase tracking-wider text-black mb-2">
                  Nama Lengkap
                </label>

                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  required
                  class="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                />
              </div>


              <div>
                <label for="email" class="block font-['Oswald'] text-sm font-bold uppercase tracking-wider text-black mb-2">
                  Email
                </label>

                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  class="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                />
              </div>

            </div>


            <!-- Subject -->
            <div>

              <label for="subject" class="block font-['Oswald'] text-sm font-bold uppercase tracking-wider text-black mb-2">
                Subjek
              </label>

              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              >
                <option value="" disabled>Pilih kebutuhan layanan</option>
                <option value="Foto Aksi">Foto Aksi</option>
                <option value="Foto Tim / Group">Foto Tim / Group</option>
                <option value="Event Olahraga">Event Olahraga</option>
                <option value="Foto Potret Atlet">Foto Potret Atlet</option>
                <option value="Video & BTS">Video & BTS</option>
                <option value="Cetak & Album">Cetak & Album</option>
                <option value="Layanan Lainnya">Layanan Lainnya</option>
              </select>

            </div>


            <!-- Message -->
            <div>

              <label for="message" class="block font-['Oswald'] text-sm font-bold uppercase tracking-wider text-black mb-2">
                Pesan Anda
              </label>

              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Ceritakan kebutuhan dokumentasi Anda..."
                required
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-4 text-sm outline-none resize-none focus:border-black focus:ring-1 focus:ring-black transition"
              ></textarea>

            </div>


            <!-- Submit -->
            <button
              type="submit"
              class="group w-full md:w-auto flex items-center justify-center gap-4 bg-black text-white px-10 py-4 rounded-lg font-['Oswald'] font-bold uppercase tracking-widest hover:bg-gray-800 transition duration-300"
            >
              Kirim Pesan

              <svg
                class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>

            </button>

            <p class="text-xs text-gray-400">
              Pesan akan diteruskan melalui WhatsApp.
            </p>

          </form>

        </div>

      </div>


      <!-- BOTTOM CTA -->
      <div class="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <p class="font-['Oswald'] text-sm uppercase tracking-widest text-gray-500">
          Wijaya Grup — Sports Photography & Documentation
        </p>

        <span class="font-['Oswald'] text-sm font-bold uppercase tracking-widest text-black">
          Capture The Moment. Tell The Story.
        </span>

      </div>

    </div>

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
</style>
```