/**
 * Created by sao on 2017/5/17.
 */
function indexChange() {
    if (window.parent.getCount() == 1) {
        $(".table_style").addClass("th");
    } else if (window.parent.getCount() == 0) {
        $(".table_style").removeClass("th");
    } else if (window.parent.getCount() == 2) {
        $(".table_style").addClass("th");
    }
    else if (window.parent.getCount() == 3) {
        $(".table_style").addClass("th");
    }
}
