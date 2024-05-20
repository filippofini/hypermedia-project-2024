<template>
    <div class="page">
    <header>
        <TopBar />
    </header>
    <slot />

    </div>
</template>

<style>
    .page{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    body {
     margin: 0;
    }


</style>