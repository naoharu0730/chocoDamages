$(document).ready(function () {
    // ステータス入力の更新
    $('input[type="number"]').change(function () {
        calculation() // 入力値の更新タイミングで更新
    });

    // 属性選択
    $('#fireElement').on('click', function () {
        resetActive() // ボタンの選択状態を解除
        $('#fireElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
    $('#waterElement').on('click', function () {
        resetActive() // ボタンの選択状態を解除
        $('#waterElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
    $('#treeElement').on('click', function () {
        resetActive() // ボタンの選択状態を解除
        $('#treeElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
    $('#lightElement').on('click', function () {
        resetActive() // ボタンの選択状態を解除
        $('#lightElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
    $('#darkElement').on('click', function () {
        resetActive() // ボタンの選択状態を解除
        $('#darkElement').addClass("active");
        calculation() // 処理の追加タイミングで更新
    });
})