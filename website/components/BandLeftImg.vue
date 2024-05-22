<script>
export default {
  name: 'BandLeftImg',

  props: {
    namebutton: String,
    description: String,
    imageName: String,
  },

  computed: {
    //----------------------------------------------------------------------------problem here
    //per importare immagini non funziona
    imageSrc() {
      console.log(`@/assets/${this.imageName}`);
      return `website/assets/${this.imageName}`;
    }
  }

}

</script>

<template>
    <div class="container">
        <div class="left-column">
          
          <!---------------------------------------------------------------------------problem here-->
            <img src = "@\assets\nomeImmagine.jpg" alt="Image description">
        </div>
        
        <div class="right-column">
            <p class="text"> {{description}} </p>
            
            <div class="button">
                <ButtonViolet :name_button = "namebutton"></ButtonViolet>
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

.button{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.container{
    display: flex;
    flex-direction: row;
    padding: 2vw;
    background-color: #FFCDDC;
}

.right-column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 
    padding-left: 5vw;

    min-height: 23vw;
    min-width: 58vw;
    max-width: 58vw;

    font-size: 1.2vw; 
    font-family: 'Jost'; 
}

.text
{
  max-width: 100%;
  word-break: break-word;
}

.left-column img {
  min-width: 31vw; 
  width: auto;
  height: auto;
  max-width: 31vw;
  max-height: 30vw;
}

</style>