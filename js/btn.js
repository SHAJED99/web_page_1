function btn_hover_circle_border_effect(btn_class_name) {
    var key = $(btn_class_name);

    key.css({
        'position': 'relative',
        'overflow': 'hidden',
    });

    key.append("<span></span><span></span><span></span><span></span>");

    key.find('span').css({
        'position': 'absolute',
        'display': 'block',
    });

    var span_background_color = key.find('span').css("background-color");
    var span_height = key.find('span').css("height");
    var btn_transition_delay;

    key.hover(function() {
        btn_transition_delay = parseFloat($(this).css("transition-delay"));
        if (btn_transition_delay == 0) {
            btn_transition_delay = 1;
        }

        btn_transition_delay = btn_transition_delay / 4;
    })

    // SPAN CSS

    key.find('span:nth-child(1)').css({
        'top': '0px',
        'left': '-100%',
        'width': '100%',
        'background': 'linear-gradient(90deg, transparent, ' + span_background_color + ')',
    });

    key.find('span:nth-child(3)').css({
        'bottom': '0px',
        'right': '-100%',
        'width': '100%',
        'background': 'linear-gradient(270deg, transparent, ' + span_background_color + ')',
    });

    key.find('span:nth-child(2)').css({
        'top': '-100%',
        'right': '0px',
        'width': span_height,
        'height': '100%',
        'background': 'linear-gradient(180deg, transparent, ' + span_background_color + ')',
    });

    key.find('span:nth-child(4)').css({
        'bottom': '-100%',
        'left': '0px',
        'width': span_height,
        'height': '100%',
        'background': 'linear-gradient(0deg, transparent, ' + span_background_color + ')',
    });

    // ------------------------------------

    // MOUSEENTER
    key.on('mouseenter', function() {
        $(this).find('span:nth-child(1)').css({
            'left': '100%',
            'transition': 4 * btn_transition_delay + 's',
            'transition-delay': 0 + 's',
        });

        $(this).find('span:nth-child(3)').css({
            'right': '100%',
            'transition': 4 * btn_transition_delay + 's',
            'transition-delay': 2 * btn_transition_delay + 's',
        });

        $(this).find('span:nth-child(2)').css({
            'top': '100%',
            'transition': 4 * btn_transition_delay + 's',
            'transition-delay': 1 * btn_transition_delay + 's',
        });

        $(this).find('span:nth-child(4)').css({
            'bottom': '100%',
            'transition': 4 * btn_transition_delay + 's',
            'transition-delay': 3 * btn_transition_delay + 's',
        });
    });
    // ------------------------------------

    // MOUSEOUT
    key.on('mouseout', function() {
        $(this).find('span:nth-child(1)').css({
            'left': '-100%',
            'transition': '0s',
        });

        $(this).find('span:nth-child(3)').css({
            'right': '-100%',
            'transition': '0s',
        });

        $(this).find('span:nth-child(2)').css({
            'top': '-100%',
            'transition': '0s',
        });

        $(this).find('span:nth-child(4)').css({
            'bottom': '-100%',
            'transition': '0s',
        });
    })

    // ------------------------------------
}