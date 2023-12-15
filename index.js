document.addEventListener('DOMContentLoaded', function() {
    // 상하, 좌우 고정 스크롤 테이블
    let leftTableWidth = document.querySelector('.left_table table').offsetWidth;
    let rightTableWidth = document.querySelector('.right_table table').offsetWidth;
    let totalTableWidth = leftTableWidth + rightTableWidth;

    // 각 요소에 대해 width값 설정
    let elements = document.querySelectorAll('.table_thead, .table_tbody, .total_table_wrap');
    elements.forEach(function(element) {
        element.style.width = totalTableWidth + 'px';
    });

    // right_table 위치 및 최소 너비 설정
    let rightTables = document.querySelectorAll('.right_table');
    rightTables.forEach(function(element) {
        element.style.left = leftTableWidth + 'px';
        element.style.minWidth = 'calc(50% - ' + leftTableWidth + 'px)';
    });
});
