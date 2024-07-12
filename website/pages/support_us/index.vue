<template>
  <Head>
    <Title>Support Us - Helping Hands</Title>
  </Head>
  <BreadCrumbs :crumbs="BCrumbs" />
  <div class="top-container">
    <div class="back-button">
      <BackButton />
    </div>
    <div class="center-title">Support Us</div>
  </div>
  <BandDoubleDesc />
  <StoryForm />
</template>

<script>
    export default {
    computed: {
        BCrumbs() {
        return [
            {
            label: "home",
            url: "/",
            },
        ];
        },
    },
    };
</script>
