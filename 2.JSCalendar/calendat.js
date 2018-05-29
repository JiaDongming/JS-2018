 var oLi=document.getElementsByTagName('li');
    for(var i=0; i<oLi.length;i++)
        {
            oLi[i].onmouseover=function () {
                oLi[i].className='';
            }
            this.className='active';
        }
