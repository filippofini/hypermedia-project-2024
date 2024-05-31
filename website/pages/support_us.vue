<template>
    <BreadCrumbs :crumbs="BCrumbs"/>
    <div class="top">
        <div class="test">
            <BackButton />
        </div>
        <div class="center-title">
            <div class = "title">Support Us</div>
        </div>
    </div>
    <BandDoubleDesc/>
    <StoryForm/>  

    
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

<style scoped>
    .top{
    display: flex;
    flex-direction: row;
    margin: 2vw;
  }
  .test{
    display: flex;
    width: 10%;
  }

  .title {
    font-family: Jost;
    font-size: 3vw;
    font-weight: 600;
    text-align: center;
    margin-top: 0vw;
    display: flex;  
    align-self: center;  

  }
  .center-title{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-right: 10%;
  }

</style>