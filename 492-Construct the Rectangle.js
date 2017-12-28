// For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:
//
// 1. The area of the rectangular web page you designed must equal to the given target area.
//
// 2. The width W should not be larger than the length L, which means L >= W.
//
// 3. The difference between length L and width W should be as small as possible.
// You need to output the length L and the width W of the web page you designed in sequence.

// Math problem:
// Naive solution is just having l as area and w starts from 1. Increment and record l as long as
// area % w === 0

var constructRectangle = function(area) {
    if (!area) return [];
    var l = area;
    var w = 1;
    while (w < l) {
      if (area % w === 0) {
        l = area/w;
      }
      w++;
    }

    return [l, area/l]
};

// Better solution: we know the maximum value of w is square root of area. We initiate w as that then
// just decrement until area % w === 0

var constructRectangle = function(area) {
    if (!area) return [];
    var w = Math.floor(Math.sqrt(area));
    while(area%w !== 0) {
        w--;
    }
    return [area/w, w];
};
