<script setup>
</script>
<template>
  <div>
    <h5 class="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-800">
      Progressbar
    </h5>
    <div class="relative pt-1">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span
            class="
              text-xs
              font-semibold
              inline-block
              py-1
              px-2
              uppercase
              rounded-full
              text-emerald-600
              bg-emerald-200
            "
          >
            Task in progress
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-emerald-600">
            50%
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-200">
        <div
          style="width: 10%"
          class="
            shadow-none
            flex flex-col
            text-center
            whitespace-nowrap
            text-white
            justify-center
            bg-teal-500
          "
        ></div>
        <div
          style="width: 15%"
          class="
            shadow-none
            flex flex-col
            text-center
            whitespace-nowrap
            text-white
            justify-center
            bg-indigo-500
          "
        ></div>
        <div
          style="width: 25%"
          class="
            shadow-none
            flex flex-col
            text-center
            whitespace-nowrap
            text-white
            justify-center
            bg-emerald-500
          "
        ></div>
      </div>
    </div>
  </div>
</template>