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
          <div class="input-group pt-3 w-full flex flex-col gap-5">
            <div class="email">
              <p class="text-dblack">Email</p>
              <input class="p-2 w-full border rounded-md bg-transparent" />
            </div>
            <div class="password">
              <p class="text-dblack">password</p>
              <input class="border p-1 w-full rounded-md" />
            </div>
          </div>
          <!-- remember me -->
          <div class="flex justify-between items-center gap-5">
            <div class="flex items-center">
              <input type="checkbox" id="remember" />
              <label for="remember">Remember me</label>
            </div>
            <div>
              <p>Don't have an account yet?</p>
            </div>
          </div>

          <!-- btn -->
          <button>
            <div class="border">Login</div>
          </button>
          <!-- other way to login -->
          <div class="flex items-center gap-5">
            <div class="border">Google</div>
            <div class="border">Facebook</div>
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

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
