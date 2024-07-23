document.addEventListener('DOMContentLoaded', function() {
    const svg = document.getElementById('handwriting-svg');
    const grayBack = document.createElement('div');
    grayBack.classList.add('gray-back');
    document.body.appendChild(grayBack);
  
    // SVGのフェードイン
    svg.style.opacity = 1;
  
    // グレーバックのフェードインと再生後のフェードアウト
    setTimeout(() => {
      grayBack.classList.add('visible');
      // アニメーションが完了した後にグレーバックを非表示にする
      setTimeout(() => {
        grayBack.classList.remove('visible');
      }, 3000); // グレーバックの表示時間
    }, 1000); // SVGのフェードイン時間
  });
  
  $(window).on('load',function(){
    $("#splash").delay(3000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(2600).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });