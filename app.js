var Tone1, Tone2, Tone3, Tone4, nTone;
		
	function getTone(pinyin){
		for (var i = 0; i < pinyin.length; ++i){
			if(!isNaN(pinyin[i])) {
				return parseInt(pinyin[i]);
				break;
			}
		}
	}

	function getToneColor(tone){
		if (tone == 1) return Tone1;
		else if (tone == 2) return Tone2;
		else if (tone == 3) return Tone3;
		else if (tone == 4) return Tone4;
		else return nTone;
	}

	function loadColors(){
		Tone1 = document.getElementById('inputTone1').value;
		Tone2 = document.getElementById('inputTone2').value;
		Tone3 = document.getElementById('inputTone3').value;
		Tone4 = document.getElementById('inputTone4').value;
	}

	var write = function(){			
		var chars = $(".input").text().split("");
		$(".output").text("");
		$.each(chars, function(){
			//charCodeAt of the first character is 19968
			var i = this.charCodeAt(0)-19968;
			var color;
			if (i >= 0 && i <= 20901) color = getToneColor(getTone(pinyins[i]));
			else color = "black";

			$("<span>").text(this).css({
				color: color
			}).appendTo(".output");
		});	
	}


	var main = function() {
		loadColors();

		$(".btnLoad").click(function(){
			loadColors();
			write();
		});

		$(".input").prop("contentEditable", true).keyup(write);
	};
	$(document).ready(main);
