/*Loading--*/
    setTimeout(function (){
        $(".loading").css("display","none");
        setTimeout (function () {
            $(".container-fluid").fadeIn("slow");
        },50);
    },1600);

        $(".spinx6").css("animation","spin 1.3s");
        $(".spinx5").css("animation","spin 1.42s");
        $(".spinx4").css("animation","spin 1.54s");
        $(".spinx3").css("animation","spin 1.66s");
        $(".spinx2").css("animation","spin 1.78s");
        $(".spinx1").css("animation","spin 1.9s");


    function getOffset(el) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }

    function getScrollbarWidth() {

        // Creating invisible container
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // forcing scrollbar to appear
        outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        document.body.appendChild(outer);

        // Creating inner element and placing it in the container
        const inner = document.createElement('div');
        outer.appendChild(inner);

        // Calculating difference between container's full width and the child width
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);

        return scrollbarWidth;

    }

    /*Data--*/
    var info_product = [];
    info_product[0] = {name:"Cranberry", 
        price_string:"150,000<span>đ</span>",
        price_number:150000,
        supplier:"Nhà cung cấp: <i>Vinamilk</i>",
        src_pr:"images/Cranberry.png",
        content:"Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,...",
        code:"Mã sản phẩm: <i>Chưa có</i>",
        img_dt1:"images/Cranberry.png",
        img_dt2:"images/daotienuc.png",
        img_dt3:"",
        img_dt4:"",
    }
    info_product[1] = {name:"Đào tiên Úc", 
        price_string:"150,000<span>đ</span>",
        price_number:150000,
        supplier:"Nhà cung cấp: <i>Emart</i>",
        src_pr:"images/daotienuc.png",
        content:"Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Trang chủ,...",
        code:"Mã sản phẩm: <i>434</i>",
        img_dt1:"images/daotienuc.png",
        img_dt2:"images/Cranberry.png",
        img_dt3:"images/xoaidomy.png",
        img_dt4:"",
    }
    info_product[2] = {name:"Khoai môn", 
        price_string:"23,000<span>đ</span>",
        price_number:23000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/khoaimon.png",
        content:"Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,...",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/khoaimon.png",
        img_dt2:"",
        img_dt3:"",
        img_dt4:"",
    }
    info_product[3] = {name:"Ớt chuông vàng", 
        price_string:"70,000<span>đ</span>",
        price_number:70000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/otchuongvang.png",
        content:"Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,...",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/otchuongvang.png",
        img_dt2:"",
        img_dt3:"",
        img_dt4:"",
    }
    info_product[4] = {name:"Ớt sừng", 
        price_string:"60,000<span>đ</span>",
        price_number:60000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/otsung.png",
        content:"Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,...",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/otsung.png",
        img_dt2:"images/khoaimon.png",
        img_dt3:"images/Cranberry.png",
        img_dt4:"images/daotienuc.png",
    }
    info_product[5] = {name:"Su su non", 
        price_string:"35,000<span>đ</span>",
        price_number:35000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/susunon.png",
        content:"Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,...",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/susunon.png",
        img_dt2:"",
        img_dt3:"",
        img_dt4:"",
    }
    info_product[6] = {name:"Sữa meiji số 9 820g (1 - 3 tuổi)", 
        price_string:"1,200,000<span>đ</span>",
        price_number:1200000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/meiji9.jpg",
        content:"Sữa Meiji số 9 820g phù hợp cho trẻ từ 1-3 tuổi, không chỉ chứa các chất dinh dưỡng cơ bản như protein, chất béo, carbohydrat mà còn có các vitamin và khoáng chất rất khó có được từ sữa mẹ, sữa bò và thức ăn dạng rắn. Meiji còn bổ sung cả axit docosahexaenoic (DHA), các nucleotides và đặc biệt là hệ chất xơ GOS hỗ trợ tiêu hóa làm nên đặc tính mát của sữa giúp thúc đẩy sự phát triển toàn diện cả về thể chất lẫn não bộ của trẻ trong suốt giai đoạn thơ ấu. Sản phẩm được",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/meiji9.jpg",
        img_dt2:"images/pediasureba.png",
        img_dt3:"",
        img_dt4:"",
    }
    info_product[7] = {name:"Sữa Pediasure ba 850g (1 - 10 tuổi)", 
        price_string:"1,000,000<span>đ</span>",
        price_number:1000000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/pediasureba.png",
        content:"Sữa PediaSure BA là sản phẩm dinh dưỡng dùng bổ sung hoặc thay thế hoàn toàn bữa ăn của trẻ 1-10 tuổi, được đặc chế khoa học để cung cấp nguồn dinh dưỡng đầy đủ và cân đối, giúp thay thế và bổ sung kịp thời sự thiếu hụt của bữa ăn, cho trẻ khỏe mạnh và phát triển tốt, không bị suy dinh dưỡng hoặc béo phì, đặc biệt tốt khi dùng thường xuyên và lâu dài cho trẻ. Sữa đặc biệt phù hợp cho các bé biếng ăn, giúp trẻ nhanh chóng bắt kịp và tiếp tục đà tăng trưởng tối ưu cả về thể chất và trí tuệ. Sản phẩm đóng hộp thiếc 850g an toàn vệ sinh thực phẩm khi sử dụng....",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/pediasureba.png",
        img_dt2:"images/meiji9.jpg",
        img_dt3:"",
        img_dt4:"",
    }
    info_product[8] = {name:"Sườn non", 
        price_string:"100,000<span>đ</span>",
        price_number:100000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/suonnon.png",
        content:"Sườn non heo (hữu cơ) đảm bảo chất lượng và vệ sinh an toàn thực phẩm.Phù hợp chế biến các món kho, chiên, rim, nấu canh,... thơm ngon và giàu dinh dưỡng cho cả gia đình....",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/suonnon.png",
        img_dt2:"images/susunon.png",
        img_dt3:"images/otsung.png",
        img_dt4:"images/otchuongvang.png",
    }
    info_product[9] = {name:"Xoài đỏ mỹ", 
        price_string:"100,000<span>đ</span>",
        price_number:100000,
        supplier:"Nhà cung cấp: <i>BigC</i>",
        src_pr:"images/xoaidomy.png",
        content:"Sườn non heo (hữu cơ) đảm bảo chất lượng và vệ sinh an toàn thực phẩm.Phù hợp chế biến các món kho, chiên, rim, nấu canh,... thơm ngon và giàu dinh dưỡng cho cả gia đình....",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/xoaidomy.png",
        img_dt2:"images/susunon.png",
        img_dt3:"images/otsung.png",
        img_dt4:"images/otchuongvang.png",
    }
    info_product[10] = {name:"Tỏi", 
        price_string:"30,000<span>đ</span>",
        price_number:30000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/tỏi.webp",
        content:"Giá trị dinh dưỡng: Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/xoaidomy.png",
        img_dt2:"images/susunon.png",
        img_dt3:"images/otsung.png",
        img_dt4:"images/otchuongvang.png",
    }
    info_product[11] = {name:"Xương ống heo", 
        price_string:"50,000<span>đ</span>",
        price_number:50000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/suonongheo.webp",
        content:"Xương ống heo (hữu cơ) là phần xương của bắp chân con heo, phần xương này chứa nhiều tủy sống thường được dùng để  chế biến nước dùng trong các quán bún phở...Xương ống heo (hữu cơ) thường được dùng ninh, nấu, hầm làm nước dùng nấu lẩu, canh, cháo, soup...v...v",
        code:"Mã sản phẩm: <i>Chưa rõ</i>",
        img_dt1:"images/xoaidomy.png",
        img_dt2:"images/susunon.png",
        img_dt3:"images/otsung.png",
        img_dt4:"images/otchuongvang.png",
    }
    info_product[12] = {name:"Damson plums", 
        price_string:"500,000<span>đ </span><strike>600,000 <ins>đ</ins></strike>",
        price_number:500000,
        supplier:"Nhà cung cấp: <i>Khác</i>",
        src_pr:"images/nho mĩ.webp",
        content:"Tác dụng của trái chanh đối với sức khỏe đã được biết đến hàng thế kỷ nay, trong đó quan trọng nhất là tác dụng chống khuẩn, diệt vi-rút, tăng khả năng miễn dịch và tác dụng giảm cân nhờ khả năng hỗ trợ tiêu hóa và giải độc gan. Chanh có chứa nhiều chất có lợi như axit xitric, canxi, magiê, vitam..",
        code:"Mã sản phẩm: <i>008</i>",
        img_dt1:"images/xoaidomy.png",
        img_dt2:"images/susunon.png",
        img_dt3:"images/otsung.png",
        img_dt4:"images/otchuongvang.png",
    }
    info_product[13] = {name:"Xoài cát", 
        price_string:"45,000<span>đ </span>",
        price_number:45000,
        supplier:"Nhà cung cấp: <i>chưa rõ</i>",
        src_pr:"images/xoaicat.webp",
        content:"Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,",
        code:"Mã sản phẩm: <i>008</i>",
        img_dt1:"images/xoaidomy.png",
        img_dt2:"images/susunon.png",
        img_dt3:"images/otsung.png",
        img_dt4:"images/otchuongvang.png",
    }
    info_product[14] = {name:"Dưa leo gai", 
        price_string:"30,000<span>đ </span>",
        price_number:30000,
        supplier:"Nhà cung cấp: <i>chưa rõ</i>",
        src_pr:"images/dualeogai.webp",
        content:"Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,",
        code:"Mã sản phẩm: <i>008</i>",
        img_dt1:"images/xoaidomy.png",
        img_dt2:"images/susunon.png",
        img_dt3:"images/otsung.png",
        img_dt4:"images/otchuongvang.png",
    }
    info_product[15] = {name:"Phúc bồn tử", 
        price_string:"46,000<span>đ </span>",
        price_number:46000,
        supplier:"Nhà cung cấp: <i>chưa rõ</i>",
        src_pr:"images/phucbontu.webp",
        content:"Giá trị dinh dưỡng:   Nho tươi cung cấp các chất dinh dưỡng, làm giảm mệt nhọc ngay lập tức. Các nghiên cứu cho thấy Nho tươi có chứa vitamin A, C, Calcium và sắt...Mã hàng:Thể loại: Rau, quả hữu cơ, Rau quả bán chạy, Rau, quả tốt cho người già,Rau quả có lợi cho sức khỏe, Rau, quả nhập khẩu, Rau, quả trong nước, Sản phẩm nổi bật, Sản phẩm khuyến mãi, Trang chủ,",
        code:"Mã sản phẩm: <i>008</i>",
        img_dt1:"images/xoaidomy.png",
        img_dt2:"images/susunon.png",
        img_dt3:"images/otsung.png",
        img_dt4:"images/otchuongvang.png",
    }

    function change(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }

    /*Search in search--*/
    $(document).ready(function() {
        $("#search_ .search_icon").click(function(){
            var text="";
            var text_="";
            var text_number=[0];
            var text_html="";
            var n=0;
            text=change($(".search_input").val());
            text=text.toLowerCase();
            text=text.replace(/\s+/g, ' ');
            for (i=0;i<=info_product.length-1;i++) {
                text_=change(info_product[i].name);
                text_=text_.toLowerCase();
                text_=text_.replace(/\s+/g, ' ');   
                if (text_.includes(text)&&text!="") {
                    n+=1;
                    text_number[n]=i;
                }
            } 
            if (text_number.length-1 != 0 && $(".search_input").val() != "") {
                $(".number_result").html(text_number.length-1);
                $(".name_result").html($(".search_input").val());
                $(".label_pr").html($(".search_input").val()); 
                for (i=1;i<=text_number.length-1;i++) {
                    text_html+='<div class="px-2 pt-4 pr_sale_item parent_img mb-3 mb-lg-0">'+
                        '<div class="special_pr_main_item border position-relative ">'+
                            '<abbr title="'+info_product[text_number[i]].name+'"><a href="" class="d-flex flex-wrap justify-content-center"><img src="'+info_product[text_number[i]].src_pr+'" alt="" class="w-100"><br>'+
                                '<span class="text-dark text-nowrap">'+info_product[text_number[i]].name+'</span></a></abbr>'+
                            '<hr class="mx-auto hr_sample">'+
                            '<p class="text-center font-weight-bold">'+addcomma(info_product[text_number[i]].price_number)+'<span>đ</span></p>'+
                            '<div class="specialprmainitem_select position-absolute d-flex w-100 justify-content-center">'+
                                '<abbr title="Thêm vào giỏ" class="rounded mx-1 rank1 rank"><i class="fa fa-shopping-basket "></i></abbr>'+
                                '<abbr title="Xem chi tiết" class="rounded mx-1 rank2 rank"><a href="#"><i class="fas fa-exchange-alt"></i></a></abbr>'+
                                '<abbr title="Xem nhanh" class="rounded mx-1 rank3 rank"><i class="fa fa-eye"></i></abbr>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                }
                $(".main_search").html(text_html);
                abbr_vsb();
                fa_eye();
                fa_shopping_basket();
                detail();
                $(".search_container").show();
                $(".search_container").prevAll().remove();
                $(".search_empty").hide();
                $(".endsite_top").remove();
            } else if ($(".search_input").val() != ""){
                $(".label_pr").html($(".search_input").val()); 
                $(".search_container").hide();
                $(".search_empty").show();
                $(".search_container").prevAll().remove();
                $(".endsite_top").remove();
            } 
        });
    });

    var body_scroll = 0;
        window.onscroll = function() {myFunction()};
        function myFunction() {
            body_scroll = document.documentElement.scrollTop;
            if (screen_offset > 992-getScrollbarWidth()) {
                if (document.body.scrollTop > 197 || document.documentElement.scrollTop > 197) {
                    $("#nav_fixtop_pc").css({"top":"0px","background-color":"rgba(255,255,255,0.8)"});
                    $("#nav_fixtop_pc").css("transition","ease 1s");
                    $("#nav_fixtop_mb").css({"top":"0px","background-color":"rgba(255,255,255,0.8)"});
                    $("#nav_fixtop_mb > div").first().css({"background-color":"white","opacity":"0.5"});
                    $("#nav_fixtop_mb").css("transition","ease 1s");
                    $(".3cham").css("visibility","hidden");
                } else {
                    $(".3cham").css("visibility","visible");
                    $("#nav_fixtop_pc").css({"top":"-90px","background-color":"rgba(255,255,255,0.8)"});
                    $("#nav_fixtop_pc").css("transition","0s");
                    $("#nav_fixtop_mb").css({"top":"-90px","background-color":"rgba(255,255,255,0.8)"});
                    $("#nav_fixtop_mb").css("transition","0s");
                    $(".info_cart").css("display","none");
                }
            } else {
                if (document.body.scrollTop > 106 || document.documentElement.scrollTop > 106) {
                    $("#nav_fixtop_pc").css({"top":"0px","background-color":"rgba(255,255,255,0.8)"});
                    $("#nav_fixtop_pc").css("transition","ease 1s");
                    $("#nav_fixtop_mb").css({"top":"0px","background-color":"rgba(255,255,255,0.8)"});
                    $("#nav_fixtop_mb > div").first().css({"background-color":"white","opacity":"0.5"});
                    $("#nav_fixtop_mb").css("transition","ease 1s");
                    $(".3cham").css("visibility","hidden");
                } else {
                    $(".3cham").css("visibility","visible");
                    $("#nav_fixtop_pc").css({"top":"-90px","background-color":"rgba(255,255,255,0.8)"});
                    $("#nav_fixtop_pc").css("transition","0s");
                    $("#nav_fixtop_mb").css({"top":"-90px","background-color":"rgba(255,255,255,0.8)"});
                    $("#nav_fixtop_mb").css("transition","0s");
                    $(".info_cart").css("display","none");
                }
            }
        }

        $("#nav_fixtop_mb").html($("#topsite_main_").html());
        $("#nav_fixtop_pc").html($("#container").html());
        $("#navbar_left").html($(".navbar_pc").html());
        $("#navbar_left > .navbar-nav").removeClass("navbar_nav");
        $("#navbar_left > .navbar-nav > .dropdown_").removeClass("dropdown");
        $("#navbar_left > .navbar-nav > .dropdown_ > .dropdown_hidd").removeClass("dropdown_menu");


        /*Add product--*/
        var cart_click_top = 0;
        var cart_click_left = 0;
        var cart_number = 0;
        var cart_info_src = [""];
        var cart_info_name = [""];
        var x=0;
        var cart_info_quantity = [0];
        var cart_info_price = [0];
        function fa_shopping_basket(){
            $("#mainsite .fa-shopping-basket").parent().click(function(){
                fa_babasket_number = 1;
                setTimeout (function () {
                    fa_babasket_number =0;
                },100);
                cart_number +=1;
                var src_cart = $(this).parents(".parent_img").find("img").attr("src");
                $(".count_sp").html(cart_number);
                cart_click_top = getOffset(this).top;
                cart_click_left = getOffset(this).left;
                $(".get_pr > img").attr("src",$(this).parents(".parent_img").find("img").attr("src"));
                $(".get_pr").css({"top":cart_click_top-75+"px","left":cart_click_left-75+"px","display":"block"});
                if (screen_offset >992-getScrollbarWidth()) {
                    if (body_scroll>197) {
                        setTimeout (function () {
                            $(".get_pr").css({"top":body_scroll-30+"px","left":cart_hover_left-65+"px","transform":"scale(0.4)","transition":"0.2s"});
                            setTimeout (function () {
                                $(".get_pr").css("transform","scale(0)");
                                setTimeout (function () {
                                    $(".get_pr").css({"top":"auto","left":"auto","transform":"scale(1)","transition":"0s","display":"none"});
                                },301);
                            },300);
                        },100);
                    } else {
                        setTimeout (function () {
                            $(".get_pr").css({"top":15+"px","left":cart_hover_left-65+"px","transform":"scale(0.4)","transition":"0.2s"});
                            setTimeout (function () {
                                $(".get_pr").css("transform","scale(0)");
                                setTimeout (function () {
                                    $(".get_pr").css({"top":"auto","left":"auto","transform":"scale(1)","transition":"0s","display":"none"});
                                },301);
                            },300);
                        },100);
                    }
                } else {
                    if (body_scroll>106) {
                        setTimeout (function () {
                            $(".get_pr").css({"top":body_scroll-35+"px","left":cart_hover_left-65+"px","transform":"scale(0.4)","transition":"0.2s"});
                            setTimeout (function () {
                                $(".get_pr").css("transform","scale(0)");
                                setTimeout (function () {
                                    $(".get_pr").css({"top":"auto","left":"auto","transform":"scale(1)","transition":"0s","display":"none"});
                                },301);
                            },300);
                        },100);
                    } else {
                        setTimeout (function () {
                            $(".get_pr").css({"top":"-25px","left":cart_hover_left-65+"px","transform":"scale(0.4)","transition":"0.2s"});
                            setTimeout (function () {
                                $(".get_pr").css("transform","scale(0)");
                                setTimeout (function () {
                                    $(".get_pr").css({"top":"auto","left":"auto","transform":"scale(1)","transition":"0s","display":"none"});
                                },301);
                            },300);
                        },100);
                    }
                }
                var cart_info_length = cart_info_src.length;
                var n=0;
                for (i=0;i<=cart_info_length-1;i++ ) {
                    if (src_cart == cart_info_src[i]) {
                        cart_info_quantity[i] += 1;
                         
                    } else {
                        n += 1;
                    }
                    if (n == cart_info_length){
                        x +=1;
                        for (j=0;j<=info_pr_length;j++) {
                            if (src_cart == info_product[j].src_pr){
                                cart_info_src[x]= info_product[j].src_pr;
                                cart_info_quantity[x]=1;
                                cart_info_name[x]=info_product[j].name;
                                cart_info_price[x]=info_product[j].price_number;
                            }
                        } 
                    }
                }
            });
        };
        fa_shopping_basket();

        /*Quick info add product--*/
        $(document).ready(function(){
            $(".quick_info button").click(function(){
                if ($(".quick_info_value").val()>=1) {
                    cart_number += Number($(".quick_info_value").val());
                    var src_cart = $(".quick_info_main_left").children("img").attr("src");
                    $(".count_sp").html(cart_number);
                    cart_click_top = getOffset(this).top;
                    cart_click_left = getOffset(this).left;
                    $(".get_pr > img").attr("src",$(".quick_info_main_left").children("img").attr("src"));
                    $(".get_pr").css({"top":cart_click_top+body_scroll-80+"px","left":cart_click_left-75+"px","display":"block"})
                    if (screen_offset >992-getScrollbarWidth()) {
                        if (body_scroll>197) {
                            setTimeout (function () {
                                $(".get_pr").css({"top":body_scroll-30+"px","left":cart_hover_left-65+"px","transform":"scale(0.4)","transition":"0.2s"});
                                setTimeout (function () {
                                    $(".get_pr").css("transform","scale(0)");
                                    setTimeout (function () {
                                        $(".get_pr").css({"top":"auto","left":"auto","transform":"scale(1)","transition":"0s","display":"none"});
                                    },301);
                                },300);
                            },100);
                        } else {
                            setTimeout (function () {
                                $(".get_pr").css({"top":15+"px","left":cart_hover_left-65+"px","transform":"scale(0.4)","transition":"0.2s"});
                                setTimeout (function () {
                                    $(".get_pr").css("transform","scale(0)");
                                    setTimeout (function () {
                                        $(".get_pr").css({"top":"auto","left":"auto","transform":"scale(1)","transition":"0s","display":"none"});
                                    },301);
                                },300);
                            },100);
                        }
                    } else {
                        if (body_scroll>106) {
                            setTimeout (function () {
                                $(".get_pr").css({"top":body_scroll-35+"px","left":cart_hover_left-65+"px","transform":"scale(0.4)","transition":"0.2s"});
                                setTimeout (function () {
                                    $(".get_pr").css("transform","scale(0)");
                                    setTimeout (function () {
                                        $(".get_pr").css({"top":"auto","left":"auto","transform":"scale(1)","transition":"0s","display":"none"});
                                    },301);
                                },300);
                            },100);
                        } else {
                            setTimeout (function () {
                                $(".get_pr").css({"top":"-25px","left":cart_hover_left-65+"px","transform":"scale(0.4)","transition":"0.2s"});
                                setTimeout (function () {
                                    $(".get_pr").css("transform","scale(0)");
                                    setTimeout (function () {
                                        $(".get_pr").css({"top":"auto","left":"auto","transform":"scale(1)","transition":"0s","display":"none"});
                                    },301);
                                },300);
                            },100);
                        }
                    }
                    var cart_info_length = cart_info_src.length;
                    var n=0;
                    for (i=0;i<=cart_info_length-1;i++ ) {
                        if (src_cart == cart_info_src[i]) {
                            cart_info_quantity[i] += Number($(".quick_info_value").val());
                            
                        } else {
                            n += 1;
                        }
                        if (n == cart_info_length){
                            x +=1;
                            for (j=0;j<=info_pr_length;j++) {
                                if (src_cart == info_product[j].src_pr){
                                    cart_info_src[x]= info_product[j].src_pr;
                                    cart_info_quantity[x]=Number($(".quick_info_value").val());
                                    cart_info_name[x]=info_product[j].name;
                                    cart_info_price[x]=info_product[j].price_number;
                                }
                            } 
                        }
                    }
               } else {
                $(".quick_info_value").val(1);
               }
            });
        });
        
        $(document).ready(function() {
            $(".img_detail > div").click(function(){
                if ($(this).children().attr("src")!="") {
                    $(this).addClass("img_border_color");
                    $(this).siblings().removeClass("img_border_color");
                    $(".quick_info_main_left > img").attr("src",$(this).children().attr("src"));
                }
            })
        });

        /*Quick info--*/
        var info_pr_length = info_product.length -1;
        function fa_eye(){
            $("#mainsite .fa-eye").parent().click(function(){
                var src_quick= $(this).parents(".parent_img").find("img").attr("src");
                for (i=0;i<=info_pr_length;i++) {
                    if (src_quick == info_product[i].src_pr) {
                        $(".name_pr").html(info_product[i].name);
                        $(".src_pr_pr").attr("src",info_product[i].src_pr);
                        $(".img_dt1_pr").attr("src",info_product[i].img_dt1);
                        $(".img_dt2_pr").attr("src",info_product[i].img_dt2);
                        $(".img_dt3_pr").attr("src",info_product[i].img_dt3);
                        $(".img_dt4_pr").attr("src",info_product[i].img_dt4);
                        $(".price_number_pr").html(info_product[i].price_string);
                        $(".content_pr").html(info_product[i].content);
                        $(".supplier_pr").html(info_product[i].supplier);
                        $(".code_pr").html(info_product[i].code);
                        $(".quick_info_value").val(1);
                    }
                }
                setTimeout (function () {
                     $(".quick_info").css("display","block");
                     $(".body_mask1").css("display","block");
                },100);    
                setTimeout(function(){
                     $(".quick_info").css({"top":"35px","opacity":"1"});
                },200);
            });
        };
        fa_eye();

        function close_quick_info(){
            $(".close_quick_info").click(function(){
                $(".quick_info").css({"top":"0px","opacity":"0"});
                setTimeout(function(){
                    $(".quick_info").css("display","none");
                    setTimeout (function () {
                        $(".body_mask1").css("display","none");
                      
                    },10);
                },400);
            });
        };
        close_quick_info();

        var screen_offset = 0;
        var cart_hover_top = 0;
        var cart_hover_left = 0;
        var cart_hover_ = 0;
        var deal_end_banner_width = 0;
        var deal_end_banner_count = 0;
        setInterval(function() {
            cart_hover_top = getOffset(cart_hover_).top;
            cart_hover_left = getOffset(cart_hover_).left;
            screen_offset = document.body.offsetWidth;
            $(".count_sp").html(cart_number);
            $(".cart_quantity").html(cart_number);
            if (screen_offset > 992-getScrollbarWidth()) {
                $(".quick_info").css({"left":(screen_offset-950)/2+"px"});
                cart_hover_ = document.getElementsByClassName("cart_hover")[0];
                $("#nav_fixtop_pc").css("display","flex");
                $("#nav_fixtop_mb").css("display","none");
                $("#nav_fixtop_pc").css("visibility","visible");
                $("#nav_fixtop_mb").css("visibility","hidden");
                $("#topsite_top_").css("visibility","hidden");     
                $("#navbar_right").css("visibility","hidden");
                $("#navbar_left").css("visibility","hidden");
                $("#navbar_nav").css("display","block");
                $(".navbar_pc").css("height","auto");
                $(".body_mask").css("display","none");
            } else {
                $(".quick_info").css({"left":(screen_offset-$(".quick_info").outerWidth())/2+"px"});
                cart_hover_ = document.getElementsByClassName("cart_hover")[1];
                $("#nav_fixtop_mb").css("display","flex");
                $("#nav_fixtop_pc").css("display","none");
                $("#nav_fixtop_mb").css("visibility","visible");
                $("#nav_fixtop_pc").css("visibility","hidden");
                if (navbar_click == 0) {
                    $(".body_mask").css("display","none");
                } else {
                    $(".body_mask").css("display","block");
                }
                $("#navbar_right").css("visibility","visible");
                $("#navbar_left").css("visibility","visible");
                $("#topsite_top_").css("visibility","visible");
                $("#navbar_nav").css("display","none");
                $(".navbar_pc").css("height","16px");
            }
        },0);

        function addcomma(str){
            var text = "";
            if (String(str).length <=6 && String(str).length >=4) {
                text+= String(str).substring(0, String(str).length-3)+","+String(str).substring(String(str).length-3,String(str).length);
            } else if (String(str).length <=9 && String(str).length >=7) {
                text+= String(str).substring(0, String(str).length-6)+","+String(str).substring(String(str).length-6,String(str).length-3)+
                ","+String(str).substring(String(str).length-3,String(str).length);
            } else if (String(str).length <=12 && String(str).length >=10) {
                text+= String(str).substring(0, String(str).length-9)+","+String(str).substring(String(str).length-9,String(str).length-6)+
                ","+String(str).substring(String(str).length-6,String(str).length-3)+","+String(str).substring(String(str).length-3,String(str).length);
            } 
            return text;
        }

        /*Hover cart--*/
        var info_cart_number = 0;
         var cart_hover_number = 0;
         $(document).ready(function(){
             $(".cart_hover").hover(function(){
                 var n=0;
                 var text="";
                 cart_hover_number =1;
                 if (cart_number == 0) {
                     $(".info_cart").html('<p class="mb-0 pb-2 w-100">Đang có <span class="cart_quantity">'+0+'</span> sản phẩm trong giỏ.</p>');
                 } else {
                     for(i=1;i<=cart_info_src.length-1;i++){
                         n+=cart_info_quantity[i];
                     }
                     text+='<p class="mb-0 pb-2 w-100">Đang có <span class="cart_quantity">'+n+'</span> sản phẩm trong giỏ.</p>';
                     for (k=1;k<=cart_info_src.length-1;k++) {
                         for (j=0;j<=info_product.length-1;j++) {
                             if (cart_info_src[k]==info_product[j].src_pr) {
                                 text+='<div class="w-100 d-flex justify-content-center align-items-center border position-relative pr_small">'+
                                     '<div class="p-3">'+
                                         '<img src="'+info_product[j].src_pr+'" alt="" class="w-100 border">'+
                                     '</div>'+
                                     '<div class="py-3 px-0">'+
                                         '<p class="font-weight-bold info_cart_name text-left mb-0">'+info_product[j].name+'</p>'+
                                         '<p class="mb-0 text-left">Giá: <span class="info_cart_price text-left">'+addcomma(info_product[j].price_number*cart_info_quantity[k])+'đ</span></p>'+
                                         '<p class="mb-0 text-left">Số lượng: <span class="info_cart_amount text-left">'+cart_info_quantity[k]+'</span></p>'+
                                     '</div>'+
                                     '<i class="fas fa-times position-absolute"></i>'+
                                 '</div>';
                             }
                         }
                     }
                     text+='<div class="w-100 border p-2">'+
                        '<a href="cart_info.html"><button class="mx-1 px-4 py-2 border-0 text-white">Giỏ hàng</button></a>'+
                        '<a href="pay.html"><button class="mx-1 px-3 py-2 bg-dark border-0 text-white">Thanh toán</button></a>'+
                        '</div>';
                     $(".info_cart").html(text);
                 }
                 $(this).parents(".parent_cart").find(".info_cart").fadeIn("fast");
                 $(this).parents(".parent_cart").find(".info_cart").hover(function(){
                     info_cart_number = 1;
                     cart_hover_number = 0;
                     $(this).find(".fa-times").click(function(){
                        for (i=1;i<=cart_info_src.length-1;i++) {
                            if ($(this).parents(".pr_small").find("img").attr("src") == cart_info_src[i]) {
                                cart_number = cart_number - cart_info_quantity[i];
                                $(".count_sp").html(cart_number);
                                $(".cart_quantity").html(cart_number);
                                cart_info_src[i]="";
                                cart_info_quantity[i]=0;
                                if (cart_number == 0) {
                                    $(".info_cart").fadeOut("fast");
                                }
                            }
                        }
                        $(this).parents(".pr_small").remove();
                        /*for (i=0;i<=$(".cartinfo_parent").length-1;i++) {
                            var v=0;
                            for (j=1;j<=cart_info_src.length-1;j++) {
                                if ($(this).find("img").attr("src")== cart_info_src[j]) {
                                    v+=1;
                                }
                            }
                            if (v==0) {
                                $(".cartinfo_parent")[i].remove();
                            }
                        }*/
                        if (cart_number == 0) {
                            $(".empty_cart").show();
                            $(".cartinfo").remove();
                        }
                     });
                 },function(){
                     setTimeout (function () {
                         if (cart_hover_number == 0) {
                             $(".info_cart").fadeOut("fast");
                             info_cart_number = 0;
                         }
                     },200);
                 }); 
             },
             function(){
                 cart_hover_number = 0;
                 setTimeout (function () {
                     if (info_cart_number == 0) {
                         $(".info_cart").fadeOut("fast");
                     }
                 },200);
             });
         });
        

         /*Cart info--*/
         $(document).ready(function(){
            $(".cartinfo .inp1").click(function() {
            var y=$(this).parents(".cartinfo_parent").find(".inp3").val();
                if (y>1) {
                    $(this).parents(".cartinfo_parent").find(".inp3").val(y-1);
                    for (i=1;i<=cart_info_src.length-1;i++) {
                        if (cart_info_src[i]==$(this).parents(".cartinfo_parent").find("img").attr("src")) {
                            cart_info_quantity[i]-=1;
                            cart_number -= 1;
                            $(this).parents(".cartinfo_parent").find(".total_item").html(addcomma(cart_info_quantity[i]*cart_info_price[i]));
                        }
                    }
                } else if (y==1) {
                    for (i=1;i<=cart_info_src.length-1;i++) {
                        if (cart_info_src[i]==$(this).parents(".cartinfo_parent").find("img").attr("src")) {
                            cart_info_quantity[i]=0;
                            cart_info_src[i]="";
                            cart_number -= 1;
                            $(this).parents(".cartinfo_parent").find(".total_item").html(addcomma(cart_info_quantity[i]*cart_info_price[i]));
                        }
                    }
                    $(this).parents(".cartinfo_parent").remove();
                }
                if (cart_number == 0) {
                    $(".empty_cart").show();
                    $(".cartinfo").remove();
                }
            });
            $(".cartinfo .inp2").click(function() {
                var y=$(this).parents(".cartinfo_parent").find(".inp3").val();
                $(this).parents(".cartinfo_parent").find(".inp3").val(Number(y)+1);
                for (i=1;i<=cart_info_src.length-1;i++) {
                    if (cart_info_src[i]==$(this).parents(".cartinfo_parent").find("img").attr("src")) {
                        cart_info_quantity[i]+=1;
                        cart_number += 1;
                        $(this).parents(".cartinfo_parent").find(".total_item").html(addcomma(cart_info_quantity[i]*cart_info_price[i]));
                    }
                }
            });
            $(".cartinfo .inp3").keyup(function() {
                var y=$(this).val();
                if ((y<0 || y%y!=0)&&y!=0&&y!="") {
                    $(this).val(1);
                    for (i=1;i<=cart_info_src.length-1;i++) {
                        if (cart_info_src[i]==$(this).parents(".cartinfo_parent").find("img").attr("src")) {
                            cart_number -= cart_info_quantity[i];
                            cart_info_quantity[i]=1;
                            cart_number += 1;
                            $(this).parents(".cartinfo_parent").find(".total_item").html(addcomma(cart_info_quantity[i]*cart_info_price[i]));
                        }
                    }
                } else if(y>0&&y!="") {
                    for (i=1;i<=cart_info_src.length-1;i++) {
                        if (cart_info_src[i]==$(this).parents(".cartinfo_parent").find("img").attr("src")) {
                            cart_number -= cart_info_quantity[i];
                            cart_info_quantity[i]=Number(y);
                            cart_number += Number(y);
                            $(this).parents(".cartinfo_parent").find(".total_item").html(addcomma(cart_info_quantity[i]*cart_info_price[i]));
                        }
                    }
                } else if (y==0&&y!="") {
                    for (i=1;i<=cart_info_src.length-1;i++) {
                        if (cart_info_src[i]==$(this).parents(".cartinfo_parent").find("img").attr("src")) {
                            cart_number -= cart_info_quantity[i];
                            cart_info_quantity[i]=0;
                            cart_info_src[i]="";
                            $(this).parents(".cartinfo_parent").remove();
                        }
                    }
                }
                if (cart_number == 0) {
                    $(".empty_cart").show();
                    $(".cartinfo").remove();
                }
            });
            $(".cartinfo .inp3").focusout(function() {
                var y=$(this).val();
                for (i=1;i<=cart_info_src.length-1;i++) {
                    if (cart_info_src[i]==$(this).parents(".cartinfo_parent").find("img").attr("src")) {
                        $(this).val(cart_info_quantity[i]);
                    }
                }
            });
            setInterval(function() {
                var w=0;
                for (i=1;i<=cart_info_src.length-1;i++) {
                    if (cart_info_quantity[i]!=0) {
                        w+=cart_info_quantity[i]*cart_info_price[i]
                    }
                }
                $(".total_cartinfo").html(addcomma(w)+"đ");
            },0);
            $(".fa-trash-alt").click(function(){
                for (i=1;i<=cart_info_src.length-1;i++) {
                    if (cart_info_src[i]==$(this).parents(".cartinfo_parent").find("img").attr("src")) {
                        cart_number -= cart_info_quantity[i];
                        cart_info_quantity[i]=0;
                        cart_info_src[i]="";
                        $(this).parents(".cartinfo_parent").remove();
                    }
                }
                if (cart_number==0) {
                    $(".empty_cart").show();
                    $(".cartinfo").hide();
                }
            });
            $(".continue_shop").click(function(){
                $("#mainsite").show();
                $(".endsite_top").show();
                $("#endsite").removeClass("margin_ft");
                $(".cartinfo").hide();
            });
        });


        /*Navbar  dropdown menu--*/
        var screen_offset = document.body.offsetWidth;
        var dropdown_ps = $(".dropdown")[0];
        $(".dropdown_menu").css("left", (screen_offset-getOffset(dropdown_ps).left)/2+"px");
        $(".dropdown_menu").css("width", screen_offset*0.9);
        $(".dropdown_menu").css("top", "100px");
        $(document).ready(function(){
            $(".navbar_nav > .dropdown").hover(function(){
                $(".dropdown_menu").css("transform","scale(1)");
                $(".dropdown_menu").css("top","44px"); 
                $(".dropdown_menu").css("opacity","1");
                $(".nav_dr").css("borderColor","white"); 
                screen_offset = document.body.offsetWidth;
                $(".dropdown_menu").css("left", screen_offset*0.1/2-getOffset(dropdown_ps).left+"px");
                $(".dropdown_menu").css("width", screen_offset*0.9);
                $(".nav_mark").css("width", screen_offset*0.1/2);
            },
            function(){
                $(".nav_mark").css("display","block");
                setTimeout (function () {
                    $(".nav_mark").css("display","none");
                },700);
                $(".dropdown_menu").css("transform","scale(0)");
                $(".dropdown_menu").css("top","100px"); 
                $(".dropdown_menu").css("opacity","0");
                $(".nav_dr").css("borderColor","#49a010"); 
                screen_offset = document.body.offsetWidth;
                $(".dropdown_menu").css("left", (screen_offset-getOffset(dropdown_ps).left)/2+"px");
            });
        });

        var fachevrondown_click = 0;
        $(document).ready(function(){
            $(".fa-chevron-down").click(function(){
                if (fachevrondown_click==0){
                    $(".dropdown_hidd").css("display","block");
                    fachevrondown_click = 1;
                } else {
                    $(".dropdown_hidd").css("display","none");
                    fachevrondown_click = 0;
                }
            });
        });

        var navbar_click = 0;
        $(document).ready(function(){
            $(".3gach").click(function(){
                setTimeout(function(){
                    $("#navbar_left").css("left","0px");
                    $("#navbar_right").css("right","0px");
                },200);
                $(".body_mask").css("display","block");
                navbar_click = 1;
            });
        });

        $(document).ready(function(){
            $(".fa-long-arrow-alt-left").click(function(){
                $("#navbar_left").css("left","-75%");
                $("#navbar_right").css("right","-25%");
                $(".body_mask").css("display","none");
                navbar_click = 0;
            });
        });

        var topsite_top_click = 0;
        $(document).ready(function(){
                $(".3cham").click(function(){
                    $("#topsite_top_").slideToggle();
            });
        });


        /*Search navbar--*/
        $(document).ready(function(){
            $(".fa-search").click(function(){
                $("#search_").css("display","block");
                $("body").css("overflow-y","hidden");
                setTimeout(function () {
                    $("#search_").css("opacity","1");
                    $("#search_").css("top","0px");
                    setTimeout (function () {
                        $(".search_main").css("display","block");
                        setTimeout (function () {
                            $(".search_main").css("top","50%");
                            $(".search_main").css("opacity","1");
                        },200)
                    },200)
                },50)
            });
        });

        /*Search in search--*/
        $(document).ready(function(){
            $(".search_main .fa-times").click(function(){
                $("body").css("overflow-y","scroll");
                $(".search_main").css("top","60%");
                $(".search_main").css("opacity","0");
                setTimeout (function () {
                    $(".search_main").css("display","none");
                    setTimeout (function () {
                        $("#search_").css("opacity","0.5");
                        $("#search_").css("top","30px");
                        setTimeout (function () {
                            $("#search_").css("display","none");
                        },200)
                    },50)
                },200)
            });
        }); 

        /*Search in search--*/
        $(document).ready(function(){
             $(".search_main .fa-search").click(function(){
                 $("body").css("overflow-y","scroll");
                 $(".search_main").css("top","60%");
                 $(".search_main").css("opacity","0");
                 setTimeout (function () {
                     $(".search_main").css("display","none");
                     setTimeout (function () {
                         $("#search_").css("opacity","0.5");
                         $("#search_").css("top","30px");
                         setTimeout (function () {
                             $("#search_").css("display","none");
                         },200)
                     },50)
                 },200)
             });
        }); 
        
        /*Rank animation--*/
        var fa_babasket_number = 0;
        function abbr_vsb() {
            $(".special_pr_main_item").hover(function(){
                $(this).children().children(".rank1").css({"transition-delay":"0.3s","transform":"scale(1)"});
                $(this).children().children(".rank2").css({"transition-delay":"0.4s","transform":"scale(1)"});
                $(this).children().children(".rank3").css({"transition-delay":"0.5s","transform":"scale(1)"});
            },function(){
                if (fa_babasket_number == 0) {
                    $(this).children().children("abbr").css({"transition-delay":"0s","transform":"scale(0)"});
                }
            });
        }
        abbr_vsb();

        /*Cart click--*/
        $(document).ready(function(){
            $(".cart_hover").click(function(){
                if(cart_number == 0) {
                    $(this).attr("href","empty_cart.html");
                } else {
                    $(this).attr("href","cart_info.html");
                }
            });
        });

        /*Navbar dropdown menu click--*/
        $(document).ready(function(){
            $(".nav_dr abbr").click(function(){
                $(".nav_dr").attr("href","product.html");
            });
            $(".nav_dr i").click(function(){
                $(".nav_dr").attr("href","#");
            });
        });

        /*Rank2 click--*/
        $(document).ready(function(){
            $(".rank").click(function(){
                $(this).children("a").attr("href","view.html");
            });
        });

        /*Images click--*/
        function detail(){
            $(".special_pr_main_item abbr").click(function(){
                $(this).children("a").attr("href","view.html");
            });
        };
        detail();

        /*Sort--*/
        function return_text1(){
            var text="";
            text+='<div class="special_pr_main row">';
            for (i=0;i<=info_product.length-1;i++) {
                if (info_product[i].price_number !=0) {
                    text+='<div class="px-3 py-0 my-3 pr_sale_item parent_img col-xl-4 col-lg-4 col-md-6 col-sm-6 col-sm-6 ">'+
                    '<div class="special_pr_main_item border position-relative">'+
                        '<abbr title="'+info_product[i].name+'"><a href="" class="d-flex flex-wrap justify-content-center"><img src="'+info_product[i].src_pr+'" alt="" class="w-100"><br>'+
                            '<span class="text-dark">'+info_product[i].name+'</span></a></abbr>'+
                        '<hr class="mx-auto hr_sample">'+
                        '<p class="text-center font-weight-bold">'+addcomma(info_product[i].price_number)+'<span>đ</span></p>'+
                        '<div class="specialprmainitem_select position-absolute d-flex w-100 justify-content-center">'+
                            '<abbr title="Thêm vào giỏ" class="rounded mx-1 rank1 rank"><i class="fa fa-shopping-basket "></i></abbr>'+
                            '<abbr title="Xem chi tiết" class="rounded mx-1 rank2 rank"><a href="#"><i class="fas fa-exchange-alt"></i></a></abbr>'+
                            '<abbr title="Xem nhanh" class="rounded mx-1 rank3 rank"><i class="fa fa-eye"></i></abbr>'+
                        '</div>'+
                    '</div>'+
                '</div>'
                }
            }
            text+="</div>";
            return text;
        }

        function return_text2(){
            var text="";
            text+='<div class="special_pr_main d-flex flex-wrap row">';
            for (i=0;i<=info_product.length-1;i++) {
                if (info_product[i].price_number !=0) {
                    text+='<div class="px-3 py-0 my-3 pr_sale_item parent_img col-12 d-flex">'+
                    '<div class="special_pr_main_item border-list position-relative w-30">'+
                        '<abbr title="'+info_product[i].name+'"><a href="" class="d-flex flex-wrap justify-content-center"><img src="'+info_product[i].src_pr+'" alt="" class="w-100"><br></a></abbr>'+
                        '<div class="specialprmainitem_select position-absolute d-flex w-100 justify-content-center">'+
                            '<abbr title="Thêm vào giỏ" class="rounded mx-1 rank1 rank"><i class="fa fa-shopping-basket "></i></abbr>'+
                            '<abbr title="Xem chi tiết" class="rounded mx-1 rank2 rank"><a href="#"><i class="fas fa-exchange-alt"></i></a></abbr>'+
                            '<abbr title="Xem nhanh" class="rounded mx-1 rank3 rank"><i class="fa fa-eye"></i></abbr>'+
                        '</div>'+
                    '</div>'+
                    '<div class="special_pr_main_item_right">'+
                        '<h6>'+info_product[i].name+'</h6>'+
                        '<hr class="mx-auto hr_sample">'+
                        '<p>'+addcomma(info_product[i].price_number)+'<ins>đ</ins></p>'+
                        '<strong>Mã sản phẩm</strong> <span> '+info_product[i].code+'</span> <br>'+
                        '<strong>Thương hiệu</strong> <span> '+info_product[i].supplier+'</span> <br>'+
                        '<strong>Mô tả ngắn:</strong> <span> '+info_product[i].content+'</span>'+
                    '</div>'+
                '</div>'
                }
            }
            text+="</div>";
            return text;
        }

        $(document).ready(function(){
            $("#sort").change(function(){
                if ($("#sort").val() == "Sản phẩm nổi bật" || $("#sort").val() == "Cũ nhất" ||
                $("#sort").val() == "Mới nhất" || $("#sort").val() == "Bán chạy nhất" ) {
                    var random_array=[0];
                    for (i=0;i<=info_product.length-1;) {
                        k=0;  
                        random_array[i] = Math.floor(Math.random() * (info_product.length));
                        for (j = 0; j < i; j++){
                            if (random_array[i] == random_array[j]){
                                k = k + 1;
                            }
                        }
                        if (k == 0){
                            i = i + 1;
                        }
                    }
                    var text="";
                    text+='<div class="special_pr_main row">';
                    for (i=0;i<=random_array.length-1;i++) {
                        text+='<div class="px-3 py-0 my-3 pr_sale_item parent_img col-xl-4 col-lg-4 col-md-6 col-sm-6 col-sm-6 ">'+
                            '<div class="special_pr_main_item border position-relative">'+
                                '<abbr title="'+info_product[random_array[i]].name+'"><a href="" class="d-flex flex-wrap justify-content-center"><img src="'+info_product[random_array[i]].src_pr+'" alt="" class="w-100"><br>'+
                                    '<span class="text-dark">'+info_product[random_array[i]].name+'</span></a></abbr>'+
                                '<hr class="mx-auto hr_sample">'+
                                '<p class="text-center font-weight-bold">'+addcomma(info_product[random_array[i]].price_number)+'<span>đ</span></p>'+
                                '<div class="specialprmainitem_select position-absolute d-flex w-100 justify-content-center">'+
                                    '<abbr title="Thêm vào giỏ" class="rounded mx-1 rank1 rank"><i class="fa fa-shopping-basket "></i></abbr>'+
                                    '<abbr title="Xem chi tiết" class="rounded mx-1 rank2 rank"><a href="#"><i class="fas fa-exchange-alt"></i></a></abbr>'+
                                    '<abbr title="Xem nhanh" class="rounded mx-1 rank3 rank"><i class="fa fa-eye"></i></abbr>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                    }
                    text+="</div>";
                    $("#grid-view-a-z").html(text);
                    text="";
                    text+='<div class="special_pr_main d-flex flex-wrap row">';
                    for (i=0;i<=random_array.length-1;i++) {
                        text+='<div class="px-3 py-0 my-3 pr_sale_item parent_img col-12 d-flex">'+
                        '<div class="special_pr_main_item border-list position-relative w-30">'+
                            '<abbr title="'+info_product[random_array[i]].name+'"><a href="" class="d-flex flex-wrap justify-content-center"><img src="'+info_product[random_array[i]].src_pr+'" alt="" class="w-100"><br></a></abbr>'+
                            '<div class="specialprmainitem_select position-absolute d-flex w-100 justify-content-center">'+
                                '<abbr title="Thêm vào giỏ" class="rounded mx-1 rank1 rank"><i class="fa fa-shopping-basket "></i></abbr>'+
                                '<abbr title="Xem chi tiết" class="rounded mx-1 rank2 rank"><a href="#"><i class="fas fa-exchange-alt"></i></a></abbr>'+
                                '<abbr title="Xem nhanh" class="rounded mx-1 rank3 rank"><i class="fa fa-eye"></i></abbr>'+
                            '</div>'+
                        '</div>'+
                        '<div class="special_pr_main_item_right">'+
                            '<h6>'+info_product[random_array[i]].name+'</h6>'+
                            '<hr class="mx-auto hr_sample">'+
                            '<p>'+addcomma(info_product[random_array[i]].price_number)+'<ins>đ</ins></p>'+
                            '<strong>Mã sản phẩm</strong> <span> '+info_product[random_array[i]].code+'</span> <br>'+
                            '<strong>Thương hiệu</strong> <span> '+info_product[random_array[i]].supplier+'</span> <br>'+
                            '<strong>Mô tả ngắn:</strong> <span> '+info_product[random_array[i]].content+'</span>'+
                        '</div>'+
                    '</div>'
                    }
                    text+="</div>";
                    $("#list-view-a-z").html(text);
                    abbr_vsb();
                    fa_eye();
                    fa_shopping_basket();
                    detail();
                } else if ($("#sort").val()=="Tên: A-Z") {
                    info_product.sort(function(a, b){
                        var x = change(a.name).toLowerCase();
                        var y = change(b.name).toLowerCase();
                        if (x < y) {return -1;}
                        if (x > y) {return 1;}
                        return 0;
                      });
                    $("#grid-view-a-z").html(return_text1());
                    $("#list-view-a-z").html(return_text2());
                    abbr_vsb();
                    fa_eye();
                    fa_shopping_basket();
                    detail();
                } else if ($("#sort").val()=="Tên: Z-A") {
                    info_product.sort(function(a, b){
                        var x = change(a.name).toLowerCase();
                        var y = change(b.name).toLowerCase();
                        if (x > y) {return -1;}
                        if (x < y) {return 1;}
                        return 0;
                      });
                    $("#grid-view-a-z").html(return_text1());
                    $("#list-view-a-z").html(return_text2());
                    abbr_vsb();
                    fa_eye();
                    fa_shopping_basket();
                    detail();
                } else if ($("#sort").val()=="Giá: Tăng dần") {
                    info_product.sort(function(a, b){return a.price_number - b.price_number});
                    $("#grid-view-a-z").html(return_text1());
                    $("#list-view-a-z").html(return_text2());
                    abbr_vsb();
                    fa_eye();
                    fa_shopping_basket();
                    detail();
                } else if ($("#sort").val()=="Giá: Giảm dần") {
                    info_product.sort(function(a, b){return b.price_number - a.price_number});
                    $("#grid-view-a-z").html(return_text1());
                    $("#list-view-a-z").html(return_text2());
                    abbr_vsb();
                    fa_eye();
                    fa_shopping_basket();
                    detail();
                }
            });
        });


        function return_text3(w) {
            var text="";
            text+='<div class="px-3 py-0 my-3 pr_sale_item parent_img col-xl-4 col-lg-4 col-md-6 col-sm-6 col-sm-6 ">'+
                '<div class="special_pr_main_item border position-relative">'+
                    '<abbr title="'+info_product[w].name+'"><a href="" class="d-flex flex-wrap justify-content-center"><img src="'+info_product[w].src_pr+'" alt="" class="w-100"><br>'+
                        '<span class="text-dark">'+info_product[w].name+'</span></a></abbr>'+
                    '<hr class="mx-auto hr_sample">'+
                    '<p class="text-center font-weight-bold">'+addcomma(info_product[w].price_number)+'<span>đ</span></p>'+
                    '<div class="specialprmainitem_select position-absolute d-flex w-100 justify-content-center">'+
                        '<abbr title="Thêm vào giỏ" class="rounded mx-1 rank1 rank"><i class="fa fa-shopping-basket "></i></abbr>'+
                        '<abbr title="Xem chi tiết" class="rounded mx-1 rank2 rank"><a href="#"><i class="fas fa-exchange-alt"></i></a></abbr>'+
                        '<abbr title="Xem nhanh" class="rounded mx-1 rank3 rank"><i class="fa fa-eye"></i></abbr>'+
                    '</div>'+
                '</div>'+
            '</div>' 
            return text;   
        }

        function return_text4(w) {
            var text="";
            text+='<div class="px-3 py-0 my-3 pr_sale_item parent_img col-12 d-flex">'+
                        '<div class="special_pr_main_item border-list position-relative w-30">'+
                            '<abbr title="'+info_product[w].name+'"><a href="" class="d-flex flex-wrap justify-content-center"><img src="'+info_product[w].src_pr+'" alt="" class="w-100"><br></a></abbr>'+
                            '<div class="specialprmainitem_select position-absolute d-flex w-100 justify-content-center">'+
                                '<abbr title="Thêm vào giỏ" class="rounded mx-1 rank1 rank"><i class="fa fa-shopping-basket "></i></abbr>'+
                                '<abbr title="Xem chi tiết" class="rounded mx-1 rank2 rank"><a href="#"><i class="fas fa-exchange-alt"></i></a></abbr>'+
                                '<abbr title="Xem nhanh" class="rounded mx-1 rank3 rank"><i class="fa fa-eye"></i></abbr>'+
                            '</div>'+
                        '</div>'+
                        '<div class="special_pr_main_item_right">'+
                            '<h6>'+info_product[w].name+'</h6>'+
                            '<hr class="mx-auto hr_sample">'+
                            '<p>'+addcomma(info_product[w].price_number)+'<ins>đ</ins></p>'+
                            '<strong>Mã sản phẩm</strong> <span> '+info_product[w].code+'</span> <br>'+
                            '<strong>Thương hiệu</strong> <span> '+info_product[w].supplier+'</span> <br>'+
                            '<strong>Mô tả ngắn:</strong> <span> '+info_product[w].content+'</span>'+
                        '</div>'+
                    '</div>'
            return text;   
        }
        var list_menu_click1 =[""];
        var list_menu_click2 =[0];
        var list_menu_click2_ =[0,50000,100000,200000,500000,Infinity];
        var click1_length= 0;
        var click2_length= 0;
        $(document).ready(function(){
            $("#list-menu-2 > ul").first().children().children("input").click(function(){
                var n=0;
                for(i=0;i<=list_menu_click1.length-1;i++) {
                    if (list_menu_click1[i] != $(this).val()) {
                        n+=1;
                    } else {
                        list_menu_click1[i]="";
                    }
                } 
                if (n==list_menu_click1.length) {
                    list_menu_click1[click1_length]=$(this).val();
                    click1_length +=1;
                } 
                list_menu_click1.sort(function(a, b){
                    var x = change(a).toLowerCase();
                    var y = change(b).toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                for (i=0;i<=list_menu_click1.length-1;i++) {
                    if (list_menu_click1[i]=="") {
                        list_menu_click1.splice(i,1);
                    }
                }      
                if (list_menu_click2[0] != 0 && list_menu_click2[0] != undefined ) {
                    if (list_menu_click1[0] != undefined) {
                        var text="";
                        var text1="";
                        text+='<div class="special_pr_main row">';
                        text1+='<div class="special_pr_main d-flex flex-wrap row">';
                        for (i=0; i<= list_menu_click1.length-1;i++) {
                            for (j=0;j<=info_product.length-1;j++) {
                                if (info_product[j].supplier.includes(list_menu_click1[i]) && list_menu_click1[i] != "") {   
                                    for (k=0;k<=list_menu_click2.length-1;k++) {
                                        for (l=0;l<=list_menu_click2_.length-1;l++) {
                                            if (list_menu_click2[k] == list_menu_click2_[l]) {  
                                                if (info_product[j].price_number >= list_menu_click2_[l-1] && info_product[j].price_number < list_menu_click2_[l]) {
                                                    text += return_text3(j);
                                                    text1 += return_text4(j);
                                                }
                                            }
                                        }
                                    }        
                                }
                            }
                        }
                        text+="</div>";
                        text1+="</div>";
                        $("#grid-view-a-z").html(text);
                        $("#list-view-a-z").html(text1);
                        abbr_vsb();
                        fa_eye();
                        fa_shopping_basket();
                        detail();
                    } else {
                        var text="";
                        var text1="";
                        text+='<div class="special_pr_main row">'; 
                        text1+='<div class="special_pr_main d-flex flex-wrap row">';     
                        for (k=0;k<=list_menu_click2.length-1;k++) {
                            for (l=0;l<=list_menu_click2_.length-1;l++) {
                                if (list_menu_click2[k] == list_menu_click2_[l]) {  
                                    for (j=0;j<=info_product.length-1;j++) {
                                        if (info_product[j].price_number >= list_menu_click2_[l-1] && info_product[j].price_number < list_menu_click2_[l]) {
                                            text+=return_text3(j);
                                            text1 += return_text4(j);
                                        }
                                    }
                                }
                            }        
                        }
                        text+="</div>";
                        text1+="</div>";
                        $("#grid-view-a-z").html(text);
                        $("#list-view-a-z").html(text1);
                        abbr_vsb();
                        fa_eye();
                        fa_shopping_basket();
                        detail();
                    }
                } else {
                    var text="";
                    var text1="";
                    text+='<div class="special_pr_main row">';
                    text1+='<div class="special_pr_main d-flex flex-wrap row">';    
                    for (i=0; i<= list_menu_click1.length-1;i++) {
                        for (j=0;j<=info_product.length-1;j++) {
                            if (info_product[j].supplier.includes(list_menu_click1[i]) && list_menu_click1[i] != "") {   
                                text+=return_text3(j); 
                                text1 += return_text4(j);         
                            }
                        }
                    }
                    text+="</div>";
                    text1+="</div>";
                    $("#grid-view-a-z").html(text);
                    $("#list-view-a-z").html(text1);
                    abbr_vsb();
                    fa_eye();
                    fa_shopping_basket();
                    detail();
                }
            });
            $("#list-menu-2 > ul").last().children().children("input").click(function(){
                var n=0;
                for(i=0;i<=list_menu_click2.length-1;i++) {
                    if (list_menu_click2[i] != $(this).val()) {
                        n+=1;
                    } else {
                        list_menu_click2[i]="";
                    }
                } 
                if (n==list_menu_click2.length) {
                    list_menu_click2[click2_length]=$(this).val();
                    click2_length +=1;
                } 
                list_menu_click2.sort(function(a, b){return a - b});
                for (i=0;i<=list_menu_click2.length-1;i++) {
                    if (list_menu_click2[i]=="") {
                        list_menu_click2.splice(i,1);
                    }
                }  
                if (list_menu_click1[0] != 0 && list_menu_click1[0] != undefined) {
                    if (list_menu_click2[0]!= undefined) {
                        var text="";
                        var text1="";
                        text+='<div class="special_pr_main row">';
                        text1+='<div class="special_pr_main d-flex flex-wrap row">';    
                        for (i=0; i<= list_menu_click1.length-1;i++) {
                            for (j=0;j<=info_product.length-1;j++) {
                                if (info_product[j].supplier.includes(list_menu_click1[i]) && list_menu_click1[i] != "") {   
                                    for (k=0;k<=list_menu_click2.length-1;k++) {
                                        for (l=0;l<=list_menu_click2_.length-1;l++) {
                                            if (list_menu_click2[k] == list_menu_click2_[l]) {  
                                                if (info_product[j].price_number >= list_menu_click2_[l-1] && info_product[j].price_number < list_menu_click2_[l]) {
                                                    text+=return_text3(j);  
                                                    text1 += return_text4(j);   
                                                }
                                            }
                                        }
                                    }        
                                }
                            }
                        }
                        text+="</div>";
                        text1+="</div>";
                        $("#grid-view-a-z").html(text);
                        $("#list-view-a-z").html(text1);
                        abbr_vsb();
                        fa_eye();
                        fa_shopping_basket();
                        detail();
                    } else {
                        var text="";
                        var text1="";
                        text+='<div class="special_pr_main row">';
                        text1+='<div class="special_pr_main d-flex flex-wrap row">';
                        for (i=0; i<= list_menu_click1.length-1;i++) {
                            for (j=0;j<=info_product.length-1;j++) {
                                if (info_product[j].supplier.includes(list_menu_click1[i]) && list_menu_click1[i] != "") {   
                                    text+=return_text3(j); 
                                    text1 += return_text4(j);          
                                }
                            }
                        }
                        text+="</div>";
                        text1+="</div>";
                        $("#grid-view-a-z").html(text);
                        $("#list-view-a-z").html(text1);
                        abbr_vsb();
                        fa_eye();
                        fa_shopping_basket();
                        detail();
                    }
                } else {
                    var text="";
                    var text1="";
                    text+='<div class="special_pr_main row">';   
                    text1+='<div class="special_pr_main d-flex flex-wrap row">';   
                    for (k=0;k<=list_menu_click2.length-1;k++) {
                        for (l=0;l<=list_menu_click2_.length-1;l++) {
                            if (list_menu_click2[k] == list_menu_click2_[l]) {  
                                for (j=0;j<=info_product.length-1;j++) {
                                    if (info_product[j].price_number >= list_menu_click2_[l-1] && info_product[j].price_number < list_menu_click2_[l]) {
                                        text+=return_text3(j);  
                                        text1 += return_text4(j);    
                                    }
                                }
                            }
                        }        
                    }
                    text+="</div>";
                    text1+="</div>";
                    $("#grid-view-a-z").html(text);
                    $("#list-view-a-z").html(text1);
                    abbr_vsb();
                    fa_eye();
                    fa_shopping_basket();
                    detail();
                }
            });
        });