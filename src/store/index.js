import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {postsList:[
            {id: 1, authorIcon: require("@/assets/images/student2.png"),createTime: "Nov 22, 2022", text: "OOPS! Seems like I'm a little late:(((", postimage: require("@/assets/images/postImage2.jpg"), likes: 0},
            {id: 2, authorIcon: require("@/assets/images/student3.png"),createTime: "Nov 10, 2022", text: "Anyone knows in which room is the lab today!?", postimage: null, likes: 23},
            {id: 3, authorIcon: require("@/assets/images/student.png"),createTime: "Oct 31, 2022", text: "My table is sooooo crowded", postimage: require("@/assets/images/postImage.jpg"), likes: 10},
            {id: 4, authorIcon: require("@/assets/images/student5.png"),createTime: "Oct 27, 2022", text: "I was thinking about starting a sleeping blog, what do you guys think??", postimage: null, likes: 14},
            {id: 5, authorIcon: require("@/assets/images/student5.png"),createTime: "Oct 16, 2022", text: "I made my profile picture the one that was taken of me sleeping haha", postimage: null, likes: 64},
            {id: 6, authorIcon: require("@/assets/images/student3.png"),createTime: "Oct 16, 2022", text: "Sorry, forgot to add it to the last post lol", postimage: require("@/assets/images/sleeping-man.jpg"), likes: 56},
            {id: 7, authorIcon: require("@/assets/images/student3.png"),createTime: "Oct 16, 2022", text: "Did you guys see the new photo?!!", postimage: null, likes: 3},
            {id: 8, authorIcon: require("@/assets/images/student.png"),createTime: "Sept 29, 2022", text: "Study date with my bestiess! :D", postimage: require("@/assets/images/students.jpg"), likes: 99},
            {id: 9, authorIcon: require("@/assets/images/student2.png"),createTime: "Sept 28, 2022", text: "Why do I keep missing my class???", postimage: null, likes: 3},
            {id: 10, authorIcon: require("@/assets/images/student4.png"),createTime: "Sept 12, 2022", text: "Look, a pic of my cat! <33", postimage: require("@/assets/images/kitten.jpg"), likes: 100}
        ]},
    getters: {},
    mutations: {
        increment(state, id) {
            const item = state.postsList.find(i => i.id === id)
            item.likes++
        },
        resetLikes(state) {
            state.postsList.forEach(postitem => {
                postitem.likes = 0
            })
        }
    },
    actions: {}
})