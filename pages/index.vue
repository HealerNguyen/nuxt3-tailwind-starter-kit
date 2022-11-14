<script setup>
definePageMeta({
  fullWidth: true,
});

const events = reactive({
  capacity: 4,
  attending: ["Nguyễn Đức Tuấn"],
  spaceLeft: computed(() => {
    return events.capacity - events.attending.length;
  }),
});

const increaseCapacity = () => {
  events.capacity += 1;
};
</script>

<template>
  <div>
    <div>
      <Banner />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitButton />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitGrid />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitTypo />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitAlert />
    </div>

    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitBadge />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitButton />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitDropdown />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitGrid />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitImage />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitInput />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitMenus />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitModal />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitNavbar />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitPagination />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitPopover />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitProgressbar />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitTabs />
    </div>
    <div class="container mx-auto py-3 md:py-4 px-4 md:px-6">
      <KitTooltip />
    </div>
  </div>
</template>
