/**************************************************   
名称: 图片轮播类   
备注:   
        适用于一个页面只有一个图片轮播的地方.   
***************************************************/   
var PImgPlayer = {   
        _timer : null,   
        _items : [],   
        _container : null,   
        _index : 0,   
        _imgs : [],   
        intervalTime : 5000,        //轮播间隔时间   
        init : function( objID, w, h, time ){   
                this.intervalTime = time || this.intervalTime;   
                this._container = document.getElementById( objID );   
                this._container.style.display = "block";   
                this._container.style.width = w + "px";   
                this._container.style.height = h + "px";   
                this._container.style.position = "relative";   
                this._container.style.overflow = "hidden";   
                //this._container.style.border = "1px solid #000";   
                var linkStyle = "display: block; TEXT-DECORATION: none;";   
                if( document.all ){   
                        linkStyle += "FILTER:";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Barn(duration=0.5, motion='out', orientation='vertical') ";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Barn ( duration=0.5,motion='out',orientation='horizontal') ";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Blinds ( duration=0.5,bands=10,Direction='down' )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.CheckerBoard()";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Fade(duration=0.5,overlap=0)";   
                        linkStyle += "progid:DXImageTransform.Microsoft.GradientWipe ( duration=1,gradientSize=1.0,motion='reverse' )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Inset ()";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Iris ( duration=1,irisStyle=PLUS,motion=out )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Iris ( duration=1,irisStyle=PLUS,motion=in )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Iris ( duration=1,irisStyle=DIAMOND,motion=in )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Iris ( duration=1,irisStyle=SQUARE,motion=in )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Iris ( duration=0.5,irisStyle=STAR,motion=in )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.RadialWipe ( duration=0.5,wipeStyle=CLOCK )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.RadialWipe ( duration=0.5,wipeStyle=WEDGE )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.RandomBars ( duration=0.5,orientation=horizontal )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.RandomBars ( duration=0.5,orientation=vertical )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.RandomDissolve ()";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Spiral ( duration=0.5,gridSizeX=16,gridSizeY=16 )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Stretch ( duration=0.5,stretchStyle=PUSH )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Strips ( duration=0.5,motion=rightdown )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Wheel ( duration=0.5,spokes=8 )";   
                        linkStyle += "progid:DXImageTransform.Microsoft.Zigzag ( duration=0.5,gridSizeX=4,gridSizeY=40 ); width: 100%; height: 100%";   
                }   
                //   
                var ulStyle = "margin:0 0 1px 0;width:"+w+"px;position:absolute;z-index:999;right:0px;FILTER:Alpha(Opacity=30,FinishOpacity=90, Style=1);overflow: hidden;bottom:-1px;height:16px; border-right:1px solid #fff;border-bottom:1px solid #fff;";  
                var ulStyle2 = "margin:0;padding:5px 5px 0 5px;width:"+w+"px;position:absolute;overflow: hidden;bottom:-1px;height:24px; border-right:1px solid #fff;font-size:14px;font-weight:bold;text-align:center;background:#fff;"; 
                //   
                var liStyle = "margin:0;list-style-type: none; margin:0;padding:0; float:right;z-index:999";   
                //   
                var baseSpacStyle = "clear:both; display:block; width:23px;line-height:18px; font-size:12px; FONT-FAMILY:'宋体';opacity: 0.6;";   
                baseSpacStyle += "border:1px solid #fff;border-right:0;border-bottom:0;";   
                baseSpacStyle += "color:#fff;text-align:center; cursor:pointer;";   
                //   
                var ulHTML = "";   
                for(var i = this._items.length -1; i >= 0; i--){   
                        var spanStyle = "";   
                        if( i==this._index ){   
                                spanStyle = baseSpacStyle + "background:#7a688e;";   
                        } else {                                   
                                spanStyle = baseSpacStyle + "background:#333333;";   
                        }   
                        ulHTML += "<li style=\""+liStyle+"\">";   
                        ulHTML += "<span onmouseover=\"PImgPlayer.mouseOver(this);\" onmouseout=\"PImgPlayer.mouseOut(this);\" style=\""+spanStyle+"\" onclick=\"PImgPlayer.play("+i+");return false;\" herf=\"javascript:;\" title=\"" + this._items[i].title + "\">" + (i+1) + "</span>";   
                        ulHTML += "</li>";   
                }   
                //  
                var html = "<a href=\""+this._items[this._index].link+"\" target=\"_blank\" style=\""+linkStyle+"\"></a><ul style=\""+ulStyle+"\">"+ulHTML+"</ul>";   
                this._container.innerHTML = html;   
                var link = this._container.getElementsByTagName("A")[0];           
                link.style.width = w + "px";   
                link.style.height = h + "px";   
                link.style.background = 'url(' + this._items[0].img + ') no-repeat center top';
                // 
                this._timer = setInterval( "PImgPlayer.play()", this.intervalTime );   
        },   
        addItem : function( _title, _link, _imgURL ){   
                this._items.push ( {title:_title, link:_link, img:_imgURL } );   
                var img = new Image();   
                img.src = _imgURL;   
                this._imgs.push( img );   
        },   
        play : function( index ){   
                if( index!=null ){   
                        this._index = index;   
                        clearInterval( this._timer );   
                        this._timer = setInterval( "PImgPlayer.play()", this.intervalTime );   
                } else {   
                        this._index = this._index<this._items.length-1 ? this._index+1 : 0;   
                }   
                var link = this._container.getElementsByTagName("A")[0];           
                if(link.filters){   
                        var ren = Math.floor(Math.random()*(link.filters.length));   
                        link.filters[ren].Apply();   
                        link.filters[ren].play();   
                }   
                link.href = this._items[this._index].link;   
               // link.title = this._items[this._index].title;   
                link.style.background = 'url(' + this._items[this._index].img + ') no-repeat center top'; 
                  
                //   
                var liStyle = "margin:0;list-style-type: none; margin:0;padding:0; float:right;z-index:999";   
                var baseSpacStyle = "clear:both; display:block; width:23px;line-height:18px; font-size:12px; FONT-FAMILY:'宋体'; opacity: 0.6;";   
                baseSpacStyle += "border:1px solid #fff;border-right:0;border-bottom:0;";   
                baseSpacStyle += "color:#fff;text-align:center; cursor:pointer;";   
                var ulHTML = "";   
                for(var i = this._items.length -1; i >= 0; i--){   
                        var spanStyle = "";   
                        if( i==this._index ){   
                                spanStyle = baseSpacStyle + "background:#7a688e;";   
                        } else {                                   
                                spanStyle = baseSpacStyle + "background:#333333;";   
                        }   
                        ulHTML += "<li style=\""+liStyle+"\">";   
                        ulHTML += "<span onmouseover=\"PImgPlayer.mouseOver(this);\" onmouseout=\"PImgPlayer.mouseOut(this);\" style=\""+spanStyle+"\" onclick=\"PImgPlayer.play("+i+");return false;\" herf=\"javascript:;\" title=\"" + this._items[i].title + "\">" + (i+1) + "</span>";   
                        ulHTML += "</li>";   
                }   
                this._container.getElementsByTagName("UL")[0].innerHTML = ulHTML;           
        },   
        mouseOver : function(obj){   
                var i = parseInt( obj.innerHTML );   
                if( this._index!=i-1){   
                        obj.style.color = "#D4B785";   
                }   
        },   
        mouseOut : function(obj){   
                obj.style.color = "#fff";   
        }   
} 

