<template>
  <!-- Navbar-->
  <nav class="py-2 navbar bg-gray-800">
    <div class="max-w-7xl sm:flex sm:items-center sm:justify-between">
      <div class="sm:flex sm:items-center">
        <div class="flex justify-between items-center px-4">
          <div class="inline-flex items-center">
            <a href="#">
              <logo></logo>
            </a>
          </div>
          <div class="inline-flex items-center sm:hidden">
            <a href="#" @click.prevent="links = ! links">
              <mobile-menu-button :open="links"></mobile-menu-button>
            </a>
          </div>
        </div>

        <ul :class="links ? 'block' : 'hidden'" class="mt-2 sm:mt-0 sm:flex relative">
          <li class="px-2 py-1">
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" :class="{'bg-gray-900 text-white': active === 'dashboard'}">Dashboard</a>
          </li>
          <li class="px-2 py-1">
            <a href="#" @click.prevent="toggleDropdown('projects')" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" :class="{'bg-gray-900 text-white': active === 'projects'}">Projects</a>
            <div v-if="dropdown.projects" @click="toggleDropdown()" class="hidden sm:block sm:fixed z-10 top-0 left-0 w-full h-full"></div>
            <ul class="pl-5 sm:pl-0 sm:mt-2 sm:shadow-lg sm:w-48 sm:rounded-md sm:absolute z-20 sm:bg-white sm:ring-1 sm:ring-black sm:ring-opacity-5" :class="dropdown.projects ? 'block' : 'hidden'">
              <li class="px-2 sm:px-0 py-1 pr-0">
                <a href="#"
                   class="sm:px-4 px-3 py-2 sm:text-sm sm:text-gray-700 sm:hover:bg-gray-100 block text-gray-300 hover:bg-gray-700 hover:text-white sm:text-gray-700 sm:hover:text-gray-700 rounded-md sm:rounded-none text-base">Link 1</a>
              </li>
              <li class="px-2 sm:px-0 py-1 pr-0">
                <a href="#"
                   class="sm:px-4 px-3 py-2 sm:text-sm sm:text-gray-700 sm:hover:bg-gray-100 block text-gray-300 hover:bg-gray-700 hover:text-white sm:text-gray-700 sm:hover:text-gray-700 rounded-md sm:rounded-none text-base">Link 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div :class="links ? 'block' : 'hidden'" class="sm:flex">
        <ul class="pt-4 mt-2 sm:mt-0 pb-3 border-t sm:border-0 border-gray-700">
          <li class="px-2 py-1">
            <div>

              <div class="flex sm:flex-row-reverse justify-between mb-2 sm:mb-0">
                <div class="flex items-center space-x-2" @click.prevent="toggleDropdown('user')">
                  <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded-full">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                  </button>
                  <div class="sm:hidden">
                    <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                    <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                  </div>
                </div>
                <button class="mx-4 bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" @click.prevent="toggleDropdown('notifications')">
                  <span class="sr-only">View notifications</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </button>
              </div>


            </div>
            <div v-if="dropdown.user" @click="toggleDropdown('user')" class="hidden sm:block sm:fixed z-10 top-0 left-0 w-full h-full"></div>
            <ul class="sm:pl-0 sm:mt-2 sm:shadow-lg sm:w-48 sm:rounded-md sm:absolute sm:right-2 z-20 sm:bg-white sm:ring-1 sm:ring-black sm:ring-opacity-5" :class="dropdown.user ? 'block' : 'hidden'">
              <li class="px-2 sm:px-0 py-1 pr-0">
                <a href="#"
                   class="sm:px-4 px-3 py-2 sm:text-sm sm:text-gray-700 sm:hover:bg-gray-100 block text-gray-300 hover:bg-gray-700 hover:text-white sm:text-gray-700 sm:hover:text-gray-700 rounded-md sm:rounded-none text-base">Your Profile</a>
              </li>
              <li class="px-2 sm:px-0 py-1 pr-0">
                <a href="#"
                   class="sm:px-4 px-3 py-2 sm:text-sm sm:text-gray-700 sm:hover:bg-gray-100 block text-gray-300 hover:bg-gray-700 hover:text-white sm:text-gray-700 sm:hover:text-gray-700 rounded-md sm:rounded-none text-base">Settings</a>
              </li>
              <li class="px-2 sm:px-0 py-1 pr-0">
                <a href="#"
                   class="sm:px-4 px-3 py-2 sm:text-sm sm:text-gray-700 sm:hover:bg-gray-100 block text-gray-300 hover:bg-gray-700 hover:text-white sm:text-gray-700 sm:hover:text-gray-700 rounded-md sm:rounded-none text-base">Sign out</a>
              </li>
            </ul>


            <div v-if="dropdown.notifications" @click="toggleDropdown('notifications')" class="hidden sm:block sm:fixed z-10 top-0 left-0 w-full h-full"></div>
            <ul class="sm:pl-0 sm:mt-2 sm:shadow-lg sm:w-80 sm:rounded-md sm:absolute sm:right-14 z-20 sm:bg-white sm:ring-1 sm:ring-black sm:ring-opacity-5" :class="dropdown.notifications ? 'block' : 'hidden'">
              <li class="px-2 sm:px-0 py-1 pr-0">
                <a href="#"
                   class="sm:px-4 px-3 py-2 sm:py-4 sm:text-sm sm:text-gray-700 sm:hover:bg-gray-100 block text-gray-300 hover:bg-gray-700 hover:text-white sm:text-gray-700 sm:hover:text-gray-700 rounded-md sm:rounded-none text-base">5 new members joined today</a>
              </li>
              <li class="px-2 sm:px-0 py-1 pr-0">
                <a href="#"
                   class="sm:px-4 px-3 py-2 sm:py-4 sm:text-sm sm:text-gray-700 sm:hover:bg-gray-100 block text-gray-300 hover:bg-gray-700 hover:text-white sm:text-gray-700 sm:hover:text-gray-700 rounded-md sm:rounded-none text-base">You change your username</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- /Navbar-->
</template>

<script>
import Logo from './svg/Logo';
import MobileMenuButton from './svg/MobileMenuButton';

export default {
  data() {
    return {
      links: false,
      dropdown: {
        projects: false,
        user: false,
        notifications: false,
      },
      active: 'dashboard',
    }
  },
  created() {
    this.toggleDropdown(this.active);
  },
  watch: {
    active(active) {
      this.toggleDropdown(active);
    }
  },
  methods: {
    toggleDropdown(dropdown) {
      for (const property in this.dropdown) {
        if (property === dropdown) {
          this.dropdown[property] = ! this.dropdown[property];
        } else {
          this.dropdown[property] = false;
        }
      }
    },
  },
  components: {
    Logo,
    MobileMenuButton
  }
}
</script>