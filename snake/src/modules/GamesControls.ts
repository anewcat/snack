// 引入其他的类
import Food from "./Food";
import Board from "./Board";
import Snack from "./Snack";
// 游戏控制器，控制其他的所有类
class Gamecontrol{
    snack:Snack;
    food:Food;
    board:Board;
    direction:string='';
    // 记录游戏是否结束
    isLive:boolean=true
    timer:any
    constructor(){
        this.snack=new Snack();
        this.food=new Food();
        this.board=new Board();
        this.init()
    }
    init(){
        //游戏的初始化方法调用后游戏即开始
        this.run()
        document.addEventListener('keydown',this.keydownHandler.bind(this))//这里可以使用bind绑定this为GameControl，否则的话回调函数中的this会指向document
    }
    // 创建键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        this.direction=event.key;
    }
    // 创建一个控制蛇移动的方法
    run(){
        // 根据方向来使蛇的位置改变
        // 向上top减少
        // 向下top增加
        // 向左left减少
        // 向右left增加
        // 获取现在蛇的位置
        clearInterval(this.timer)
        let x=this.snack.getX();
        let y=this.snack.getY();
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                // console.log(this.direction)
                y-=10;
                break;
            case "ArrowDown":
            case "Down":
                // console.log(this.direction)
                y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                // console.log(this.direction)
                x-=10;
                break;
            case "ArrowRight":
            case "Right":
                // console.log(this.direction)
                x+=10;
                break;
        }
        if(this.checkEat(x,y)){
            this.snack.addBody();
            console.log('真好吃')
            this.board.scoreup();
            this.food.change();
        }
        try{
        this.snack.setX(x);
        this.snack.setY(y);
        }catch(e){
            alert((e as any).message)
            this.isLive=false
        }
        // 开启定时器
        if(this.isLive==true){
            this.timer=setTimeout(()=>{
                this.run()
                //  console.log('获取蛇头位置',this.snack.getX(),this.snack.getY())
            },500-(this.board.level-1)*40)
        }
    }
    checkEat(x:number,y:number){
        return x===this.food.getX()&&y===this.food.getY();
    }
}
export default Gamecontrol