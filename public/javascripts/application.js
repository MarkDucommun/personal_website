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

$(function(){
  resizeScreen()
  resizeScreen()

  $(window).resize(function(){
    resizeScreen()
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
}

function Element(tag){
  this.tag = $(tag)
  this.fontSize = 0
  this.width = 0
  this.height = 0
  this.top = 0
  this.left = 0
}

Element.prototype.resize = function(scale, min){
  this.setFontSize(scale, min)
  this.other()
  this.setWidth()
  this.setHeight()
  this.setLeft()
  this.setTop()
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

title.setLeft = function(){
  this.left = (width - this.width) / 2
  $(this.tag.selector).css('left', this.left + 'px')
}

title.setTop = function(){
  this.top = height * 0.05
  $(this.tag.selector).css('top', this.top + 'px')
}

subtitle.setLeft = function(){
  this.left = (width - this.width) / 2
  $(this.tag.selector).css('left', this.left + 'px')
}

subtitle.setTop = function(){
  this.top = title.top + title.height + height * 0.02
  $(this.tag.selector).css('top', this.top + 'px')
}

about.setLeft = function(){
  this.left = width * 0.5 - width * 0.35
  $(this.tag.selector).css('left', this.left + 'px')
}

about.setTop = function(){
  this.top = 2
  $(this.tag.selector).css ('top', this.top + 'px')
}

about.tag.click(function(){
  $('.words').hide()
  $('#about-words').show()
})

projects.setLeft = function(){
  var margin = (width * 0.7 - this.width - about.width - blogs.width - resume.width) / 3
  this.left = about.left + about.width + margin
  $(this.tag.selector).css('left', this.left + 'px')
}

projects.setTop = function(){
  this.top = about.top
  $(this.tag.selector).css ('top', this.top + 'px')
}

blogs.setLeft = function(){
  var margin = (width * 0.7 - this.width - about.width - projects.width - resume.width) / 3
  this.left = projects.left + projects.width + margin
  $(this.tag.selector).css('left', this.left + 'px')
}

blogs.setTop = function(){
  this.top = about.top
  $(this.tag.selector).css ('top', this.top + 'px')
}

resume.setLeft = function(){
  this.left = width * 0.5 + width * 0.35 - this.width
  $(this.tag.selector).css('left', this.left + 'px')
}

resume.setTop = function(){
  this.top = about.top
  $(this.tag.selector).css ('top', this.top + 'px')
}

content.setLeft = function(){
  this.left = width * 0.15
  $(this.tag.selector).css('left', this.left + 'px')
}

content.setTop = function(){
  this.top = banner.top + banner.height + height * 0.05
  $(this.tag.selector).css ('top', this.top + 'px') 
}

content.other = function(){
  this.height =  height * 0.4
  $(this.tag.selector).css('height', + this.height + 'px')
  this.width = (width * 0.7) - 4
  $(this.tag.selector).css('width', this.width + 'px')
}

banner.setLeft = function(){
 
}

banner.setTop = function(){
  this.top = subtitle.top + subtitle.height + height * 0.02
  $(this.tag.selector).css('top', this.top + 'px')
}

banner.other = function(){
  this.height = about.height + 12
  $(this.tag.selector).css('height', this.height + 'px')
}