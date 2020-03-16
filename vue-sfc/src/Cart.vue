<template>
  <div id="app">
      <cart-header></cart-header>
      <shop-list v-bind:shopping-items="items"></shop-list>
        <bought-list v-on:remove-item="removeItem" v-bind:shopping-items="items"></bought-list>
        <cart-input v-on:add-item="addItem"></cart-input>
      <cart-footer></cart-footer>
      
      </div>
</template>

<script>
//외부 모듈 불러오기
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";

import Shoplist from "./components/Shoplist";
import Boughtlist from "./components/Boughtlist";
import Cartinput from "./components/Cartinput";

export default {
    data: function() {
        return {
            items: [
                {name: "무", buy: false},
                {name: "배추", buy: false},
                {name: "족파", buy: true},
                {name: "고춧가루", buy: false},
            ]
        }
    },
    components: {
        "cart-header": CartHeader,
        "cart-footer": CartFooter,
        "shop-list": Shoplist,
        "bought-list": Boughtlist,
        "cart-input": Cartinput
    },
    methods: {
        addItem: function(item) {
            this.items.push({
                name: item,
                buy: false
            });
        },
        removeItem: function(item){
            var index = this.items.indexOf(item);
            if(index > -1){
                //삭제할 수 있다
                this.items.splice(index, 1);
            }
        }
    }
}
</script>


<style>
li {
    list-style: none;
    height: 30px;
}
li button {
    float: right;

}
ul > li:nth-child(2n){
    background-color: rgba(0, 0, 255, 0.8);
}
ul > li:nth-child(2n+1){
    background-color: rgba(127, 127, 127, 0.2)
}
</style>
