<script setup>
definePageMeta({ layout: false })

const target = new Date('2028-04-29T12:00:00+01:00')

const countdown = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

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

    if (timer) {
      window.clearInterval(timer)
    }

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
  document
    .querySelector('#convite')
    ?.scrollIntoView({ behavior: 'smooth' })
}

const saveDate = () => {
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rita e Pedro//Casamento//PT
BEGIN:VEVENT
UID:rita-pedro-20280429@casamento
DTSTAMP:20260831T100000Z
DTSTART:20280429T110000Z
SUMMARY:Casamento Rita & Pedro
LOCATION:Igreja Matriz de Nevogilde, Lousada
DESCRIPTION:Cerimónia religiosa seguida de copo de água na Quinta da Felicidade – Locus Amoenus, Vandoma.
END:VEVENT
END:VCALENDAR`

  const blob = new Blob([ics], {
    type: 'text/calendar;charset=utf-8'
  })

  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')

  a.href = url
  a.download = 'casamento-rita-pedro-29-04-2028.ics'
  a.click()

  URL.revokeObjectURL(url)
}

onMounted(() => {
  updateCountdown()

  timer = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) {
    window.clearInterval(timer)
  }
})
</script>

<template>
  <div class="wedding-page">
    <section class="hero">
      <div
        class="botanical botanical-a"
        aria-hidden="true"
      >
        <span></span>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

      <div
        class="botanical botanical-b"
        aria-hidden="true"
      >
        <span></span>
        <i></i>
        <i></i>
        <i></i>
      </div>

      <div class="hero-inner reveal">
        <p class="eyebrow">
          Temos o prazer de vos convidar
        </p>

        <img
          src="/logo-casamento.png"
          alt="Monograma do casamento de Rita e Pedro"
          class="wedding-logo"
        />

        <p class="pretitle">
          para celebrar o casamento de
        </p>

        <h1>
          <span>Rita</span>
          <b>&</b>
          <span>Pedro</span>
        </h1>

        <div
          class="date-lockup"
          aria-label="Sábado, 29 de abril de 2028"
        >
          <span>SÁBADO</span>

          <strong>29</strong>

          <span>
            ABRIL
            <br />
            2028
          </span>
        </div>

        <p class="hero-time">
          12:00H · NEVOGILDE
        </p>

        <button
          class="scroll-cue"
          type="button"
          aria-label="Ver convite"
          @click="scrollToInvite"
        >
          <span>descobrir</span>
          <i>↓</i>
        </button>
      </div>
    </section>

    <main id="convite">
      <section class="intro section-pad">
        <p class="script">
          Um dia. Uma promessa. Para sempre.
        </p>

        <h2>
          Queremos viver este momento convosco.
        </h2>

        <p>
          Entre abraços, sorrisos e memórias que ficam,
          esperamos por vocês para celebrar o início deste novo capítulo.
        </p>

        <div
          class="countdown-wrap"
          aria-live="polite"
        >
          <p class="countdown-kicker">
            Contagem decrescente
          </p>

          <p
            v-if="isWeddingDay"
            class="countdown-message"
          >
            Chegou o nosso dia 🤍
          </p>

          <template v-else>
            <div class="countdown-primary">
              <strong>
                {{ countdown.days }}
              </strong>

              <span>
                {{ countdown.days === 1 ? 'dia' : 'dias' }}
                para o nosso “sim”
              </span>
            </div>

            <div
              class="countdown-details"
              aria-label="Tempo restante até ao casamento"
            >
              <div>
                <strong>
                  {{ pad(countdown.hours) }}
                </strong>
                <span>horas</span>
              </div>

              <i>:</i>

              <div>
                <strong>
                  {{ pad(countdown.minutes) }}
                </strong>
                <span>min</span>
              </div>

              <i>:</i>

              <div>
                <strong>
                  {{ pad(countdown.seconds) }}
                </strong>
                <span>seg</span>
              </div>
            </div>
          </template>
        </div>
      </section>

      <section class="details section-pad">
        <div class="section-heading">
          <span>01</span>

          <p>O nosso dia</p>

          <h2>29 · 04 · 2028</h2>
        </div>

        <div class="detail-grid">
          <article class="detail-card">
            <div class="line-icon">
              ♢
            </div>

            <p class="label">
              CERIMÓNIA RELIGIOSA
            </p>

            <h3>
              Igreja Matriz
              <br />
              de Nevogilde
            </h3>

            <p>
              Sábado · 12:00H
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Igreja+Matriz+de+Nevogilde+Lousada"
              target="_blank"
              rel="noopener"
            >
              Ver localização ↗
            </a>
          </article>

          <div class="connector">
            <span></span>
            <b>depois</b>
            <span></span>
          </div>

          <article class="detail-card">
            <div class="line-icon">
              ◇
            </div>

            <p class="label">
              COPO DE ÁGUA
            </p>

            <h3>
              Quinta da Felicidade
              <br />

              <em>
                — Locus Amoenus —
              </em>
            </h3>

            <p>
              R. Camilo Castelo Branco 286
              <br />
              4585, Vandoma
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Quinta+da+Felicidade+Locus+Amoenus+Vandoma"
              target="_blank"
              rel="noopener"
            >
              Ver localização ↗
            </a>
          </article>
        </div>
      </section>

      <section class="save-date section-pad">
        <div
          class="mini-leaf"
          aria-hidden="true"
        >
          ⌁
        </div>

        <p class="eyebrow">
          SAVE THE DATE
        </p>

        <h2>
          Reserva este dia
          <br />
          para nós.
        </h2>

        <p>
          29 de abril de 2028 · 12:00H
        </p>

        <button
          type="button"
          @click="saveDate"
        >
          Adicionar ao calendário
        </button>
      </section>

      <section class="rsvp section-pad">
        <p class="script">
          Esperamos por vocês
        </p>

        <h2>
          <span>A vossa presença tornará</span>
          <span>este dia ainda</span>
          <span>mais especial.</span>
        </h2>

        <p class="rsvp-text">
          Por favor, confirma a tua presença até
        </p>

        <strong class="rsvp-date">
          01 · 03 · 2028
        </strong>
      </section>
    </main>

    <footer>
      <img
        src="/logo-casamento.png"
        alt="Monograma de Rita e Pedro"
      />

      <p>
        Rita
        <span>&</span>
        Pedro
      </p>

      <small>
        29 · 04 · 2028
      </small>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;

  display: flex;
  align-items: center;
  justify-content: center;

  /*
   * Mantém os elementos botânicos controlados,
   * mas damos espaço suficiente ao botão no fundo.
   */
  overflow: hidden;

  .hero-inner {
    position: relative;
    z-index: 2;

    width: 100%;
    min-height: 100vh;
    min-height: 100svh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    /*
     * Espaço extra em baixo para o descobrir
     * nunca colidir com o conteúdo.
     */
    padding: 60px 24px 130px;
  }

  .scroll-cue {
    position: absolute;
    z-index: 20;

    left: 50%;

    /*
     * Em vez de ficar demasiado encostado,
     * damos margem suficiente para a animação
     * da seta nunca ser cortada.
     */
    bottom: 34px;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 7px;

    min-width: max-content;
    min-height: 52px;

    margin: 0;
    padding: 4px 12px 8px;

    background: transparent;
    border: 0;
    outline: none;

    color: inherit;
    cursor: pointer;

    overflow: visible;

    span {
      display: block;

      font-size: 0.7rem;
      line-height: 1.2;

      text-transform: uppercase;
      letter-spacing: 0.22em;

      white-space: nowrap;
    }

    i {
      display: block;

      margin: 0;

      font-size: 1.15rem;
      line-height: 1;

      font-style: normal;

      /*
       * Movimento menor para não aproximar
       * demasiado a seta do limite inferior.
       */
      animation: discoverArrow 1.8s ease-in-out infinite;
    }
  }
}

.rsvp {
  text-align: center;

  .script {
    margin-bottom: 20px;
  }

  h2 {
    max-width: 820px;
    margin: 0 auto 32px;

    line-height: 1.12;

    span {
      display: block;
    }
  }

  .rsvp-text {
    max-width: 420px;

    margin: 0 auto 12px;

    line-height: 1.6;
  }

  .rsvp-date {
    display: block;

    font-size: 1.3rem;
    font-weight: 600;

    line-height: 1;

    letter-spacing: 0.12em;

    white-space: nowrap;
  }
}

@keyframes discoverArrow {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(4px);
  }
}

/* TABLET / MOBILE */
@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
    min-height: 100svh;

    .hero-inner {
      min-height: 100vh;
      min-height: 100svh;

      padding:
        40px
        20px
        130px;
    }

    .scroll-cue {
      /*
       * 28px mínimos +
       * safe-area do iPhone quando existir.
       */
      bottom: calc(
        28px + env(safe-area-inset-bottom, 0px)
      );

      min-height: 50px;

      padding-bottom: 6px;

      span {
        font-size: 0.65rem;

        line-height: 1.2;

        letter-spacing: 0.2em;
      }

      i {
        font-size: 1.1rem;
      }
    }
  }

  .rsvp {
    padding-left: 24px;
    padding-right: 24px;

    .script {
      margin-bottom: 18px;
    }

    h2 {
      width: 100%;
      max-width: 360px;

      margin: 0 auto 28px;

      font-size: clamp(2rem, 9vw, 2.75rem);

      line-height: 1.06;

      text-wrap: balance;

      span {
        display: block;
      }
    }

    .rsvp-text {
      max-width: 285px;

      margin: 0 auto 14px;

      font-size: 0.95rem;

      line-height: 1.55;

      text-wrap: balance;
    }

    .rsvp-date {
      font-size: 1.15rem;

      letter-spacing: 0.08em;
    }
  }
}

/* MOBILE */
@media (max-width: 480px) {
  .hero {
    .hero-inner {
      padding:
        32px
        18px
        125px;
    }

    .scroll-cue {
      bottom: calc(
        24px + env(safe-area-inset-bottom, 0px)
      );

      gap: 6px;

      min-height: 48px;

      padding:
        4px
        10px
        7px;

      span {
        font-size: 0.62rem;

        letter-spacing: 0.19em;
      }

      i {
        font-size: 1.05rem;
      }
    }
  }

  .rsvp {
    padding-left: 20px;
    padding-right: 20px;

    h2 {
      max-width: 330px;

      margin-bottom: 26px;

      font-size: clamp(1.9rem, 9.5vw, 2.4rem);
    }

    .rsvp-text {
      max-width: 260px;

      font-size: 0.92rem;
    }

    .rsvp-date {
      font-size: 1.1rem;

      letter-spacing: 0.07em;
    }
  }
}

/* MOBILE PEQUENO */
@media (max-width: 380px) {
  .hero {
    .hero-inner {
      padding:
        28px
        16px
        120px;
    }

    .scroll-cue {
      bottom: calc(
        22px + env(safe-area-inset-bottom, 0px)
      );

      min-height: 46px;

      span {
        font-size: 0.6rem;

        letter-spacing: 0.18em;
      }

      i {
        font-size: 1rem;
      }
    }
  }

  .rsvp {
    padding-left: 18px;
    padding-right: 18px;

    .script {
      margin-bottom: 16px;
    }

    h2 {
      max-width: 300px;

      margin-bottom: 24px;

      font-size: 1.95rem;

      line-height: 1.08;
    }

    .rsvp-text {
      max-width: 245px;

      font-size: 0.9rem;
    }

    .rsvp-date {
      font-size: 1.02rem;

      letter-spacing: 0.055em;
    }
  }
}
</style>