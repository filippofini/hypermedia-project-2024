<template>
  <header>
  <nav>
  <div class="topbar">
    <div class="logo">MyApp</div>
    
      <ul v-if="!mobile" class="navigation">
          <ul v-for="link in links" :key="link.path"><NuxtLink class="landmark" :to="link.path" :aria-label="`Link to ${link.title}`">{{ link.title }}</NuxtLink></ul>
      </ul>
  </div>

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
                { title: 'Activities', path: '/activities' },
                { title: 'Projects', path: '/projects' },
                { title: 'Services', path: '/services' },
                { title: 'Ask for Help', path: '/ask_for_help' },
                { title: 'Our Team', path: '/our_team' },
                { title: 'About us', path: '/about_us' },
                { title: 'Contact us', path: '/contact_us' },
                { title: 'Support us', path: '/support_us' },
                
            ],
        };
    },
  }
  </script>
  
  <!--
  <nav class="nav-links" :class="{ 'show-menu': showMenu }">
    <a href="#activities">Activities</a>
    <a href="/projects">Projects</a>
    <a href="/services">Services</a>
    <a href="#ask_for_help">Ask for Help</a>
    <a href="/our_team">Our Team</a>
    <a href="#about_us">About us</a>
    <a href="#contact_us">Contact us</a>
    <a href="#support_us">Support us</a>
  </nav>
  -->

  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
  
  header {
    max-width: 100%;

  }


  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 1vw;
    background-color: #B96090;
    color: white;
  }
  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
    gap: 0.7vw;
  }

  .navigation a {
    color: white;
    text-decoration: none;
    font-size: 1.2vw; 
    font-family: 'Jost'; 
    transition: color 0.3s ease;
  }

  .navigation a:hover {
    color: #6B5AA1; 
    cursor: pointer;
}

  </style>