 function activeCanlendar() 
        {
            var oDiv=document.getElementById('tab');
            var oLi=oDiv.getElementsByTagName('li');
            var i=0
             
                    for(i=0; i<oLi.length;i++) 
                    {
                        oLi[i].index=i;
                        oLi[i].onmouseover=function () 
                        {
                            oLi[i].className=''; 
                         }
                           console.log(i);
                           this.className='active'; 
                    }
     };