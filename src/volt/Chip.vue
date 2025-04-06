<template>
  <Chip unstyled :pt="theme" :removable="removable" :ptOptions="{
    mergeProps: ptViewMerge
  }">

    <template #removeicon="{ removeCallback, keydownCallback }">
      <TimesCircleIcon
        class="cursor-pointer text-base w-4 h-4 rounded-full text-surface-800 dark:text-surface-0 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
        @click="removeCallback" @keydown="keydownCallback" />
    </template>
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Chip>
</template>

<script setup lang="ts">
import TimesCircleIcon from '@primevue/icons/timescircle';
import Chip, { type ChipPassThroughOptions, type ChipProps } from 'primevue/chip';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ChipProps { }

interface Props {
  rounded?: boolean,
  removable?: boolean,

}

const props = withDefaults(defineProps<Props>(), {
  rounded: false,
  removable: false
})

const theme = ref<ChipPassThroughOptions>({
  root: ({ props }) => [
    'inline-flex items-center gap-2 px-3 py-2',
    'bg-surface-100 dark:bg-surface-800',
    'text-surface-800 dark:text-surface-0',
    'has-[img]:pt-1 has-[img]:pb-1',
    'p-removable:pe-2',
    {
      'rounded-2xl': props.rounded,
      'rounded-none': !props.rounded,
    }
  ],
  image: 'rounded-full w-8 h-8 -ms-2',
  icon: 'text-surface-800 dark:text-surface-0 text-base w-4 h-4'
});
</script>
