<template>
  <q-page padding>
    <!-- <carousel-header /> -->
    <div class="container">
      <div class="q-mb-xl">
        <div class="row bg-grey-3 items-center rounded-borders-8">
          <div class="text-h3 text-center text-secondary col-4">
            Basic Learn
          </div>
          <div class="col-8">
            <q-img
              src="~/assets/images/code.svg"
              height="400px"
              fit="contain"
              alt="basic learn"
            />
          </div>
        </div>
      </div>
      <card-list />
      <div class="bg-grey-3 q-my-xl rounded-borders-8">
        <div class="q-py-md column items-center">
          <q-img
            src="~/assets/images/coding.svg"
            height="600px"
            fit="contain"
          />
          <div
            class="text-h5 text-secondary"
            style="width: 85%"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum aliquid consequatur tempore sapiente necessitatibus. Tenetur neque modi animi perspiciatis. Ex error dignissimos modi possimus odit quibusdam recusandae minus vel?
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// const CarouselHeader = defineAsyncComponent(() => import('pages/home-page/CarouselHeader.vue'))
const cardList = defineAsyncComponent(() => import('pages/home-page/CardList.vue'))

</script>
