<template>
   <div class="top">
      <div class="test">
         <BackButton />
      </div>
      <div class="center-title">
         <div class = "title">Contact Us</div>
      </div>
   </div>
   <div class="phone-number">
      <h2>Call</h2>
      <h1>123-456-7890</h1>
   </div>
   <BandLeftNoButton description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" imageName="nomeimmagine.jpg"/>
   <BandForm />
   <BandMap />
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
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

   .phone-number {
      display: flex;
      flex-direction: column;
      font-family: Jost;
      margin-left: 30px;
   }

   h1 {
      font-size: 30px;
      font-weight: 1000;
      font-family: Jost;
   }

   h2 {
      font-size: 25px;
      font-weight: 500;
      font-family: Jost;
   }

</style>