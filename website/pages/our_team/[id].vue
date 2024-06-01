<template>    
    <Head>
      <Title>{{ person.name }} {{ person.surname }}</Title>
    </Head>
    <main>  
        <div class="test">
            <BackButton />
        </div>

            <!--previous and next link-->
        <div class="prevnext">
            <NuxtLink :to="'/our_team/' + previousLink" :arial-label="`link to previous team member`" class="link">Previous</NuxtLink>
            <NuxtLink :to="'/our_team/' + nextLink" :arial-label="`link to next team member`" class="link">Next</NuxtLink>
        </div>

        <div class = "person-container">
            <img :src="person.image" class="image" alt="Person image">
            <div class="person-title">
                <div class="person-name-surname">{{ person.name }} {{ person.surname }}</div> 
                <div class="person-info"> 
                    <div class="person-role">Role: {{ person.role }}</div>
                    <div class="person-email">Email: {{ person.email }}</div>
                    <div class="person-phone">Phone number: {{ person.phone_number }}</div>
                    <div class="person-cv">{{ person.cv }}</div>
                </div>  
            </div>
        </div>

        <NetflixCarousel :id = "route.params.id" act = "0"></NetflixCarousel>
        <NetflixCarousel :id = "route.params.id" act = "1"></NetflixCarousel>
    </main> 
</template>

<script setup>
  
    const route = useRoute();
    const person = await $fetch('/api/our_team/' + route.params.id);


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

  /*STILE INTESTAZIONE*/
  .test{
    display: flex;
    flex-direction: row;
    margin: 2vw;
  }

  .prevnext{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;

  }

  .person-title{
    align-self: start;
    display: flex;  
    flex-direction: column;
    justify-content: space-evenly;
    font-family: Jost;
    font-size: 1.8vw;
    font-weight: 300;
    text-align: left;
    width: 50%;
  }

  .person-info{
    padding-top: 3vw;
  }

  .image{
    border-radius: 50vw;
    width: 40%
  }

.person-container{
    display: flex;
    flex-direction: row;
    padding: 5.5vw;
    padding-top: 4vw;
    padding-bottom: 4vw;
    gap: 8vw;
}

.person-name-surname{
    font-size: 4vw;
    font-weight: 1000;
}

</style>