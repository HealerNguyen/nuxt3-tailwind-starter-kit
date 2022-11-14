<script setup>
import { createPopper } from "@popperjs/core";

const popoverShow = ref(false);
const btnRefs = ref(null);
const popoverRefs = ref(null);

const toggleTooltip = () => {
  if (popoverShow.value) {
    popoverShow.value = false;
  } else {
    popoverShow.value = true;
    createPopper(btnRefs, popoverRefs, {
      placement: "left",
    });
  }
};
</script>
<template>
  <div>
    <h5 class="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-800">
      Tooltip
    </h5>
    <div class="flex flex-wrap">
      <div class="w-full text-center">
        <button
          ref="btnRefs"
          v-on:mouseenter="toggleTooltip()"
          v-on:mouseleave="toggleTooltip()"
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
          left
        </button>
        <div
          ref="popoverRefs"
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
              tooltip title
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