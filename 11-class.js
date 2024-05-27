// 클래스
class shape {
    // static > 모든 인스턴스가 공유, new 하지 않아도 접근 가능한 코드영역
    static create(x,y) {return new shape(x,y) ;}
    name = "shape"; // ES7 확장 표현

    // 생성자
    constructor(x,y) {
        this.name = "shape";    // 속성 부분: ES6에서 부터 등장
        this.move(x,y);
    }
    // 메서드
    move(x,y) {
        this.x =x;
        this.y =y;
    }
    area() {
        return 0;
    }
}

console.log(shape);

// 상속
class circle extends shape{
    // shape로 부터 x,y를 상속
    // radius 만 추가로 선언
    
    constructor(x,y,radius){
        super(x,y); // 부모 생성자 > 물려받은 필드들 초기화
        this.radiusadius;
    }
    //  물려받은 area 메서드 재정의
    area() {
        if(radius == 0) {
            return super.area();
        }
        return Math.PI * this.radius **2;
    }
}

let s = new shape(10,20);
console.log(s,s.area);

let c = new circle(30,40,10);
console.log(c,c.area);