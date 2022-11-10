<script setup>
import { useAuthStore } from '~~/stores/auth'
const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/auth/login')
}
definePageMeta({
  fullWidth: false,
})
</script>

<template>
  <div>Me - <a class="cursor-pointer" @click="logout()">Logout</a></div>
</template>
