var profile = Snap.select("#profile");
console.log(profile);
profile.hover(
    function() {
        profile.attr({fill: 'red'});
    },
    function() {
        console.log('out');
    });