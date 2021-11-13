<template>
  <div>
    <div class="relative">
      <img src="../assets/room.png" alt="" />
      <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
        <img src="../assets/previous.png" alt="" />
      </div>
      <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
        <img src="../assets/next.png" alt="" />
      </div>
    </div>
    <div class="p-8">
      <div>
        <div>
          <h1
            class="
              font-source-sans
              text-primary-green-dark text-2xl
              mr-2
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
        <p class="font-dm-sans text-justify text-sm">
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
};
</script>
