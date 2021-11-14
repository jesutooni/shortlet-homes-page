<template>
  <div>
    <div class="relative w-full pb-4/5 overflow-hidden">
      <img
        class="absolute w-full h-full object-cover"
        :src="rooms[currentRoom]"
        alt=""
      />
      <div
        @click="prevRoom"
        class="
          w-8
          h-8
          flex
          justify-center
          items-center
          bg-white
          rounded-full
          absolute
          left-4
          top-1/2
          transform
          -translate-y-1/2
        "
      >
        <img class="w-2" src="../assets/icon-previous.svg" alt="" />
      </div>
      <div
        @click="nextRoom"
        class="
          w-8
          h-8
          flex
          justify-center
          items-center
          bg-white
          rounded-full
          absolute
          top-1/2
          right-4
          transform
          -translate-y-1/2
        "
      >
        <img class="w-2" src="../assets/icon-next.svg" alt="" />
      </div>

      <div class="absolute bottom-3 w-full flex justify-center">
        <div class="w-2 h-2 rounded-full mr-2 bg-white bg-opacity-90"></div>
        <div class="w-2 h-2 rounded-full mr-2 bg-white bg-opacity-70"></div>
        <div class="w-2 h-2 rounded-full mr-2 bg-white bg-opacity-50"></div>
        <div class="w-2 h-2 rounded-full mr-2 bg-white bg-opacity-30"></div>
      </div>
    </div>
    <div class="p-7">
      <div>
        <div>
          <h1
            class="
              font-source-sans
              text-primary-green-dark text-2xl
              mr-1
              inline
            "
          >
            107, Kolade Estate, Lekki.
          </h1>
          <div class="inline-flex">
            <img src="../assets/check.png" alt="" />
          </div>
        </div>

        <div class="flex items-center text-sm font-dm-sans mt-3">
          <img src="../assets/tag.png" alt="" />
          <p class="ml-1">40,000 NGN/Day</p>
        </div>
        <div class="flex items-center text-sm font-dm-sans mt-3">
          <img src="../assets/rate.png" alt="" />
          <p class="ml-2">4.75 (98 reviews)</p>
        </div>
      </div>

      <div class="mt-7">
        <h1 class="font-source-sans text-2xl text-primary-green-dark">
          Description
        </h1>
        <p class="font-dm-sans text-justify text-sm mt-2">
          This property is situated on the fast developing Lagos Island area.
          With a vivid view of the Atlantic Ocean and a mesmerizing skyline.
        </p>
      </div>
      <div class="mt-7">
        <h1 class="font-source-sans text-2xl text-primary-green-dark">
          Property Details
        </h1>
        <ul class="text-sm font-dm-sans list-disc pl-7">
          <li class="mt-2">3 bedroom apartment, all en suite</li>
          <li class="mt-2">Spacious Terrace</li>
          <li class="mt-2">Uninterrupted Electricity and WiFi</li>
        </ul>
      </div>

      <div class="mt-10 flex items-center font-dm-sans">
        <button
          class="
            bg-primary-green-dark
            text-white
            font-bold
            p-5
            w-full
            rounded-lg
            focus:outline-none
          "
        >
          Book
        </button>
        <button
          class="
            text-primary-green-dark
            font-bold
            p-5
            w-full
            focus:outline-none
          "
        >
          Contact
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      rooms: [
        require("../assets/room1.png"),
        require("../assets/room2.png"),
        require("../assets/room3.png"),
        require("../assets/room4.png"),
      ],
      currentRoom: 0,
    };
  },
  methods: {
    nextRoom() {
      this.currentRoom++;
      if (this.currentRoom > this.rooms.length - 1) {
        this.currentRoom = 0;
      }
    },
    prevRoom() {
      this.currentRoom--;
      if (this.currentRoom < 0) {
        this.currentRoom = this.rooms.length - 1;
      }
    },
  },
};
</script>
