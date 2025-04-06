<script setup>
import Chip from '@/volt/Chip.vue'
</script>

<template>
  <div class="flex flex-col gap-2 justify-center items-center p-2 text-xl font-bold bg-primary-300 text-primary-800">
    <div>Hello World</div>
    <div>
      <Chip removable="true">Hello</Chip>
    </div>
  </div>
</template>
