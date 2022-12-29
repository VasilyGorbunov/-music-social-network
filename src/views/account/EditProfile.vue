<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl">Edit Profile</div>
    <div class="bg-green-500 w-full h-1"></div>

    <CropperModal
        v-if="showModal"
        :min-aspect-ratio-prop="{width:8, height:8}"
        :max-aspect-ratio-prop="{width:8, height:8}"
        @croppedImageData="setCroppedImageData"
        @showModal="showModal = false"
    />

    {{ image }}

    <div class="flex flex-wrap mt-4 m-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="First Name"
            placeholder="John"
            input-type="text"
            v-model:input="firstName"
            error="This is a test error!"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Last Name"
            placeholder="Doe"
            input-type="text"
            v-model:input="lastName"
            error="This is a test error!"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 m-6">
      <div class="w-full md:w-1/2 px-3">
        <TextInput
            label="Location"
            placeholder="Madrid, ES"
            input-type="text"
            v-model:input="location"
            error="This is a test error!"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 m-6">
      <div class="w-full md:w-1/2 px-3">
        <DisplayCropperButton
            label="Profile Image"
            btn-text="Update Profile Image"
            @showModal="showModal = true"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 m-6">
      <div class="w-full md:w-1/2 px-3">
        <CroppedImage
            label="Cropped Image"
            :image="image"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-4 m-6">
      <div class="w-full px-3">
        <TextArea
            label="Description"
            placeholder="Please enter some information here!"
            v-model="description"
            error="This is a test error!"
        />
      </div>
    </div>

    <div class="flex flex-wrap mt-8 m-6">
      <div class="w-full px-3">
        <SubmitFormButton btn-text="Update Profile"/>
      </div>
    </div>

  </div>
</template>

<script setup>

import TextInput from "@/components/global/TextInput";
import {ref} from "vue";
import DisplayCropperButton from "@/components/global/DisplayCropperButton";
import TextArea from "@/components/global/TextArea";
import SubmitFormButton from "@/components/global/SubmitFormButton";
import CropperModal from "@/components/global/CropperModal";
import CroppedImage from "@/components/global/CroppedImage";

let showModal = ref(false)

let firstName = ref(null)
let lastName = ref(null)
let location = ref(null)
let description = ref(null)
// let imageData = ref(null)
let image = ref(null)

const setCroppedImageData = data => {
  // imageData = data
  image.value = data.imageUrl
}
</script>

<style lang="scss">

</style>
