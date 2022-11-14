<script setup>
</script>
<template>
  <div>
    <h5 class="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-800">
      Alert
    </h5>
    <div class="relative flex w-1/4 flex-wrap items-stretch mb-3">
      <span
        class="
          z-10
          h-full
          leading-snug
          font-normal
          absolute
          text-center text-blueGray-300
          absolute
          bg-transparent
          rounded
          text-base
          items-center
          justify-center
          w-8
          pl-2
          py-1
        "
      >
        <i class="fas fa-lock"></i>
      </span>
      <input
        type="text"
        placeholder="Small Input"
        class="
          px-2
          py-1
          placeholder-blueGray-300
          text-blueGray-600
          relative
          bg-white bg-white
          rounded
          text-sm
          border border-blueGray-300
          outline-none
          focus:outline-none focus:shadow-outline
          w-full
          pl-10
        "
      />
    </div>
  </div>
</template>