/*Vue.component('display-item',{
    props:['index'],
    template: '<div v-if="show" class="col-6 col-md-3 mar"><span class="set1">4</span><small> {{content2}}</small></div>'
})*/
new Vue({
    el:"#root",
    data:{
        inputValue:'',
        list:[],
        data: {

        },
        show1:true,
        show2:true,
        show3:true,
        show4:true,
        show5:true,
        show6:true,
        show7:true,
        show8:true,

    },
    methods:{
        handleSubmit:function () {
            this.list.push(this.inputValue)
            this.inputValue=''
        },
        handleClick:function () {
            this.show1 = !this.show1;
            this.show2 = !this.show2;
            this.show3 = !this.show3;
            this.show4 = !this.show4;
            this.show5 = !this.show5;
            this.show6 = !this.show6;
            this.show7 = !this.show7;
            this.show8 = !this.show8;
        }
    }
})
Vue.component('todo-item',{
    props:['content'],
    template:'<span class="set">{{content}}</span>'
})