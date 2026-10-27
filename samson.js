function showWelcomeMessage() {
				let a = document.getElementById("htmlclass");
                a.innerHTML= "SORRY IT IS JAVACERIPT CLASS";
                let docbody=document.querySelector("body");
                docbody.style.background="red";
                docbody.style.color="white";
			}
			document.getElementById("welcomebtn").addEventListener("click", showWelcomeMessage);