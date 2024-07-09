<template>
  <header>
    <nav>
      <div class="topbar">
        <div class="logo">
          <NuxtLink to="/" title="Homepage">
            <img src="../assets/img/logo.png" alt="Logo" id="desktop-logo"/>
          </NuxtLink>
        </div>

        <!-- Desktop elements -->
        <ul v-if="!mobile" class="navigation">
          <li v-for="link in links" :key="link.path">
            <div class="landmark-container">
              <NuxtLink class="landmark" :to="link.path" :aria-label="`Link to ${link.title}`">{{ link.title }}</NuxtLink>
            </div>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="icon">
          <i @click="toggleMobileNav" v-show="mobile" class="hamburger-menu" :class="{ 'icon-active': mobileNav }">
            <svg viewBox="0 0 100 67" width="40" height="40">
              <rect y="00" width="100" height="17" rx="10" fill="#ffffff"></rect>
              <rect y="33" width="100" height="17" rx="10" fill="#ffffff"></rect>
              <rect y="66" width="100" height="17" rx="10" fill="#ffffff"></rect>
            </svg>
          </i>
        </div>
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav" :class="{ inverted: isHomePage, '': !isHomePage }" ref="dropdownNav">
          <NuxtLink to="/" title="Homepage">
            <img src="../assets/img/logo_mobile.png" alt="Logo" id="mobile-logo" @click="toggleMobileNav"/>
          </NuxtLink>
          <div class="separator-mobile" />
          <li v-for="link in links">
            <NuxtLink @click="toggleMobileNav" class="landmark-mobile" :to="link.path" :aria-label="`Link to ${link.title}`" >{{ link.title }}</NuxtLink>
          </li>
          <ul @click="toggleMobileNav" class="close-cross"> &#10006; </ul>
        </ul>
      </transition>

      <transition name="dropdown-overlay">
        <div v-if="mobileNav" class="dropdown-overlay" :class="{ inverted: isHomePage, '': !isHomePage }" @click="toggleMobileNav"></div>
      </transition>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        mobile: null,
        mobileNav: null,
        windowWidth: null,
        isHomePage: true,
        links: [
          { title: "Activities", path: "/activities" },
          { title: "Projects", path: "/activities/projects" },
          { title: "Services", path: "/activities/services" },
          { title: "Ask for Help", path: "/ask_for_help" },
          { title: "Our Team", path: "/our_team" },
          { title: "About us", path: "/about_us" },
          { title: "Contact us", path: "/contact_us" },
          { title: "Support us", path: "/support_us" },
        ],
      };
    },

    mounted() {
      if (process.client) {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
        document.addEventListener("click", this.handleClickOutside);
      }
    },

    beforeUnmount() {
      if (process.client) {
        window.removeEventListener("resize", this.checkScreen);
        document.removeEventListener("click", this.handleClickOutside);
      }
    },

    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
        if (this.mobileNav) {
          document.documentElement.style.overflow = "hidden";
        } else {
          document.documentElement.style.overflow = "";
        }
      },

      checkScreen() {
        this.windowWidth = document.documentElement.clientWidth;
        if (this.windowWidth < 850) {
          this.mobile = true;
        } else {
          this.mobile = false;
          this.mobileNav = false;
          document.documentElement.style.overflow = "";
        }
      },

      handleClickOutside(event) {
        if (
          !this.$refs.dropdownNav.contains(event.target) &&
          !this.$refs.dropdownNav.previousElementSibling.contains(event.target)
        ) {
          this.mobileNav = false;
        }
      },
    },
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap");

  ul{
    padding: 0;
  }

  li{
    list-style-type: none;
  }

  header {
    max-width: 100%;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
    background-color: #643173;
    border-bottom: 5px solid #A78BCA;
    color: #ffffff;
  }

  .logo{
    display: flex;
    align-items: center;
    height: 10vh;
    width: 17vh;
  }

  #desktop-logo {
    max-width: 100%;
    max-height: 100%;
  }
  #mobile-logo {
    margin-top: 20px;
    max-width: 15vh;
    max-height: 15vh;
  }

  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
    gap: 0.3vw;
  }

  .navigation a {
    color: #ffffff;
    text-decoration: none;
    font-size: 100%;
    font-family: "Jost";
    transition: color 0.3s ease;
  }

  .navigation a:hover {
    color: #643173;
    cursor: pointer;
  }

  .landmark {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .landmark-container {
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
    display: block;
    transition: background-color 0.3s ease, border 0.3s ease;
  }

  .landmark-container:hover {
    background-color: #ffffff;
  }

  .icon {
    display: flex;
    align-items: center;
  }

  .hamburger-menu {
    cursor: pointer;
    transition: 0.5s ease all;
    padding: 7px 10px;
    border-radius: 10px;
  }

  .hamburger-menu:hover {
    background-color: #A78BCA;
  }

  .hamburger-menu:active {
    background-color: #A78BCA;
  }

  .dropdown-nav {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 60%;
    height: 100vh;
    min-width: 270px;
    top: 0;
    left: 0;
    margin-top: 0;
    z-index: 500;
    border-right: 5px solid #A78BCA;
  }

  .mobile-nav-enter-active, .mobile-nav-leave-active {
    transition: 1s ease all;
  }

  .mobile-nav-enter-from, .mobile-nav-leave-to {
    transform: translateX(-100%);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .separator-mobile {
    margin: 3vh 0;
  }

  .close-cross {
    font-size: 4vh;
    text-align: center;
    color: #000000;
    transition: 0.3s;
    cursor: pointer;
    padding-top: 3vh;
  }

  .close-cross:hover {
    color: rgb(200, 0, 0);
    text-decoration: underline;
    text-underline-offset: 6px;
    transform: translateY(-5px);
  }

  .close-cross:active {
    transform: scale(0.95);
  }

  .dropdown-overlay {
    filter: invert(0);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }

  .dropdown-overlay-enter-active, .dropdown-overlay-leave-active {
    transition: opacity 0.5s;
  }

  .dropdown-overlay-enter-from, .dropdown-overlay-leave-to {
    opacity: 0;
  }

  .dropdown-overlay-enter-to, .dropdown-overlay-leave-from {
    opacity: 1;
  }

  .landmark-mobile {
    color: #643173;
    font-family: "Jost";
    font-size: 2.5vh;
    text-decoration: none;
    font-weight: 600;
    padding: 10% 0;
    display: inline-block;
    transition: 0.3s;
  }

  .landmark-mobile:hover {
    color: #A78BCA;
    transform: translateY(-5px);
  }
  
</style>