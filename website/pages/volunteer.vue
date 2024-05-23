<template>

    <div class ="background-container">

        <div class="top">
            <div class="test">
                <BackButton />
            </div>
            <div class="center-title">
            <div class = "title">Become a volunteer</div>
        </div>
    </div>
     
    <div class ="container">


        <ImageUpTextDown class="img-txt" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in iaculis nunc. Maecenas consectetur vehicula suscipit. Fusce sit amet odio sapien. Suspendisse in lectus venenatis, luctus neque eu, eleifend arcu. Cras venenatis at erat sed ornare. Duis maximus molestie laoreet. Aliquam vitae lacinia velit" imageName="nomeImmagine.jpg"/> 
        <ImageUpTextDown class="img-txt" description="Sed sollicitudin consequat neque eu vehicula. Morbi sit amet ligula nibh. Curabitur gravida turpis nisi, sit amet suscipit nisl semper id. Suspendisse finibus dui ex, at viverra urna auctor at. Vivamus eu elit a tortor feugiat facilisis. Praesent arcu magna, bibendum nec feugiat vel, facilisis tristique quam" imageName="nomeImmagine.jpg"/> 
        <ImageUpTextDown class="img-txt"  description="nothing to see here" imageName="nomeImmagine.jpg"/> 
    </div>

    </div>

    <div class="button">
        <ButtonViolet name_button="Join us"/>
    </div>
</template>

<style scoped>
    .background-container{        
        background-color: #FFCDDC;        
    }
    .container{
        display: flex;        
        flex-direction: row;
        background-color: #FFCDDC;
        justify-content: center;
      
        
    }
 

    .img-txt{      

        max-width: 100%;
        max-height: 100%;
        margin: 1%;
    } 

    .button{
        display: flex;        
        justify-content: center;        
        margin: 2%;
    }

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
    margin-right: 9%;
  }
     
    

</style>