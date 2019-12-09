export { TxtType };

class TxtType {
	constructor (el, arrText, period) {
		this.arrText = arrText;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};
  	tick () {
		let i = this.loopNum % this.arrText.length;
		let fullTxt = this.arrText[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span>'+this.txt+'</span>';

		// let that = this;
		let delta = 200 - Math.random() * 100;

		if (this.isDeleting) delta /= 2; 

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(() => {
			this.tick();
		}, delta);
  	};
}


