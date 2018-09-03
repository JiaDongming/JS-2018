
    window.onload = function(){
        // 获取元标签
        var file = document.getElementById("file");
       
        // 监听作用域变化
        file.onchange = function (){
            // 获取上传图片的路径
            var path = this.value;
            console.log (path);

            // 获取上传路径的最后几位，截取
           
            var suffix = path.substr(path.lastIndexOf('.'));
            console.log(suffix);
            
            var lower_suffix =  suffix.toLowerCase();
           if(lower_suffix === '.jpg' || lower_suffix === '.png'){
               console.log("选择的附件为图片正确");

           }else
           {
            console.log("选择的附件为不是图图片");

           }

        }
    }
