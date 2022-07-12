class Food{
    // 定义一个属性表示食物所对应的元素
    element:HTMLElement
    constructor(){
    //    获取页面中food元素并将其赋值给element
    this.element=document.getElementById('food')!;//！表示不会为空
    }
    //定义一个获取食物X轴坐标的方法
    getX(){
        return this.element.offsetLeft
    }
    // 定义一个获取食物Y轴坐标的方法
    getY(){
        return this.element.offsetTop;
    }
    change(){
        let top=Math.round(Math.random()*29)*10;
        let left=Math.round(Math.random()*29)*10;
        this.element.style.top=top+"px";
        this.element.style.left=left+"px";
    }
}
// const food1=new Food();
// // console.log(food1.X,food1.Y)
// food1.change();
// console.log(food1.getX(),food1.getY())

export default Food