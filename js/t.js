(function() {
	/*建立模态框对象*/
	var modalBox3 = {};
	/*获取模态框*/
	modalBox3.modal = document.getElementById("myModal3");
    /*获得trigger按钮*/
	modalBox3.triggerBtn = document.getElementById("triggerBtn3")
    /*获得关闭按钮*/
	modalBox3.closeBtn = document.getElementById("closeBtn3");
	/*模态框显示*/
	modalBox3.show = function() {
		console.log(this.modal);
		this.modal.style.display = "block";
	}
	/*模态框关闭*/
	modalBox3.close = function() {
		this.modal.style.display = "none";
	}
	/*当用户点击模态框内容之外的区域，模态框也会关闭*/
	modalBox3.outsideClick = function() {
		var modal = this.modal;
		window.onclick = function(event) {
            if(event.target == modal) {
            	modal.style.display = "none";
            }
		}
	}
    /*模态框初始化*/
	modalBox3.init = function() {
		var that = this;
		this.triggerBtn.onclick = function() {
            that.show();
		}
		this.closeBtn.onclick = function() {
			that.close();
		}
		this.outsideClick();
	}
	modalBox3.init();
 
})();
(function() {
	/*建立模态框对象*/
	var modalBox2 = {};
	/*获取模态框*/
	modalBox2.modal = document.getElementById("myModal2");
    /*获得trigger按钮*/
	modalBox2.triggerBtn = document.getElementById("triggerBtn2")
    /*获得关闭按钮*/
	modalBox2.closeBtn = document.getElementById("closeBtn2");
	/*模态框显示*/
	modalBox2.show = function() {
		console.log(this.modal);
		this.modal.style.display = "block";
	}
	/*模态框关闭*/
	modalBox2.close = function() {
		this.modal.style.display = "none";
	}
	/*当用户点击模态框内容之外的区域，模态框也会关闭*/
	modalBox2.outsideClick = function() {
		var modal = this.modal;
		window.onclick = function(event) {
            if(event.target == modal) {
            	modal.style.display = "none";
            }
		}
	}
    /*模态框初始化*/
	modalBox2.init = function() {
		var that = this;
		this.triggerBtn.onclick = function() {
            that.show();
		}
		this.closeBtn.onclick = function() {
			that.close();
		}
		this.outsideClick();
	}
	modalBox2.init();
 
})();
(function() {
	/*建立模态框对象*/
	var modalBox1 = {};
	/*获取模态框*/
	modalBox1.modal = document.getElementById("myModal1");
    /*获得trigger按钮*/
	modalBox1.triggerBtn = document.getElementById("triggerBtn1")
    /*获得关闭按钮*/
	modalBox1.closeBtn = document.getElementById("closeBtn1");
	/*模态框显示*/
	modalBox1.show = function() {
		console.log(this.modal);
		this.modal.style.display = "block";
	}
	/*模态框关闭*/
	modalBox1.close = function() {
		this.modal.style.display = "none";
	}
	/*当用户点击模态框内容之外的区域，模态框也会关闭*/
	modalBox1.outsideClick = function() {
		var modal = this.modal;
		window.onclick = function(event) {
            if(event.target == modal) {
            	modal.style.display = "none";
            }
		}
	}
    /*模态框初始化*/
	modalBox1.init = function() {
		var that = this;
		this.triggerBtn.onclick = function() {
            that.show();
		}
		this.closeBtn.onclick = function() {
			that.close();
		}
		this.outsideClick();
	}
	modalBox1.init();
 
})();

