
//Components

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: "Hello"
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: "Hello5"
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: "Learn JS" },
            { text: "Learn Vue" },
            { text: "Make a game" }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: "I am Godly God!",
        isVisible: true
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello, I am a god"
    }
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        items: [
            { id: 0, text: "Sword of Gods" },
            { id: 1, text: "Axe of the Ogre" },
            { id: 2, text: "Lance of a Knight" }
        ]
    }
});
