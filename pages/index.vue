<script setup>
definePageMeta({
  fullWidth: true,
})

const events = reactive({
  capacity: 4,
  attending: ['Nguyễn Đức Tuấn'],
  spaceLeft: computed(() => {
    return events.capacity - events.attending.length
  }),
})

const increaseCapacity = () => {
  events.capacity += 1
}
</script>

<template>
  <div>
    <Banner />
    <!-- {{ events.spaceLeft }} -->
  </div>
</template>
