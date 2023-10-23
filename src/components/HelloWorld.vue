<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ t('welcome') }}</h1>
  </div>
</template>
