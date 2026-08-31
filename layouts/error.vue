<script setup lang="ts">
defineProps<{
  error?: {
    statusCode?: number
    statusMessage?: string
  }
}>()

const handleBack = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <main class="error-page">
    <div class="error-content">
      <img
        src="/logo-casamento.png"
        alt="Logo do casamento"
        class="wedding-logo"
      />

      <div class="error-code">
        <span>4</span>

        <div class="heart-zero">
          ♡
        </div>

        <span>4</span>
      </div>

      <h1 class="error-title">
        Parece que te perdeste...
      </h1>

      <p class="error-description">
        Esta página não chegou ao destino.
        <br />
        Mas não te preocupes, a festa continua.
      </p>

      <div class="separator">
        <span></span>
        <div class="separator-heart">♡</div>
        <span></span>
      </div>

      <div class="rings">
        <div class="ring ring-one"></div>
        <div class="ring ring-two"></div>
      </div>

      <button
        type="button"
        class="back-button"
        @click="handleBack"
      >
        Voltar ao início
        <span>→</span>
      </button>

      <p class="footer-message">
        Pedro & Rita · 29.04.2028
      </p>
    </div>
  </main>
</template>

<style scoped>
.error-page {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px 24px;

  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(89, 111, 86, 0.055),
      transparent 38%
    ),
    #faf9f5;

  color: #30352f;
  overflow: hidden;
}

.error-content {
  width: 100%;
  max-width: 680px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
}

.wedding-logo {
  width: 110px;
  height: 110px;

  object-fit: contain;

  margin-bottom: 38px;

  animation: logoEnter 0.8s ease both;
}

/* 404 */

.error-code {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  margin-bottom: 18px;

  color: #566d59;

  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(72px, 13vw, 122px);
  line-height: 0.9;

  font-weight: 400;

  letter-spacing: -8px;

  animation: fadeUp 0.8s 0.1s ease both;
}

.heart-zero {
  width: 88px;
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial, sans-serif;
  font-size: 78px;

  line-height: 1;

  margin: 0 5px;

  letter-spacing: 0;

  animation: heartBeat 2.6s ease-in-out infinite;
}

/* Text */

.error-title {
  margin: 0 0 15px;

  color: #30352f;

  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 400;

  letter-spacing: -0.8px;

  animation: fadeUp 0.8s 0.2s ease both;
}

.error-description {
  margin: 0;

  color: #737a72;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 1.75;

  animation: fadeUp 0.8s 0.3s ease both;
}

/* Separator */

.separator {
  width: 100%;
  max-width: 350px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 18px;

  margin: 32px 0 26px;

  animation: fadeUp 0.8s 0.4s ease both;
}

.separator span {
  flex: 1;

  height: 1px;

  background: #cbd2c8;
}

.separator-heart {
  color: #596f5c;

  font-size: 29px;
  line-height: 1;
}

/* Rings */

.rings {
  position: relative;

  width: 110px;
  height: 74px;

  margin-bottom: 32px;

  animation: fadeUp 0.8s 0.5s ease both;
}

.ring {
  position: absolute;

  width: 58px;
  height: 58px;

  border: 2px solid #596f5c;
  border-radius: 50%;

  top: 8px;
}

.ring-one {
  left: 16px;

  animation: ringLeft 3s ease-in-out infinite;
}

.ring-two {
  right: 16px;

  border-color: #8d9b8c;

  animation: ringRight 3s ease-in-out infinite;
}

/* Button */

.back-button {
  min-width: 220px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 16px;

  padding: 16px 28px;

  border: 0;
  border-radius: 999px;

  background: #596f5c;
  color: #fff;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 18px 35px rgba(89, 111, 92, 0.16);

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  animation: fadeUp 0.8s 0.6s ease both;
}

.back-button span {
  font-size: 20px;

  transition: transform 0.25s ease;
}

.back-button:hover {
  background: #485d4c;

  transform: translateY(-2px);

  box-shadow:
    0 22px 42px rgba(89, 111, 92, 0.22);
}

.back-button:hover span {
  transform: translateX(4px);
}

.back-button:active {
  transform: translateY(0);
}

/* Footer */

.footer-message {
  margin-top: 35px;

  color: #9a9f98;

  font-family: Georgia, "Times New Roman", serif;
  font-size: 13px;

  letter-spacing: 2.5px;
  text-transform: uppercase;

  animation: fadeUp 0.8s 0.7s ease both;
}

/* Animations */

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes logoEnter {
  from {
    opacity: 0;
    transform: scale(0.92);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes heartBeat {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
}

@keyframes ringLeft {
  0%,
  100% {
    transform: translateX(0) rotate(0);
  }

  50% {
    transform: translateX(5px) rotate(6deg);
  }
}

@keyframes ringRight {
  0%,
  100% {
    transform: translateX(0) rotate(0);
  }

  50% {
    transform: translateX(-5px) rotate(-6deg);
  }
}

/* Mobile */

@media (max-width: 640px) {
  .error-page {
    padding: 30px 22px;
  }

  .wedding-logo {
    width: 90px;
    height: 90px;

    margin-bottom: 34px;
  }

  .error-code {
    font-size: 82px;
    letter-spacing: -6px;
  }

  .heart-zero {
    width: 65px;
    height: 65px;

    font-size: 58px;
  }

  .error-title {
    font-size: 31px;
  }

  .error-description {
    font-size: 16px;
  }

  .separator {
    max-width: 270px;

    margin: 28px 0 24px;
  }

  .back-button {
    width: 100%;
    max-width: 280px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>