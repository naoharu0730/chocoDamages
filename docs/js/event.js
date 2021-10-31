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

        $('.atk-reference').text("敵ATK参照");
        $('#atk-reference-list > option').remove(); //選択肢を全削除
        $('#atk-reference-list').append(
            $('<option>').html("直接入力").val("0"),
            $('<option>').html("アレス第9(5,711)").val("5711"),
            $('<option>').html("墓守主ヨモツノミコトHP低(6,537)").val("6537"),
            $('<option>').html("グランソラスシアン(65,333)").val("65333"),
            $('<option>').html("アルビノラット(69,333)").val("69333"),
            $('<option>').html("ピュアースピリット(86,666)").val("86666"),
            $('<option>').html("リジェクター(533,333)").val("533333"),
        );
        updateReference() // ATK参照ドロップダウンの更新タイミングで更新

        $('.atk-item').text("敵ATK");
        $('.def-item').text("キャラDEF");
        
        calculation() // 処理の追加タイミングで更新
    });
    $('#magicalMode').on('click', function () {
        resetModeActive() // ボタンの選択状態を解除
        $('#magicalMode').addClass("active");

        $('.atk-reference').text("敵MAT参照");
        $('#atk-reference-list > option').remove(); //選択肢を全削除
        $('#atk-reference-list').append(
            $('<option>').html("直接入力").val("0"),
            $('<option>').html("ウキメ(5,000)").val("5000"),
            $('<option>').html("クロザクローン(48,000)").val("48000"),
            $('<option>').html("ピュアースピリット(74,000)").val("74000"),
        );
        updateReference() // ATK参照ドロップダウンの更新タイミングで更新

        $('.atk-item').text("敵MAT");
        $('.def-item').text("キャラMDF");

        calculation() // 処理の追加タイミングで更新
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

    // 使い方の表示
    $('#description').on('click', function () {
        $('.description-top.ui.modal').modal('show');
    });
})