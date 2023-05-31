function dosomething(){
    document.getElementById('test').innerHTML = 'hello';
    }

    function myFunction() {
        document.getElementById("test2").style.fontSize = "x-large";
       
      }

      function myFunction1() {
       
        document.getElementById("test2").style.fontSize = "smaller";
      }

      function myFunction2() {
        document.getElementById("test3").style.background = "#f3f3f3";
      }
   
      function pictureChange()
    {
    document.getElementById('theImage').src="html.svg";
    }
    document.getElementById("calc").onclick = () => {
        const result = document.getElementById("result");
        const nb1 = Number(document.getElementById("nb1").value);
        const nb2 = Number(document.getElementById("nb2").value);
        const select = document.getElementById("select").value;
        switch (select) {
            case "Multiply":
                result.textContent = nb1 * nb2;
                break;
            case "Add":
                result.textContent = nb1 + nb2;
                break;
            case "Sub":
                result.textContent = nb1 - nb2;
                break;
            case "Divide":
                result.textContent = nb1 / nb2;
                break;
        }
    };



document.getElementById("name").textContent = "Reema";

document.getElementById("name").onclick = () => {
    alert(new Date());
};

document.getElementById("doubleclick").ondblclick = () => {
    scroll(0, 0);
};


document.getElementById("submit").onclick = () => {
    let input = document.getElementById("username").value;
    let li = document.createElement("li");
    li.textContent = input;
    document.getElementById("ul").append(li);
};