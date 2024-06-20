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
                { title: 'Physical Violence', details: 'Physical violence involves any act of physical force intended to cause harm or injury. This can include hitting, slapping, punching, kicking, choking, or using objects or weapons to inflict pain. Victims may have visible injuries such as bruises, cuts, or broken bones. They might often provide unconvincing explanations for their injuries, avoid social situations to hide the abuse, or show signs of fear and anxiety around the abuser.' },
                { title: 'Emotional/Psychological Violence', details: 'Emotional or psychological violence includes behaviors that cause emotional distress and undermine a person\'s self-worth. This can involve verbal abuse like name-calling, insults, and constant criticism. It also includes manipulation, humiliation, intimidation, and threats of harm to the victim or loved ones. Victims may experience low self-esteem, depression, anxiety, and a sense of helplessness. They may become withdrawn, overly anxious to please the abuser, or show a loss of interest in activities they once enjoyed.' },
                { title: 'Sexual Violence', details: 'Sexual violence encompasses any non-consensual sexual act or behavior, ranging from unwanted sexual touching to rape. It can also include coercing a person into sexual activities against their will, using threats, manipulation, or physical force. Victims of sexual violence may exhibit fear of sexual intimacy, physical injuries to the genital area, sexually transmitted infections, or display sudden changes in sexual behavior. They might also have difficulty trusting others or suffer from nightmares and flashbacks related to the trauma.' },
                { title: 'Financial/Economic Violence', details: 'Financial or economic violence involves controlling a person\'s access to financial resources, thereby limiting their independence. This can include withholding money, preventing the victim from working or pursuing education, controlling their bank accounts, or accumulating debt in their name without consent. Victims may have no access to money, be unable to make financial decisions, depend entirely on the abuser for financial support, and often face severe financial hardship if they try to leave the abusive situation.' },
                { title: 'Social Isolation', details: 'Social isolation is a tactic used to cut the victim off from family, friends, and other support networks. This can involve controlling their interactions, monitoring communications, preventing them from attending social events, or spreading misinformation to alienate them from others. Victims of social isolation often feel lonely, unsupported, and entirely dependent on the abuser. They may have few, if any, social contacts and could seem disconnected from their previous life and relationships.' }
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
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

    ul {
        list-style-type: none;
        padding: 0.1vw;   
    }
    li {
        padding: 0;
        margin-top:0.2vw;
    }
    .list-item {
        padding: 0.9vw;
        background-color: #B6244F;
        border: 2px solid #B6244F;
        text-align: center;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        font-family: Jost;
        font-size: 2.7vh;
        font-weight: 600;
    }
    .list-item:hover {
        background-color: #f1f1f1;
        color: black;
        border: 2px solid #B6244F;
    }
    .title {
        flex-grow: 1;
        text-align: center;
    }
    .arrow {
        position: absolute;
        right: 0.9vw;
        font-size: 1.3vw;
        color: white;
        cursor: pointer;
        transition: color 0.3s;
    }
    .list-item:hover .arrow {
        color: black;
    }
    .details {
        padding: 0.9vw 1vw;
        margin-top: -1px;
        background-color: #ececec;
        border: 2px solid #B6244F;
        color: black;
        margin-bottom: 0.2vw;
        transition: all 0.3s ease;
        max-height: 1000px; 
        overflow: hidden;
        font-family: Jost;
        font-size: 2.3vh;
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
