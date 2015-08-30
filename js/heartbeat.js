$(function() {
  var $heartbeat01 = $('.heartbeat01');
  var $heartbeat02 = $('.heartbeat02');
  
  // circleAction($target, $bgSize, $smSize, $time, $judge)
  circleAction($heartbeat01, 400, 360, 701, 0);
  circleAction($heartbeat02, 480, 360, 503, 0);
});

/* heartbeat animation function
 * 
 * $target : 対象class or id
 * $bgSize : 最大時の円のサイズ
 * $smSize : 最小時の円のサイズ
 * $time   : animationにかかる時間
 * $judge  : 永続的にanimationさせるかどうかの判定(0:永続 1:一回のみ)
*/
// Apply animation
function circleAction($target, $bgSize, $smSize, $time, $judge) {
  var $smMarginSize = $smSize / 2;
  var $bgMarginSize = $bgSize / 2;
  $($target).animate({
    opacity: 0.3,
    width: $bgSize,
    height: $bgSize,
    'marginTop': -$bgMarginSize,
    'marginLeft': -$bgMarginSize,
  }, $time).animate({
    opacity: 0,
    width: $smSize,
    height: $smSize,
    'marginLeft': -$smMarginSize,
    'marginTop': -$smMarginSize,
  }, $time);

  if ($judge == 0) {
    setTimeout( function(a, b, c, d, e){ circleAction(a, b, c, d, e) }, 1500, $target , $bgSize, $smSize, $time, $judge);
  } else if ($judge == 1) {
   // stop(circleAction);
  }
}
