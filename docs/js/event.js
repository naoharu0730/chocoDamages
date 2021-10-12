$(document).ready(function () {
    // ステータス入力の更新
    $('input[type="number"]').change(function () {
        calculation() // 入力値の更新タイミングで更新
    });

    // ステータス入力の更新
    $('select').change(function () {
        updateReference() // ATK参照ドロップダウンの更新タイミングで更新
        calculation() // 入力値の更新タイミングで更新
    });

    // 計算モード選択
    $('#physicalMode').on('click', function () {
        resetModeActive() // ボタンの選択状態を解除
        $('#physicalMode').addClass("active");
        calculation() // 処理の追加タイミングで更新

        $('.atk-item').text("敵ATK");
        $('.def-item').text("キャラDEF");
    });
    $('#magicalMode').on('click', function () {
        resetModeActive() // ボタンの選択状態を解除
        $('#magicalMode').addClass("active");
        calculation() // 処理の追加タイミングで更新

        $('.atk-item').text("敵MAT");
        $('.def-item').text("キャラMDF");
    });

    // 属性選択
    $('#fireElement').on('click', function () {
        resetElementActive() // ボタンの選択状態を解除
        $('#fireElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
    $('#waterElement').on('click', function () {
        resetElementActive() // ボタンの選択状態を解除
        $('#waterElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
    $('#treeElement').on('click', function () {
        resetElementActive() // ボタンの選択状態を解除
        $('#treeElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
    $('#lightElement').on('click', function () {
        resetElementActive() // ボタンの選択状態を解除
        $('#lightElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
    $('#darkElement').on('click', function () {
        resetElementActive() // ボタンの選択状態を解除
        $('#darkElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
})