<template>
  <div id="Register">
    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-black p-8 shadow rounded mb-6">
          <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking!</h1>

          <div class="mb-4">
            <TextInput
                label="First Name"
                :label-color="false"
                placeholder="John"
                v-model:input="email"
                input-type="text"
                error="This is a test error"
            />
          </div>
          <div class="mb-4">
            <TextInput
                label="Password"
                :label-color="false"
                placeholder="password123"
                v-model:input="password"
                input-type="password"
                error="This is a test error"
            />
          </div>
          <button type="submit" class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide">
            Register
          </button>
        </div>

        <p class="text-center text-md text-gray-900">
          Don't have an account yet?
          <router-link to="register" class="text-blue-500 no-underline hover:underline">
            Register
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextInput from "@/components/global/TextInput";
import {ref} from "vue";

let email = ref(null)
let password = ref(null)
</script>

<style>
</style>
