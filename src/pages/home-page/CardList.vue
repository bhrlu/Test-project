<template>
  <div class="row q-col-gutter-xl">
    <div
      v-for="(card, index) in cardList"
      :key="index"
      class="col-4"
    >
      <q-card
        class="shadow-1 full-height"
        bordered
      >
        <q-img
          :src="card.cover"
          height="154px"
          fit="contain"
        />
        <q-card-section>
          <div class="q-col-gutter-xl">
            <div>
              <div class="text-h6 text-secondary">
                {{ card.title }}
              </div>
              <div class="text-subtile1 text-grey-7">
                {{ card.start_at }}
              </div>
            </div>
            <div class="text-h6 text-secondary">
              ${{ card.price }}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { dayjs } from 'boot/dayjs'

const cardList = [
  {
    title: 'Java Script full course',
    cover: '/src/assets/images/bug.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  },
  {
    title: 'Java Script full course',
    cover: '/src/assets/images/www.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  },
  {
    title: 'Java Script full course',
    cover: '/src/assets/images/www.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  },
  {
    title: 'Java Script full course',
    cover: '/src/assets/images/www.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  },
  {
    title: 'Java Script full course',
    cover: '/src/assets/images/bug.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  },
  {
    title: 'Java Script full course',
    cover: '/src/assets/images/www.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  },
  {
    title: 'Java Script full course',
    cover: '/src/assets/images/bug.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  }, {
    title: 'Java Script full course',
    cover: '/src/assets/images/www.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  }, {
    title: 'Java Script full course',
    cover: '/src/assets/images/www.svg',
    start_at: dayjs().format('MMMM DD HH:mm'),
    ends_at: null,
    price: '100,000'
  }
]

</script>
