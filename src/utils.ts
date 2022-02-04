import $ from "jquery";

export const renderSelect = () => {
    $('select').each(function () {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            let rel = $(this).attr('rel')
            if(rel){
                $this.val(rel);
            }
            $list.hide(); //console.log($this.val());
        });
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });
}

export const renderTabs = () => {
    $('.tab-link').click(function () {
        var tabID = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
    });
    $('.tab-link-work').click(function () {
        var tabID = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
    }); // Tabs End Here
}

// export const tiltImage = () => {
//     $('.img-tilt').tilt({
//         maxTilt: 5,
//         glare: true,
//         maxGlare: .5
//     });
// }

export const toggleProfileRender = () => {
    $(".click-open3").click(function () {
        $(".click-event3").toggleClass("displayblock");
        $(".click-event2").removeClass("displayblock");
        $(".click-event1").removeClass("displayblock");
    });

    $(".click-open2").click(function () {
        $(".click-event2").toggleClass("displayblock");
        $(".click-event3").removeClass("displayblock");
        $(".click-event1").removeClass("displayblock");
    });
}

export const loadShare = () => {
    $(".icon-share").click(function () {
        $(".share-hover").toggleClass("block-3");
    });
}
