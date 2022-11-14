<script setup>
import { createPopper } from "@popperjs/core";
const popoverShow = ref(false);
const btnRef = ref(null);
const popoverRef = ref(null);

const togglePopover = () => {
  if (popoverShow.value) {
    popoverShow.value = false;
  } else {
    popoverShow.value = true;
    createPopper(btnRef.value, popoverRef.value, {
      placement: "right",
    });
  }
};
</script>
<template>
  <div>
    <h5 class="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-800">
      Popover
    </h5>
    <div class="flex flex-wrap">
      <div class="w-full text-center">
        <button
          ref="btnRef"
          v-on:click="togglePopover()"
          class="
            bg-emerald-500
            text-white
            active:bg-emerald-600
            font-bold
            uppercase
            text-sm
            px-6
            py-3
            rounded
            shadow
            hover:shadow-lg
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
          type="button"
        >
          left emerald
        </button>
        <div
          ref="popoverRef"
          v-bind:class="{ hidden: !popoverShow, block: popoverShow }"
          class="
            bg-emerald-600
            border-0
            mr-3
            block
            z-50
            font-normal
            leading-normal
            text-sm
            max-w-xs
            text-left
            no-underline
            break-words
            rounded-lg
          "
        >
          <div>
            <div
              class="
                bg-emerald-600
                text-white
                opacity-75
                font-semibold
                p-3
                mb-0
                border-b border-solid border-blueGray-100
                uppercase
                rounded-t-lg
              "
            >
              emerald popover title
            </div>
            <div class="text-white p-3">
              And here's some amazing content. It's very engaging. Right?
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>