'use strict';

(() => {
  class IconDrawer {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.r = 60;  //半径
    }

    draw(angle) {
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';  //30%くらいの白にする
      this.ctx.fillRect(0, 0, this.width, this.height);  //塗りつぶす

      this.ctx.save(); //セーブする
      this.ctx.translate(this.width / 2, this.height / 2);
      this.ctx.rotate(Math.PI / 180 * angle);

      // this.ctx.beginPath();
      // // this.ctx.arc(this.width / 2, this.height / 2, this.r, 0, 2 * Math.PI);   //半径はr, そして0度から360度まで
      // this.ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
      // this.ctx.stroke();   //丸円のコード

      this.ctx.beginPath();
      // this.ctx.moveTo(this.width / 2, this.height / 2, this.r - 5);
      // this.ctx.lineTo(this.width / 2, this.height / 2, this.r + 5);
      this.ctx.moveTo(0, -this.r - 5);
      this.ctx.lineTo(0, -this.r + 5);
      this.ctx.strokeStyle = 'orange';
      this.ctx.lineWidth = 6;
      this.ctx.stroke();

      this.ctx.restore();   //原点がもとに戻る
    }

  }
    class Icon {
      constructor(drawer) {  //描写コンテクストが必要
        this.drawer = drawer;
        this.angle = 0;  //度数の初期設定
      }

      draw() {
        this.drawer.draw(this.angle);
      }

      update() {
        this.angle += 12;  //12度づつ動く
      }
  



    run() {
      this.update();
      this.draw();

      setTimeout(() => {
        this.run();
      }, 100);  //run()メソッドを100ミリ秒後に繰り返し行なう
    }
  }
  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const icon = new Icon(new IconDrawer(canvas));
  icon.run();
})();