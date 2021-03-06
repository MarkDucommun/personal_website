var height = window.innerHeight 
var width = window.innerWidth
var title = new Element('#title')
var subtitle = new Element('#subtitle')
var about = new Element('#about')
var projects = new Element('#projects')
var blogs = new Element('#blogs')
var resume = new Element('#resume')
var content = new Element('.content')
var banner = new Element('.banner')
var icons = new Element('[class^="icon-"]')

$(function(){
  resizeScreen()
  resizeScreen()
  about.show_element()

  $(window).resize(function(){
    resizeScreen()
  })
  
  $('#about').click(function(){
    about.show_element()
  })

  $('#projects').click(function(){
    projects.show_element()
  })

  $('#blogs').click(function(){
    blogs.show_element()
  })

  $('#resume').click(function(){
    resume.show_element()
  })

  $('#next').click(function(event){
    event.preventDefault();
    $('#frames').animate({"right": "100%"}, 1000, function(){ 
      $(this).append($('#frames li:first-child').remove()).css("right", 0)
    });
  });
  
  $('#previous').click(function(event){
    event.preventDefault();
    $('#frames').prepend($('#frames li:last-child').remove()).css("right", "100%").animate({"right" : 0}, 1000)
  })
})

function resizeScreen(){
  height = window.innerHeight
  width = window.innerWidth
  title.resize(0.09, 12)
  subtitle.resize(0.075, 10)
  about.resize(0.06, 10)
  projects.resize(0.06, 10)
  blogs.resize(0.06, 10)
  resume.resize(0.06, 10)
  content.resize(0.04, 10)
  banner.resize(0, 0)
  icons.resize(0.06)
}

function Element(tag){
  this.tag = $(tag)
  this.fontSize = 0
}

Element.prototype.resize = function(scale, min){
  this.setFontSize(scale, min)
  this.other()
}

Element.prototype.setFontSize = function(scale, min){
  var fontSize
  if(height < width){
    fontSize = (height * scale)
  }
  else{
    fontSize = (width * scale)
  }
  
  if(min != null && fontSize < min){
    $(this.tag.selector).css('font-size', min + 'px')
  }
  else{

    $(this.tag.selector).css('font-size', fontSize + 'px')
  }
}

Element.prototype.setWidth = function(){
  this.width = parseInt($(this.tag.selector).css('width'), 10)
}

Element.prototype.setHeight = function(){
  this.height = parseInt($(this.tag.selector).css('height'), 10)
}

Element.prototype.other = function(){
}

Element.prototype.show_element = function(){
  $('.words > *').hide();
  $(this.tag.selector + 'words').show()
}