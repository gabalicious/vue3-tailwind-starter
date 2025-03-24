<template>
  <button type="button" :class="computedClasses" @click="handleClick">
    <slot>Click me!</slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

const props = defineProps<ButtonProps>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

// Compute classes based on the variant prop
const computedClasses = computed(() => {
  const baseClasses =
    'font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2'
  if (props.variant === 'secondary') {
    return `${baseClasses} bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400`
  }
  // Default to primary variant styling
  return `${baseClasses} bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400`
})

function handleClick(event: MouseEvent) {
  emit('click', event)
}
</script>
