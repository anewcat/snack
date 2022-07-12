// 记分牌类
class Board{
    score=0;
    level=1;
    maxlevel:number
    maxscore:number
    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle:HTMLElement
    levelEle:HTMLElement
    constructor(maxlevel:number=10,maxscore:number=3){
        this.scoreEle=document.getElementById('score')!;
        this.levelEle=document.getElementById('level')!;
        this.maxlevel=maxlevel
        this.maxscore=maxscore
    }
    scoreup(){
        this.scoreEle.innerHTML='SCORE: '+ ++this.score +''
        if(this.score%this.maxscore==0){
            this.levelup()
        }
    }
    levelup(){
        if(this.level<this.maxlevel){
            this.levelEle.innerHTML='LEVEL: '+ ++this.level+''
        }
        
    }
}
export default Board