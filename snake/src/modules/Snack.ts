class Snack{
    // 蛇的容器
    element:HTMLElement
    // 表示蛇头的元素
    head:HTMLElement
    // 身体（包括蛇头）
    bodies:HTMLCollection//会自动补充新元素
    constructor(){
        this.element=document.getElementById('snack')!;
        this.head=document.querySelector('#snack>div')!;
        this.bodies=document.getElementById('snack')!.getElementsByTagName('div')
    }
    // 获取蛇头坐标
    getX(){
        return this.head.offsetLeft
    }
    getY(){
        return this.head.offsetTop
    }
    setX(value:number){
        if(this.getX()===value){
            return;
        }
        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft===value){
            if(value>this.getX()){
                //如果新值大于旧值则证明蛇原来在向左突然按了向右掉头调用GC中run方法时检测到按键为ArrowRight
                // 此时要做的是让蛇继续向左移动，所以要在改变蛇头坐标之前修改传进来的value值
                value=this.getX()-10;//不仅不可以将现在坐标向右移动还要现在坐标上-10赋值给value
                // 使一会赋值的value是向左移动的而不是向右移动的
            }else{
                value=this.getX()+10
            }
        }
        if(value<0||value>290){
            throw new Error('出大问题')
        }
        // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时不能向右掉头，反之亦然
        this.moveBody();;
        this.head.style.left=value+'px';
        this.checkHeaBody();
    }
    setY(value:number){
        if(this.getY()===value){
            return;
        }
        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop===value){
            if(value>this.getY()){
                value=this.getY()-10;//不仅不可以将现在坐标向右移动还要现在坐标上-10赋值给value
                // 使一会赋值的value是向左移动的而不是向右移动的
            }else{
                value=this.getY()+10
            }
        }
        if(value<0||value>290){
            throw new Error('出大问题')
        }
        
        this.moveBody();;
        this.head.style.top=value+'px'
        this.checkHeaBody();
    }
    // 蛇增加身体的方法
    addBody(){
        console.log('变长了')
        this.element.insertAdjacentHTML('beforeend','<div></div>')//加到结束标签前面
    }
    moveBody(){
    //     // 将后面的身体设置为前边身体的位置
    // let x=(this.bodies[this.bodies.length-2] as HTMLElement).offsetLeft;
        // let y=(this.bodies[this.bodies.length-2] as HTMLElement).offsetTop;
          
        for(let i=this.bodies.length-1;i>0;i--){
            // 获取前边身体的位置
            let x=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let y=(this.bodies[i-1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left=x + 'px';
            (this.bodies[i] as HTMLElement).style.top=y + 'px';
        }
    }
    // 检查蛇头是否撞到身体
    checkHeaBody(){
        for(let i=1;i<this.bodies.length;i++){
            let bd=this.bodies[i] as HTMLElement;
            if(this.getX()===bd.offsetLeft&&this.getY()===bd.offsetTop){
                throw new Error('哈哈哈哈太菜了')
            }
        }
    }
}
export default Snack;