const menuIcon = document.getElementById("menuIcon");
const slideOutMenu = document.getElementById("slideOutMenu");
const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBox");

searchIcon.addEventListener('click', function(){
    if(searchBox.style.top =='72px'){
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents = 'none';
    }

    else{ searchBox.style.top = '72px';
        searchBox.style.pointerEvents = 'auto';
}
})

menuIcon.addEventListener('click', function(){
    if(slideOutMenu.style.opacity =='1'){
        slideOutMenu.style.opacity = '0';
        slideOutMenu.style.pointerEvents = 'none';
    }

    else{ slideOutMenu.style.opacity = '1';
    slideOutMenu.style.pointerEvents = 'auto';
}
})