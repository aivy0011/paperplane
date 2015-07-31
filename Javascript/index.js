    function welcome() {
    	var age = prompt('Welcome to my website \n How old are you?');
    	if (age < 13) {
    		document.getElementById("welcome").innerHTML = 'Leave this Website';
    	} else {
    		document.getElementById("welcome").innerHTML = "Welcome to my Website";
    		var x = document.createElement("BUTTON");
    		var t = document.createTextNode("Password");
    		x.setAttribute("onclick","multi()");
    		x.setAttribute("Id","pbutton");
    		x.appendChild(t);
    		document.body.appendChild(x);
    	}
    }
    function password() {
    	document.getElementById('pbutton').style.display = 'none';
    	var y = document.createElement("INPUT");
    	y.setAttribute("type", "password");
    	y.setAttribute("id", "password");
    	y.setAttribute("Placeholder","Enter Password")
    	document.body.appendChild(y);
    }
    function go() {
    	var x = document.createElement("BUTTON");
    	var t = document.createTextNode("Enter");
    	x.setAttribute("onclick","check()")
    	x.setAttribute("type","submit")
    	x.setAttribute("Id","Enter")
    	x.appendChild(t);
    	document.body.appendChild(x);
    	
    }
    function multi() {
    	password();
    	go();
    }
    function check() {
    	if (document.getElementById("password").value === 'IloveHTML' || document.getElementById("password").value === 'DBZ') {
    		window.location.href = 'home.html';
    	}
    }
    function color() {
        var color = document.getElementById('color').value;
        document.body.style.background = color;
        if (document.getElementById('pbutton') != null) {
        document.getElementById('pbutton').style.background = color;
        };
        if (document.getElementById('password') != null) {
            document.getElementById('password').style.background = color;
        };
        if (document.getElementById('Enter') != null) {
            document.getElementById('Enter').style.background = color;
        };
       setInterval(color, 1000);
    }

