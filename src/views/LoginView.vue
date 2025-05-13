<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

// form data
const formData = ref({
  email: '',
  password: '',
})

// variables
const isPswShow = ref(false)
const errMsg = ref('')
const { token, error, loading, login } = useAuth()
//

//

/**------- Login -------*/

const handleLogin = async () => {
  login(formData.value.email, formData.value.password)
  console.log('token', token.value)
  console.log('error', error.value)
  console.log('loading', loading.value)
}

/**------- Others -------*/

// toggle password visibility
const togglePswVisibility = () => {
  isPswShow.value = !isPswShow.value
}

// testing
// const testing = (e) => {
//   console.log('e', e.target.value)
//   console.log('formData', formData.value)
// }

// console.log('formData', formData)
</script>

<template>
  <!-- login -->
  <div class="login bg-gray-50">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <!-- 1 -->
      <div class="flex flex-col justify-center items-center gap-5">
        <div class="flex flex-col items-center">
          <div class="">
            <img class="w-[120px]" src="../assets/imgs/logo-color.svg" alt="" />
          </div>
          <div class="text-3xl lg:text-4xl text-black font-bold pt-2">Welcome Back</div>
          <div class="text-gray-light">Welcome back, please enter your details.</div>

          <!-- input group -->
          <div class="input-group pt-10 w-full flex flex-col">
            <div class="email">
              <v-text-field
                @input="validateiInput(formData.email)"
                clearable
                label="Email"
                variant="outlined"
                v-model="formData.email"
                base-color="isErrLogin ? 'gray' : 'red'"
              ></v-text-field>
            </div>

            <div class="password relative cursor-pointer">
              <v-text-field
                class="cursor-pointer"
                label="Password"
                :type="isPswShow ? 'text' : 'password'"
                variant="outlined"
                v-model="formData.password"
              ></v-text-field>
              <div
                class="absolute bottom-1/2 -translate-x-1/2 right-2 cursor-pointer"
                @click="togglePswVisibility()"
              >
                <v-icon
                  :icon="isPswShow ? 'mdi-eye' : 'mdi-eye-off'"
                  class="cursor-pointer"
                ></v-icon>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center w-full relative bottom-5 right-2">
            <!-- remember me -->
            <div><v-checkbox label="Remember me" color="primary" size="small"></v-checkbox></div>
            <!-- register -->
            <!-- <div><p class="underline text-sm">Don't have an account yet?</p></div> -->
          </div>

          <!-- err msg -->
          <div class="w-full">
            <div v-if="errMsg" class="text-red-500 text-sm relative bottom-5 text-start">
              {{ errMsg }}
            </div>
          </div>

          <!-- btn -->
          <div class="w-full">
            <v-btn variant="tonal" @click="handleLogin()" size="large" class="w-full bg-primary">
              <p class="cursor-pointer">Login</p>
            </v-btn>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="relative hidden lg:block">
        <div class="w-full h-[100vh] object-cover overflow-clip">
          <img
            src="../assets/imgs/dashboard-1.png"
            alt=""
            class="blur-sm w-full translate scale-[1.2]"
          />
        </div>
        <div
          class="absolute inset-0 bg-[radial-gradient(circle,_rgba(80,80,80,0.5)_30%,_rgba(50,50,50,0.8)_60%)]"
        ></div>
        <!-- slogan -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5"
        >
          <img class="w-[230px]" src="../assets/imgs/logo-white.svg" alt="" />
          <div class="slogan">
            <p class="text-center w-full text-white/90 text-[15px] drop-shadow-sm">
              Make informed visual design by our system <br />
              We deliver on our promises with our values in mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
