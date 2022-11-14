<script setup>
import { createPopper } from "@popperjs/core";

let dropdownPopoverShow = ref(false);
let btnDropdownRef = ref(null);
let popoverDropdownRef = ref(null);

const toggleDropdown = () => {
  if (dropdownPopoverShow.value) {
    dropdownPopoverShow.value = false;
  } else {
    dropdownPopoverShow.value = true;
    createPopper(btnDropdownRef.value, popoverDropdownRef.value, {
      placement: "bottom-start",
    });
  }
};
</script>
<template>
  <div>
    <h5 class="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-800">
      Dropdown
    </h5>
    <div class="flex flex-wrap">
      <div class="w-full sm:w-6/12 md:w-4/12 px-4">
        <div class="relative inline-flex align-middle w-full">
          <button
            class="
              text-white
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
              bg-emerald-500
              active:bg-emerald-600
              ease-linear
              transition-all
              duration-150
            "
            type="button"
            ref="btnDropdownRef"
            @click="toggleDropdown()"
          >
            Dropdown
          </button>
          <div
            ref="popoverDropdownRef"
            class="
              bg-emerald-500
              text-base
              z-50
              float-left
              py-2
              list-none
              text-left
              rounded
              shadow-lg
              mt-1
              min-w-48
            "
            v-bind:class="{
              hidden: !dropdownPopoverShow,
              block: dropdownPopoverShow,
            }"
          >
            <a
              href="#pablo"
              class="
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-no-wrap
                bg-transparent
                text-white
              "
            >
              Action
            </a>
            <a
              href="#pablo"
              class="
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-no-wrap
                bg-transparent
                text-white
              "
            >
              Another action
            </a>
            <a
              href="#pablo"
              class="
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-no-wrap
                bg-transparent
                text-white
              "
            >
              Something else here
            </a>
            <div
              class="
                h-0
                my-2
                border border-solid border-t-0 border-blueGray-800
                opacity-25
              "
            ></div>
            <a
              href="#pablo"
              class="
                text-sm
                py-2
                px-4
                font-normal
                block
                w-full
                whitespace-no-wrap
                bg-transparent
                text-white
              "
            >
              Seprated link
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>