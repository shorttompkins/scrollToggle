var ScrollToggle = function (top, callbackShow, callbackHide) {
    this.ontop = 0;
    this.hontop = 0;
    this.top = top - 20;
    this.show = callbackShow;
    this.hide = callbackHide;
    var self = this;


    (function () {
        $(window).scroll(function (event) {
            var y = $(window).scrollTop();

            if (y >= self.top)
                self.ontop = 1;
            else
                self.ontop = 0;

            if (self.ontop !== self.hontop) {
                if (self.ontop) {
                    self.show();
                }
                else {
                    self.hide();
                }
            }
            self.hontop = (self.ontop * 1);
        });
    })();
};




var scroller = new ScrollToggle($($self.attr('href')).position().top, function () {
    $('#vertnav a').removeClass('active');
    $self.addClass('active');
}, function () {
    $('#vertnav a').removeClass('active');
    $self.prev().addClass('active');
});