// tab script (all page)
function cleanWhitespace(element) {
		for (var i = 0;i<element.childNodes.length;i++) {
			var node = element.childNodes[i]
			if (node.nodeType ==3 && !/\S/.test(node.nodeValue))
			node.parentNode.removeChild(node);
		}
	}
	
	function menuGlobal(_tab, _content, evt,_startNum,classNames){
		this.tabs = [];
		this.contents = [];
		this.currentNum;
		this.init(_tab,_content,evt,_startNum,classNames);
	}	
	menuGlobal.prototype.init = function(_tab, _content, evt,_startNum,classNames){
		var old
		var obj = document.getElementById(_tab)
		var cbj = document.getElementById(_content)
		if (!obj) return false
		if (!cbj) return false
		cleanWhitespace(obj)
		cleanWhitespace(cbj)
		this.tabs = obj.getElementsByTagName("li");
		if (!this.tabs) return false
		
		for(var i=0; i<this.tabs.length; i++){
			this.tabs[i].flag = i;
		}
	
		var contstemp = cbj.childNodes;
		for(var i=0; i<contstemp.length; i++){
			if(contstemp[i].nodeType == 1)	 this.contents.push(contstemp[i]);
		}
		if (_startNum>=this.tabs.length) {_startNum=0}
		if (!_startNum){_startNum=0}
		if (!classNames) {classNames="active"}
		if (!evt) {evt=2}
		
		this.tabs[_startNum].style.display=""
		this.tabs[_startNum].className=classNames
		this.contents[_startNum].style.display=""
		this.currentNum = _startNum
		this.addEvent(evt,classNames);
	}
	
	menuGlobal.prototype.addEvent = function(evt,classNames){
		for(var i=0; i<this.tabs.length; i++){
			this.tabs[i].reflect = this;
			if (evt==2) {
				this.tabs[i].onmouseover = function(){
					var last = this.reflect.currentNum;
					this.reflect.contents[last].style.display="none"
					this.reflect.contents[this.flag].style.display=""
					
					if (this.reflect.tabs[last].className!="active") {
						this.reflect.tabs[last].className=old
					}else {
						this.reflect.tabs[last].className=""
					}
					
					old = this.reflect.tabs[this.flag].className
					if (!old) {
					this.reflect.tabs[this.flag].className=classNames
					} else {
					this.reflect.tabs[this.flag].className=old+"_1"
					}
					
					
					this.reflect.currentNum = this.flag;
					this.blur();
					return false;
				}
			} else {
				this.tabs[i].onclick = function(){
					var last = this.reflect.currentNum;
					this.reflect.contents[last].style.display="none"
					this.reflect.contents[this.flag].style.display=""
					if (this.reflect.tabs[last].className!="active") {
						this.reflect.tabs[last].className=old
					}else {
						this.reflect.tabs[last].className=""
					}
					
					old = this.reflect.tabs[this.flag].className
					if (!old) {
					this.reflect.tabs[this.flag].className=classNames
					} else {
					this.reflect.tabs[this.flag].className=old+"_1"
					}
					this.reflect.currentNum = this.flag;
					this.blur();
					return false;
				}
			}
				
		}
	}
