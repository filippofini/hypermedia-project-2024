<template>
    <BreadCrumbs :crumbs="BCrumbs"/>
</template>

<script>
  export default {
      computed: {
          BCrumbs() {                
              return [

                  {
                      label: 'home',
                      url: '/'
                  }
                  
              ];
          }
      }
  }
</script>