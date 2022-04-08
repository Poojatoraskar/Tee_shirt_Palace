
// one and half row slider part

$('.stripes-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    nav:true,
  responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 0
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 300
        },
        1400:{
            items:1,
            stagePadding: 350
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
})


// two row slider part

$('.featuredpart-carousel').owlCarousel({
    loop:true,
    margin:10,
   autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
       
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// your idea part

var options = {
	imgSrc : "./assets/images/youridea.png",
	containerName : "placeholder",
	rows:3,
	columns:2,
	margin:2.5,
	animTime: 0.3
  }
  
  function ImageGrid(defaults)
  {
	var r = defaults.rows;
	var c = defaults.columns;
	var margin = defaults.margin;
	  
	var placeholder = document.getElementsByClassName(defaults.containerName)[0];
	var container = document.createElement('div');
	container.className = "gridContainer";
	placeholder.appendChild(container); 
	  
	var gridTile;  
  
	var w = (container.offsetWidth / c) -margin;
	var h = (container.offsetHeight / r) -margin;
	var arr = [];
	  
	for (var i=0, l=r*c; i < l; i++)
	{    
	  gridTile = document.createElement('div');
	  gridTile.className = "gridTile";
	  gridTile.style.backgroundImage = "url("+defaults.imgSrc+")";
	  
		 
	  arr = [(w+margin)*(i%c), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), ((h+margin)*Math.floor(i/c) + h-margin), (w+margin)*(i%c), ((h+margin)*Math.floor(i/c) + h-margin)];
		  
	 // console.log(i + " ====>>> " + arr + " ||||| " + i%c  + " |||||| " + i/c);  
	  
		  
	  TweenMax.set(gridTile, {webkitClipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)', clipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)'});
		 
	  container.appendChild(gridTile);    
	  
	  fixTilePosition(gridTile, i);
	}
	
	placeholder.addEventListener("mouseover", function(e){
	  var allTiles = e.currentTarget.querySelectorAll(".gridTile");
	  for (var t=0, le = allTiles.length; t < le; t++)
		{
		  TweenMax.to(allTiles[t], defaults.animTime, {css:{backgroundPosition:"0px 0px"}, ease:Power1.easeOut});
		}
	})
							   
	placeholder.addEventListener("mouseleave", function(e){
	  var allTiles = e.currentTarget.querySelectorAll(".gridTile");
	  for (var ti=0, len = allTiles.length; ti < len; ti++)
		{
		  fixTilePosition(allTiles[ti], ti, defaults.animTime);
		}
	})
	
	function fixTilePosition(tile, ind, time)
	{
	  if(time==null)time=0;
	  var centr, centrCol, centrRow, offsetW, offsetH, left, top;
	  
	  centr = Math.floor(c * r / 2);
	  centrCol = Math.ceil(centr/c);
	  centrRow = Math.ceil(centr/r);
		  
	  offsetW = w/centrCol;
	  offsetH = h/centrRow;
	  
	  left = (Math.round((ind % c - centrCol + 1) * offsetW));
	  top = (Math.round((Math.floor(ind/c) - centrRow + 1) * offsetH));
	  
	  //console.log(left, top)
	  
	  TweenMax.to(tile, time, {css:{backgroundPosition:left+"px "+top+"px"}, ease:Power1.easeOut});
	}
  }
  
  ImageGrid(options);


// try filde
// left to right slider
$('.quickbuy-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
})

// mobile slider part
$('.mobileslider-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
		500:{
			items:2,
			nav:false
		},
        600:{
            items:2,
            nav:false
        },
		700:{
			items:3,
			nav:false
		},
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})


$('.mobilebanner-carousel').owlCarousel({
    loop:true,
    margin:10,
   autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
