function update_Score()
{
    $("#scoreboard").text("Total Score: " + score);
}
function check_select()
{
    select_score = 0;
    select_score += document.getElementById("Select3").value * 50;
    select_score += document.getElementById("Select1").value * 50;
    select_score += document.getElementById("Select4").value * 75;
    select_score += document.getElementById("Select2").value * 25;
    score += select_score - previous_score;
    previous_score = select_score;
    update_Score();
}
let score = 0;
let select_score = 0;
let previous_score = 0;
let three = 0;

    $('#three .pointButton').on('click', function () {
        $(this).attr('data-counter', parseInt($(this).attr('data-counter') + 1));
        // if(this.attr('data-counter') === 1)
        if ($(this).attr('data-counter') === '1') {
            score += 25;
            $(this).addClass("clicked");
        } else if ($(this).attr('data-counter') === '11') {
            score += 25;
            $(this).removeClass('clicked');
            $(this).addClass("twoClick");
        } else {
            score -= 50;
            $(this).attr('data-counter', '');
            $(this).removeClass('clicked twoClick');
        }
        update_Score();
    });


$('#programs .pointButton, #one .pointButton').on('click', function ()
{
    $(this).toggleClass('clicked');
    if ($(this).hasClass('clicked'))
        score += 25;
    else
        score -= 25;
    update_Score();
})

$("select").on('change', function ()
{
    check_select();
})










