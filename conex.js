(function($) { "use strict";
		
	

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});          
              
})(jQuery); 

$(function () {
    console.log(document.cookie);
    function getCookieByName(name) {
        const cookies = document.cookie.split(";");
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    if(getCookieByName('mode') == 'light') {
        $('body').addClass('light');
		$('#switch').addClass('switched')
    }

    if($('#switch').hasClass('switched')) {
        $('#switch').on('click', function () {
            document.cookie = `mode=dark; max-age=120`
        })
    } else {$('#switch').on('click', function () {
        document.cookie = `mode=light; max-age=120`
    })


    }
})


function smoothScrollToTop(event) {
  event.preventDefault();
  const scrollDuration = 1000; 
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}


 
   let currentPage = 0;
  const pages = document.querySelectorAll('.page');
  const book = document.getElementById('book');
  const homeBtn = document.getElementById('homeBtn');

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.remove('active', 'previous');
      if (i === index) {
        page.classList.add('active');
      } else if (i === index - 1) {
        page.classList.add('previous');
      }
    });
  }

  // 初始頁面
  showPage(currentPage);

  // 只能往下翻頁
  let scrollDebounce;
  book.addEventListener('wheel', (e) => {
    e.preventDefault();
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      if (e.deltaY > 0) { // 只能往下翻頁
        if (currentPage < pages.length - 1) {
          currentPage++;
          showPage(currentPage);
        }
      }
    }, 100);
  }, { passive: false });

  // 返回首頁按鈕
  homeBtn.addEventListener('click', () => {
    currentPage = 0;
    showPage(currentPage);
  });


  function GoForm() { conex.js
        //宣告欄位
        var field1 = $("[name='name']").val();
        var field2 = $("[name='phone']").val();
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd9EStiQTZjSU9QPaFAurcQklEefKwjX9M3K6jbWWP4PuvpqQ/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
            data: { //Google Form 裡面的欄位 name ＊＊記得要改＊＊
                "entry.538809891": field1,
                "entry.88279818": field2
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    alert("已送出!"); //完成送出表單的警告視窗
                },
                200: function () {
                    alert("已送出!"); //完成送出表單的警告視窗
                }
            }
        });
  }