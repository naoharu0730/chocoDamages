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
    let modeNumber = hasModeActive();
    let elementNumber = hasElementActive();
    let bassDamage = (atkTotal - defTotal) * modeMagnification(modeNumber);

    // 結果の表示
    $('#fireResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 1) - toleranceTotal), 0));
    $('#waterResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 4) - toleranceTotal), 0));
    $('#treeResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 3) - toleranceTotal), 0));
    $('#lightResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 0) - toleranceTotal), 0));
    $('#darkResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 2) - toleranceTotal), 0));
    $('#emptyResult').text(Math.max(Math.ceil(bassDamage * 1.0 - toleranceTotal), 0));
    $('#fireCriticalResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#waterCriticalResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#treeCriticalResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#lightCriticalResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#darkCriticalResult').text(Math.max(Math.ceil(bassDamage * elementMagnification(elementNumber, 1) * 1.75 - toleranceTotal), 0));
    $('#emptyCriticalResult').text(Math.max(Math.ceil(bassDamage * 1.0 * 1.75 - toleranceTotal), 0));
}

/**
 * 計算モードボタンの選択状態を解除する
 */
 function resetModeActive() {
    $('#physicalMode').removeClass("active");
    $('#magicalMode').removeClass("active");
}

/**
 * 計算モードボタンの選択状態を取得し、計算モード用の数値を返す
 * @returns 属性用の数値
 */
 function hasModeActive() {
    if($('#physicalMode').hasClass("active")) return 0;
    if($('#magicalMode').hasClass("active")) return 1;
    return 0;
}

/**
 * 属性ボタンの選択状態を解除する
 */
function resetElementActive() {
    $('#fireElement').removeClass("active");
    $('#waterElement').removeClass("active");
    $('#treeElement').removeClass("active");
    $('#lightElement').removeClass("active");
    $('#darkElement').removeClass("active");
}

/**
 * 属性ボタンの選択状態を取得し、属性用の数値を返す
 * @returns 属性用の数値
 */
function hasElementActive() {
    if($('#fireElement').hasClass("active")) return 1;
    if($('#waterElement').hasClass("active")) return 4;
    if($('#treeElement').hasClass("active")) return 3;
    if($('#lightElement').hasClass("active")) return 0;
    if($('#darkElement').hasClass("active")) return 2;
    return 0;
}

/**
 * 計算モード用の数値から、計算モード倍率を返す
 * 物理:0 魔法:1
 * @param {int} modeNumber 計算モード用の数値
 * @returns 計算モード倍率
 */
function modeMagnification(modeNumber) {
    switch(modeNumber) {
        case 0:
            return 1.5;
        case 1:
            return 1.0;
        default:
            return 1.5;
    }
}

/**
 * 属性用の数値から、有利不利を判定して属性倍率を返す
 * 光:0 火:1 闇:2 木:3 水:4
 * @param {int} charaElementNumber キャラ属性用の数値
 * @param {int} enemyElementNumber 敵属性用の数値
 * @returns 属性倍率
 */
function elementMagnification(charaElementNumber, enemyElementNumber) {
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
        default:
            return 1.0
    }
}