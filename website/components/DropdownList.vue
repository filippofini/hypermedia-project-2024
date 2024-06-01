<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <div @click="toggle(index)" class="list-item">
                    <span class="title">{{ item.title }}</span> 
                    <span class="arrow">{{ expandedIndex === index ? '▲' : '▼' }}</span>
                </div>
                <transition name="expand">
                <div v-if="expandedIndex === index" class="details">
                    {{ item.details }}
                </div>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'Violence type 1', details: 'Details about violence type 1' },
                { title: 'Violence type 2', details: 'Details about violence type 2' },
                { title: 'Violence type 3', details: 'Details about violence type 3' },
                { title: 'Violence type 4', details: 'Details about violence type 4' },
                { title: 'Violence type 5', details: 'Details about violence type 5' }
            ],
            expandedIndex: null
        };
    },
    methods: {
        toggle(index) {
            if (this.expandedIndex === index) {
                this.expandedIndex = null;
            } else {
                this.expandedIndex = index;
            }
        }
    }
};
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 7px;   /* togliere se vogliamo fascia completa */
    }
    li {
        padding: 0;
        margin-top: 3px;
    }
    .list-item {
        padding: 17px;
        background-color: #52417D;
        border: 2px solid #52417D;
        text-align: center;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
    }
    .list-item:hover {
        background-color: #f1f1f1;
        color: black;
        border: 2px solid #52417D;
    }
    .title {
        flex-grow: 1;
        text-align: center;
    }
    .arrow {
        position: absolute;
        right: 10px;
        font-size: 18px;
        color: white;
        cursor: pointer;
        transition: color 0.3s;
    }
    .list-item:hover .arrow {
        color: black;
    }
    .details {
        padding: 10px 17px;
        margin-top: -1px;
        background-color: #ececec;
        border: 2px solid #52417D;
        color: black;
        margin-bottom: 5px;
        transition: all 0.3s ease;
        max-height: 1000px; 
        overflow: hidden;
    }
    .expand-enter-active, .expand-leave-active {
    transition: height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
    }
    .expand-enter, .expand-leave-to {
        max-height: 0;
        opacity: 0;
        padding: 0 17px;
    }
</style>
