$(function () {
    var images =
        [
            "Burger.png", "RecipeHelper.png", "WeatherDashboard.png", "DayPlanner.png",
            "PasswordGenerator.png", "RecipeHelper2.png", "employee-directory.png", "fitness-tracker.png",
            "budget-tracker.png", "quiz.png"
        ];
    var nrImg = Math.floor(Math.random() * images.length);
    $("#img_portfolio").attr("src", "assets/img/" + images[nrImg]);
    setInterval(function () {
        if (++nrImg >= images.length) {
            nrImg = 0;
        }
        $("#img_portfolio").attr("src", "assets/img/" + images[nrImg]);
    }, 2000);
});