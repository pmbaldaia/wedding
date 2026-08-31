<script setup>
definePageMeta({ layout: false })

const target = new Date('2028-04-29T12:00:00+01:00')
const countdown = reactive({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const isWeddingDay = ref(false)
let timer

const updateCountdown = () => {
  const diff = target.getTime() - Date.now()

  if (diff <= 0) {
    countdown.days = 0
    countdown.hours = 0
    countdown.minutes = 0
    countdown.seconds = 0
    isWeddingDay.value = true
    if (timer) window.clearInterval(timer)
    return
  }

  isWeddingDay.value = false
  countdown.days = Math.floor(diff / 86400000)
  countdown.hours = Math.floor((diff % 86400000) / 3600000)
  countdown.minutes = Math.floor((diff % 3600000) / 60000)
  countdown.seconds = Math.floor((diff % 60000) / 1000)
}

const pad = (value) => String(value).padStart(2, '0')

const scrollToInvite = () => {
  document.querySelector('#convite')?.scrollIntoView({ behavior: 'smooth' })
}

const saveDate = () => {
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Rita e Pedro//Casamento//PT\nBEGIN:VEVENT\nUID:rita-pedro-20280429@casamento\nDTSTAMP:20260831T100000Z\nDTSTART:20280429T110000Z\nSUMMARY:Casamento Rita & Pedro\nLOCATION:Igreja Matriz de Nevogilde, Lousada\nDESCRIPTION:Cerimónia religiosa seguida de copo de água na Quinta da Felicidade – Locus Amoenus, Vandoma.\nEND:VEVENT\nEND:VCALENDAR`
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'casamento-rita-pedro-29-04-2028.ics'
  a.click()
  URL.revokeObjectURL(url)
}

onMounted(() => {
  updateCountdown()
  // Atualiza em tempo real. Assim, a contagem de dias muda automaticamente
  // quando passa um novo dia, sem o convidado ter de atualizar a página.
  timer = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})
</script>

<template>
  <div class="wedding-page">
    <section class="hero">
      <div class="botanical botanical-a" aria-hidden="true"><span></span><i></i><i></i><i></i><i></i></div>
      <div class="botanical botanical-b" aria-hidden="true"><span></span><i></i><i></i><i></i></div>

      <div class="hero-inner reveal">
        <p class="eyebrow">Temos o prazer de vos convidar</p>
        <img src="/logo-casamento.png" alt="Monograma do casamento de Rita e Pedro" class="wedding-logo" />
        <p class="pretitle">para celebrar o casamento de</p>
        <h1><span>Rita</span><b>&</b><span>Pedro</span></h1>

        <div class="date-lockup" aria-label="Sábado, 29 de abril de 2028">
          <span>SÁBADO</span><strong>29</strong><span>ABRIL<br>2028</span>
        </div>
        <p class="hero-time">12:00H · NEVOGILDE</p>

        <button class="scroll-cue" type="button" @click="scrollToInvite" aria-label="Ver convite">
          <span>descobrir</span><i>↓</i>
        </button>
      </div>
    </section>

    <main id="convite">
      <section class="intro section-pad">
        <p class="script">Um dia. Uma promessa. Para sempre.</p>
        <h2>Queremos viver este momento convosco.</h2>
        <p>Entre abraços, sorrisos e memórias que ficam, esperamos por vocês para celebrar o início deste novo capítulo.</p>

        <div class="countdown-wrap" aria-live="polite">
          <p class="countdown-kicker">Contagem decrescente</p>
          <p v-if="isWeddingDay" class="countdown-message">Chegou o nosso dia 🤍</p>
          <template v-else>
            <div class="countdown-primary">
              <strong>{{ countdown.days }}</strong>
              <span>{{ countdown.days === 1 ? 'dia' : 'dias' }} para o nosso “sim”</span>
            </div>
            <div class="countdown-details" aria-label="Tempo restante até ao casamento">
              <div><strong>{{ pad(countdown.hours) }}</strong><span>horas</span></div>
              <i>:</i>
              <div><strong>{{ pad(countdown.minutes) }}</strong><span>min</span></div>
              <i>:</i>
              <div><strong>{{ pad(countdown.seconds) }}</strong><span>seg</span></div>
            </div>
          </template>
        </div>
      </section>

      <section class="details section-pad">
        <div class="section-heading"><span>01</span><p>O nosso dia</p><h2>29 · 04 · 2028</h2></div>
        <div class="detail-grid">
          <article class="detail-card">
            <div class="line-icon">♢</div>
            <p class="label">CERIMÓNIA RELIGIOSA</p>
            <h3>Igreja Matriz<br>de Nevogilde</h3>
            <p>Sábado · 12:00H</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Igreja+Matriz+de+Nevogilde+Lousada" target="_blank" rel="noopener">Ver localização ↗</a>
          </article>

          <div class="connector"><span></span><b>depois</b><span></span></div>

          <article class="detail-card">
            <div class="line-icon">◇</div>
            <p class="label">COPO DE ÁGUA</p>
            <h3>Quinta da Felicidade<br><em>— Locus Amoenus —</em></h3>
            <p>R. Camilo Castelo Branco 286<br>4585, Vandoma</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Quinta+da+Felicidade+Locus+Amoenus+Vandoma" target="_blank" rel="noopener">Ver localização ↗</a>
          </article>
        </div>
      </section>

      <section class="save-date section-pad">
        <div class="mini-leaf" aria-hidden="true">⌁</div>
        <p class="eyebrow">SAVE THE DATE</p>
        <h2>Reserva este dia<br>para nós.</h2>
        <p>29 de abril de 2028 · 12:00H</p>
        <button type="button" @click="saveDate">Adicionar ao calendário</button>
      </section>

      <section class="rsvp section-pad">
        <p class="script">Esperamos por vocês</p>
        <h2>A vossa presença tornará<br>este dia ainda mais especial.</h2>
        <p>Por favor, confirma a tua presença até</p>
        <strong>01 · 03 · 2028</strong>
      </section>
    </main>

    <footer>
      <img src="/logo-casamento.png" alt="Monograma de Rita e Pedro" />
      <p>Rita <span>&</span> Pedro</p>
      <small>29 · 04 · 2028</small>
    </footer>
  </div>
</template>
