(function ($) {
    $(function () {

        $('#phone-nav').click(function () {
            $('body').toggleClass('navShown')
        })

        $('.sub-nav').parent('li').addClass('has-sub-nav')
        if ($(window).width() > 991) {

            $('.header-cta a.login').mouseenter(function () {
                $(this).addClass('hoverd')
                $('.main-nav > ul > li').stop(true, true).removeClass('hoverd')
            })

            $('.main-nav > ul > li, .header-cta a.login').addClass('hoverd')
            $('.main-nav > ul > li > a').mouseenter(function (e) {
                e.preventDefault()
                console.log('enter')
                $('.main-nav > ul > li, .header-cta a.login').stop(true, true).removeClass('hoverd')
                $(this).parent('li').stop(true, true).addClass('hoverd')
            })
            $('.main-nav > ul > li > a, .header-cta a.login').mouseleave(function () {
                console.log('enter')
                $('.main-nav > ul > li, .header-cta a.login').stop(true, true).addClass('hoverd')
            })

            $('.has-sub-nav').each(function () {
                var $this = $(this)
                $this.find('> a').mouseenter(function () {
                    $(this).stop(true, true).addClass('nav-open')
                    $this.find('.sub-nav').stop(true, true).fadeIn()
                })
                $this.mouseleave(function () {
                    $('.has-sub-nav a').removeClass('nav-open')
                    $this.find('.sub-nav').stop(true, true).fadeOut()
                })
            })
        }

        if ($(window).width() < 992) {
            $(".has-sub-nav").each(function () {
                var $this = $(this);
                $this.find(" > a").on("click touch", function (e) {
                    e.preventDefault();
                    $(".has-sub-nav > a").removeClass("nav-open")
                    $(".sub-nav").slideUp();
                    if ($this.find(".sub-nav:visible").length) {
                        $(".has-sub-nav > a").removeClass("nav-open")
                        $(".sub-nav").slideUp();
                    } else {
                        $this.find('> a').addClass("nav-open")
                        $(".sub-nav").slideUp();
                        $this.find(".sub-nav").slideDown();
                    }
                })
            })
        }


        if ($('.sponsor-item-wrap').length) {
            $('.sponsor-item-wrap').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                swipe: false,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                pauseOnHover: false
            });
        }

        if ($('.company-updates-sliders').length) {
            $('.company-updates-sliders').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '.slider-arrow-left',
                nextArrow: '.slider-arrow-right',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            adaptiveHeight: true,
                        },
        },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
        },
      ],
            });
        }

        $('input').each(function () {
            var $_this = (this)
            $('input').on('keyup', function () {
                var $$_this = $(this)

                if ($$_this.val() == '') {
                    $$_this.parent().removeClass('focused');
                } else {
                    $$_this.parent().addClass('focused');
                }
            });

        })

        //faq
        $(".question-content-info").each(function () {
            var $this = $(this);
            $this.find(" > h5").on("click touch", function () {
                $(".question-content-info").removeClass("accordion-active")
                $(".question-content-text").slideUp();
                if ($this.find(".question-content-text:visible").length) {
                    $(".question-content-info").removeClass("accordion-active")
                    $(".question-content-text").slideUp();
                } else {
                    $this.addClass("accordion-active")
                    $(".question-content-text").slideUp();
                    $this.find(" > .question-content-text").slideDown();
                }
            })
        })

        //blog
        $('.blog-tab-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.blog-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.blog-main-section .blog-main-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        if ($('.blog-page').length) {
            $('body').addClass('blog-page')
        }
        if ($('.admin-wrap').length) {
            $('body').addClass('admin-page')
        }

        //About
        if ($('.executive-slider-item-wrap').length) {
            $('.executive-slider-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: true,
                navigation: false,
                autoplaySpeed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                },
                ],
            });
            $(window).on('resize', function () {
                $('.executive-slider-item-wrap').slick('resize');
            });
        }
        
        $('.survey-progress-item').eq(0).addClass('progress-active')
        $('.admin-survey-tab-item:first').show();
        $('.admin-survey-item').each(function () {
            var $this = $(this);
            $('.survey-next-prev a').click(function () {
                //                if ($this.find('input').is(':checked') && $this.find("textarea").val() != "") {
                $('.admin-survey-tab-item').hide();
                var activeTab = $(this).attr('href');
                $(activeTab).fadeIn(function () {
                    console.log('text')
                    $('html, body').animate({
                        scrollTop: 0
                    }, '300');
                });
                //                }
                return false;
            });
        })
        
        $('.registration-form-progress-item').eq(0).addClass('registration-form-progress-active')
        $('.registration-form-tab-item:first').show();
        $('.registration-form-tab-item').each(function () {
            var $this = $(this);
            $('.registration-form-row-input').each(function () {
                var $$this = $(this)
                $('.speaker-next-prev a').click(function () {
//                    if ($$this.find('input').val() != "" && $$this.find("textarea").val() != "") {
                        $('.registration-form-progress-active').next().addClass('registration-form-progress-active')
                        $('.registration-form-tab-item').hide();
                        var activeTab = $(this).attr('href');
                        $(activeTab).fadeIn();
//                    }
                    return false;
                });
            })
        })
        
        $('.speaker-prev a').click(function(){
            $('.registration-form-progress-item:last-child').removeClass('registration-form-progress-active')
        })


        $('.filter-event-row').each(function () {
            var $$this = $(this)
            var selectAllItems = $$this.find('.checkall input');
            var checkboxItem = $$this.find(":checkbox");
            var RadioItemClick = $$this.find('input[type="radio"]');
            var RadioItem = $$this.find(":radio");
            var $this = $(this);
            var radioC = $(this).find('input[type="radio"]')
            var checkboxC = $(this).find('input[type="checkbox"]')
            $(selectAllItems).click(function () {
                if (this.checked) {
                    $(checkboxItem).each(function () {
                        this.checked = true;
                    });
                } else {
                    $(checkboxItem).each(function () {
                        this.checked = false;
                    });
                }

            });
            $this.find('input[type="radio"]').on('click', function () {
                if (radioC.prop("checked")) {
                    $('.filter-event-checkbox input[type="checkbox"]').attr('disabled', true)
                    //                    $('.filter-event-checkbox input[type="checkbox"]').attr('checked', true)
                    checkboxC.attr('disabled', false)

                }
            })
        })

        $('.filter-event-checkbox input').click(function () {
            if (!$(this).prop("checked")) {
                $(".filter-event-checkbox.checkall input").prop("checked", false);
            }
        })

        $('.filter-event-row input[type="radio"]').on('change', function () {
            $('.filter-event-checkbox input[type="checkbox"]').checked = false;
            console.log('red')
        })

        $('.filter-topic-checkbox').each(function () {
            var $$this = $(this);
            var selectAll = $('.select-all input');
            var checkboxItem = $$this.find(":checkbox");
            $(selectAll).click(function () {
                if (this.checked) {
                    $(checkboxItem).each(function () {
                        this.checked = true;
                    });
                } else {
                    $(checkboxItem).each(function () {
                        this.checked = false;
                    });
                }

            });
        })


        $('.filter-mega-menu-item').each(function () {
            var $this = $(this);
            $('.summits-filter-right ul li a').not('.summits-filter-right ul li.reset-filters a').click(function () {
                $('.filter-mega-menu-item').hide();
                $('.summits-filter-right ul li a').removeClass('filter-active');
                $(this).addClass('filter-active');
                setTimeout(function () {
                    $('.filter-mega-menu-wrap').slideDown();
                }, 200)
                var activeTab = $(this).attr('href');
                $(activeTab).show();
                return false;
            });
        })

        $('.filter-mega-menu-close').click(function () {
            setTimeout(function () {
                $('.filter-mega-menu-item').hide();
                $('.summits-filter-right ul li a').removeClass('filter-active');
            }, 400)
            $('.filter-mega-menu-wrap').slideUp();
        })

        $('.summits-event-bullet').each(function () {
            var $$this = $(this);

            $$this.find('img').click(function () {
                $$this.remove()
            })

        })



         //Summit Detail

         $('.meet-the-sponsors-item').each(function () {
            var $this = $(this);
            
            $this.find('.meet-the-sponsors-content a').click(function (e) {
                $('body').addClass('details-tow-popup')
                e.preventDefault()
                $this.find(".speaker-detail-tow-wrap").addClass('speaker-detail-show')

            })
            var $thisTrig = $this.find('.speaker-details-caliber-slider-item-wrap')
            if ($this.find('.speaker-details-caliber-cleint-item-wrap').length) {
            $this.find('.speaker-details-caliber-cleint-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 3000,
                infinite: true,
                prevArrow: $this.find('.arrow-prev'),
                nextArrow: $this.find('.arrow-next'),
                fade:true,
                asNavFor: $thisTrig,
              
            })

            $(window).on('resize', function () {
                $this.find('.speaker-details-caliber-cleint-item-wrap').slick('resize');
            });
        }
        var $thisTrigger = $this.find('.speaker-details-caliber-cleint-item-wrap')
        if ($this.find('.speaker-details-caliber-slider-item-wrap').length) {
            $this.find('.speaker-details-caliber-slider-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 3000,
                infinite: false,
                asNavFor: $thisTrigger,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            })

            $(window).on('resize', function () {
                $this.find('.speaker-details-caliber-slider-item-wrap').slick('resize');
            });
        }

        })

        $('.popup-tow-close').click(function (e) {
            e.preventDefault()
            $(".speaker-detail-tow-wrap").removeClass('speaker-detail-show')
            $('body').removeClass('details-two-popup')
        })
        
        // $('.meet-the-sponsors-content a').click(function (e) {
        //     $('body').addClass('details-tow-popup')
        //     e.preventDefault()
        //     $(".speaker-detail-tow-wrap").fadeToggle()
        // });
        // $('.popup-tow-close').click(function (e) {
        //     e.preventDefault()
        //     $(".speaker-detail-tow-wrap").fadeOut()
        //     $('body').removeClass('details-two-popup')
        // });

         //Summit Detail
      

        $('.popup-close').click(function (e) {
            e.preventDefault()
            $(".speaker-detail-wrap").fadeOut()
            $('body').removeClass('details-popup')
            $('.speaker-detail-main-wrap').html('')
        })
        
        
        $('.executive-board-item').each(function(){
            var $this = $(this);
            $this.find('.executive-board-item-btn a.read-btn').click(function(e){
                var modalContentHtml = $this.find('.summit-speakers-modal-content').html();
                var modalHtml = $('.speaker-detail-main-wrap');
                
                modalHtml.html(modalContentHtml)
                $('body').addClass('details-popup')
                e.preventDefault()
                $(".speaker-detail-wrap").fadeToggle()
                
            })
            
            
        })

         //Summit Detail
        if ($('.cxoera-executive-board-item-wrap').length) {
            $('.cxoera-executive-board-item-wrap').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '#executive-board-arrow-left',
                nextArrow: '#executive-board-arrow-right',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            adaptiveHeight: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            });
        }

        //Summit Detail
        if ($('#summit-speakers-slider').length) {
            $('#summit-speakers-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                prevArrow: '#summit-speaker-arrow-left',
                nextArrow: '#summit-speaker-arrow-right',
                responsive: [
                    {
                            breakpoint: 600,
                            settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('#summit-speakers-slider').slick('resize');
                });
        }

         //Summit Detail
        if ($("select.styled-select").length) {	
            $("select.styled-select").selectric({	

            });	
        }

        //Summit Detail
        $('.cxo-summit-tab-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.cxo-summit-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.cxo-summit-item-wrap .cxo-summit-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

      //Summit Detail
        $('.summit-agenda-tab-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.summit-agenda-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.summit-agenda-tab-item-wrap .summit-agenda-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;
            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);
                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                }
            });
        }

        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');
        const updateProperties = (elem, state) => {
            elem.style.setProperty('--x', `${state.x}px`)
            elem.style.setProperty('--y', `${state.y}px`)
            elem.style.setProperty('--width', `${state.width}px`)
            elem.style.setProperty('--height', `${state.height}px`)
            elem.style.setProperty('--radius', state.radius)
            elem.style.setProperty('--scale', state.scale)
        }

        $('.summit-details-top-inner ul li a').click(function (e) {
            e.preventDefault();
            if ($(window).width() < 769) {

                $('body').removeClass('navShown')
                $('.nav-wrap').hide(100)
            }
            var headerHeight = $('.main-header-section').outerHeight()
            var target = $($(this).attr('href'));
            if (target.length) {
                var scrollTo = target.offset().top - headerHeight;
                $('body, html').animate({
                    scrollTop: scrollTo + 'px'
                }, 800);
            }
        });
        
        


        if ($(".registration-form-row-input input[type='number']").length) {
            var countryData = window.intlTelInputGlobals.getCountryData(),
                input = document.querySelector(".registration-form-row-input input[type='number']");

            var iti = window.intlTelInput(input, {
                hiddenInput: "full_phone"
            });

        }

        if ($("select.selectric-select").length) {
            $("select.selectric-select").selectric();
        }
        
        $('.upload-btn').each(function(){
            var $$this = $(this);
            var realFileBtn = $$this.find("input");
            var customBtn = $$this.find("span");
            var customImage = $$this.find("figure");
            
            customBtn.on("click", function () {
                realFileBtn.click();
            });
            customImage.on("click", function () {
                realFileBtn.click();
            });

            
             realFileBtn.on("change", function () {
                 var filepath = this.value;
                 var m = filepath.match(/([^\/\\]+)$/);
                 var filename = m[1];
                 customBtn.text(filename);
             });
        })
        
        $('.event-cancel-trigger').on('click', function(e){
            e.preventDefault()
            $('.event-cancel-wrap').fadeIn()
        }) 
        $('.event-go-back-btn a').on('click', function(e){
            e.preventDefault()
            $('.event-cancel-wrap').fadeOut()
        })
        
        if($(".animated-cursor").length){
            $(".animated-cursor").mouseenter(function(){
                $(".circle-cursor").css({
                    "opacity" : 1,
                    "visibility" : "visible"
                });
                $(".circle-scroll-cursor").css({
                    "opacity" : 0,
                    "visibility" : "hidden"
                });
            });
            $(".animated-cursor").mouseleave(function(){
                $(".circle-cursor").css({
                    "opacity" : 0,
                    "visibility" : "hidden"
                })
            });
        }
        
        
        
        var isDragging = false;
        $(".animated-cursor")
        .mousedown(function(){
            isDragging = false;
            $("body").addClass("draged");
        })
        .mouseup(function() {
            var wasDragging = isDragging;
            isDragging = false;
            if (!wasDragging) {
                $("body").removeClass("draged");
            }
        });



        $('.blog-page .blog-item').eq(0).addClass('blog-big-item');        
        $('.blog-page .blog-tab-trigger ul li').eq(0).addClass('tab-active');

        $('.login-radio').eq(0).click(function(){
            $('body').removeClass('speakers');
            $('body').removeClass('sponsors');
            $('.login-radio label:contains("For Attendees")').parents('body').addClass('attendees');
        });
        $('.login-radio').eq(1).click(function(){
            $('body').removeClass('attendees');
            $('body').removeClass('sponsors');
            $('.login-radio label:contains("For Speakers")').parents('body').addClass('speakers');
        });
        $('.login-radio').eq(2).click(function(){
            $('body').removeClass('attendees');
            $('body').removeClass('speakers');
            $('.login-radio label:contains("For Sponsors")').parents('body').addClass('sponsors');
        });

        $('.reset-filters a').click(function(e){
            e.preventDefault();
            window.location='/summits';
        });

        var headerHeight = $('.main-header-section').outerHeight();
        $("#registration-down").click(function() {
            $('html, body').animate({
                scrollTop: $("#registration-from-wrap").offset().top - headerHeight
            }, 1000);
        });

        $('.close-item').click(function (e) {
            e.preventDefault()
            $('.all-cookie').hide();
        });
        
        

    }) // End ready function.
})(jQuery)