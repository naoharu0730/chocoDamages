// 計算の処理系群

/**
 * 画面の入力をもとに、計算を行う
 */
function calculation() {
    // 入力の取得
    const atkTotal = Number($('#atkTotal').val());
    const defTotal = Number($('#defTotal').val());
    const toleranceTotal = Number($('#toleranceTotal').val());

    // 処理
    let bassDamage = (atkTotal - defTotal) * 1.5;
    let elementNumber = hasActive();

    // 結果の表示
    $('#fireResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 1) - toleranceTotal), 0));
    $('#waterResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 4) - toleranceTotal), 0));
    $('#treeResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 3) - toleranceTotal), 0));
    $('#lightResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 0) - toleranceTotal), 0));
    $('#darkResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 2) - toleranceTotal), 0));
    $('#emptyResult').text(Math.max(Math.ceil(bassDamage * 1.0 - toleranceTotal), 0));
    $('#fireCriticalResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#waterCriticalResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#treeCriticalResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#lightCriticalResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#darkCriticalResult').text(Math.max(Math.ceil(bassDamage * magnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#emptyCriticalResult').text(Math.max(Math.ceil(bassDamage * 1.0 * 1.75 - toleranceTotal), 0));
}

/**
 * ボタンの選択状態を解除する
 */
function resetActive() {
    $('#fireElement').removeClass("active");
    $('#waterElement').removeClass("active");
    $('#treeElement').removeClass("active");
    $('#lightElement').removeClass("active");
    $('#darkElement').removeClass("active");
}

/**
 * ボタンの選択状態を取得し、属性用の数値を返す
 * @returns 属性用の数値
 */
function hasActive() {
    if($('#fireElement').hasClass("active")) return 1;
    if($('#waterElement').hasClass("active")) return 4;
    if($('#treeElement').hasClass("active")) return 3;
    if($('#lightElement').hasClass("active")) return 0;
    if($('#darkElement').hasClass("active")) return 2;
    return 0;
}

/**
 * 属性用の数値から、有利不利を判定して属性倍率を返す
 * 光:0 火:1 闇:2 木:3 水:4
 * @param {int} charaElementNumber キャラ属性用の数値
 * @param {int} enemyElementNumber 敵属性用の数値
 * @returns 属性倍率
 */
function magnification(charaElementNumber, enemyElementNumber) {
    switch( (charaElementNumber - enemyElementNumber + 5) % 5 ) {
        case 0:
            return 1.0;
        case 1:
            return 1.5;
        case 2:
            return 2.0;
        case 3:
            return 0.8;
        case 4:
            return 0.9;
    }
}