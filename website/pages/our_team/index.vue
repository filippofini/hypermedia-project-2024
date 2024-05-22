<template>
    <div id="sorting-selector-team">
        <label for="sorting-selector-team">Sort by:</label>
            <select class="menu" id="order" v-model="order">
              <option value="Role">Role</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
        </div>

    <div id="people-container">
          <PersonOv v-for = "person of sorted" :id = "person.id" :name = "person.name" :surname= "person.surname" :role = "person.role" :link = "'/our_team/' + person.id" />
    </div>
</template>


<script setup>
  //FETCH DELLE PERSONE
  const { data: people } = await useFetch('/api/our_team')

  //PER RIORDINARE
  const order = ref("Role")
  const roles = ['Head', 'Chief', 'Administrator', 'Employee']

  //sort people based on the order selected by the user
  const sorted = computed ( () => {
      //by role or default
      if (order.value == "Role" || order.value == null || order.value == undefined || order.value == "") {
        let importance_order = []

        for (let role of roles) {
          for (let person of people.value) {
            if (person.role === role) {
              importance_order.push(person)
            }
          }
        }
        return importance_order
      }
      //alphabetically
      else if (order.value == "A-Z")
        return [...people.value]
      //reverse alphabetically
      else if (order.value == "Z-A") 
        return [...people.value].reverse()
  })

  //Search Engine Optimization
  const description = ref('In this page you will find all of our team members.')
  const keywords = ref('Team, Teamwork, People, Members, ' + roles.join(', '))

  useHead({
      meta: [
          { name: 'description', content: description },
          { name: 'keywords', content: keywords }
      ]
  })
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

  #people-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    gap: 2vw;
    justify-content: center;
    max-width: 90vw;
  }

  #sorting-selector-team, #sorting-selector-proj {
      display: flex;
      font-family: Jost;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      align-self: center;
      margin: 1%;
      gap: 10px;
      font-size: 1.8vw;
      font-weight: 500;
      min-width: 20vw;
      margin-top: 4vw;
}

.menu {
      border-radius: 5px;
      border: none;
      font-size: 18px;
      font-family: inherit;
      padding: 0 2vh;
      cursor: pointer;
      width: 60%;
      background-color: rgba(255, 255, 255, 0.9);
      appearance: auto;
}
</style>