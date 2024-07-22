document.addEventListener('DOMContentLoaded', function() {
    // ページ読み込み時のアニメーション
    document.body.style.opacity = 0;
    let opacity = 0;
    let intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 0.1;
            document.body.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);

    // カードのホバーエフェクトを強化
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseout', function() {
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });

    // SNSリンクのホバーエフェクトを強化
    const snsLinks = document.querySelectorAll('.sns-links a');
    snsLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});