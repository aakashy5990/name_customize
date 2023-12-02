var bg = document.getElementsByClassName("box_child");
        // bg  = prompt("Enter the background color:")
        
        var bgpink = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "#ff3659";
        }
        }


        var bgblue = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "blue";
        }
        }

        var bgYellow = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "Yellow";
        }
        }

        var bggreen = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "green";
        }
        }

        var bgpurple = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "purple";
        }
        }
        
        var bgorange = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "orange";
        }
        }
        var bgMidnightBlue = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "#191970";
        }
        }
        var bgSkyBlue = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "#87CEEB";
        }
        }
        var bgAqua = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "#00FFFF";
        }
        }
        var bgGreenYellow = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "#ADFF2F";
        }
        }
        var bgFuchsia = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "#FF00FF";
        }
        }
        var bgGold = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "#FFD700";
        }
        }
        var bgMediumAquamarine = () =>{
            for(let i = 0; i<bg.length;i++){
            bg[i].style.backgroundColor = "#66CDAA";
        }
        }
        
        



        // color text js 





var cl = document.getElementsByClassName("name_header");
        
        var clpink = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "#ff3659";
        }
        }


        var clblue = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "blue";
        }
        }

        var clYellow = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "Yellow";
        }
        }

        var clgreen = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "green";
        }
        }

        var clpurple = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "purple";
        }
        }
        
        var clorange = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "orange";
        }
        }
            var clMidnightBlue = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "#191970";
        }
        }
        var clSkyBlue = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "#87CEEB";
        }
        }
        var clAqua = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "#00FFFF";
        }
        }
        var clGreenYellow = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "#ADFF2F";
        }
        }
        var clFuchsia = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "#FF00FF";
        }
        }
        var clGold = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "#FFD700";
        }
        }
        var clMediumAquamarine = () =>{
            for(let i = 0; i<cl.length;i++){
            cl[i].style.color = "#66CDAA";
        }
        }




        // adding night mode 


        const themeButton = document.getElementById('theme-button')
        const header = document.getElementById('header')
        const darkTheme = 'dark-theme'
        const iconTheme = 'ri-sun-line'



        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)

        })

        // writing text code in js 


        // var name = document.getElementById("header");
        var call = () =>{
            var name = prompt("Enter Your Name For customizing");
            var headers = document.getElementById("header");
            headers.textContent = name;
        }

