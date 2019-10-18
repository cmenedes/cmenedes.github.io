class Modal {
  constructor() { 

    $('body').append(Modal.HTML);
    $('.col-sm-3').attr('data-toggle', 'modal')
    $('.col-sm-3').attr('data-target', '#myModal')

    $('.col-sm-3').each(function(i) {
      $(this).attr('id', parseInt(i))
    })
    var me = this
    $('.col-sm-3').on('click', function(e) {
      e.preventDefault()
      me.setModalContent(this.id)
    })
  }

  setModalContent(id) {
    let found = data.find(item => item.id === id)
    // find object by id and insert into modal
   
    this.title = found.title
    this.link = found.link
    this.tech = found.tech
    this.description = found.description
    this.img = found.img

    $('.modal-content').css('display', 'block');
    $('.modal-title').html($(`#${id}>p`).html())
    $('.modal-body #link>p').html($(`#${id}>a`).attr('href'))
    $('.modal-body #tech>p').html(this.tech)
    $('.modal-body #desc>p').html(this.description)
    $('.modal-body #img>p').html(this.description)
 
    for(let i = 0; i < this.img.length; i++) {
      let img = new Image(300,300)
      img.src = this.img[i]
      $('.modal-body #img').append(img)
    }

  }
}

Modal.HTML = 
'<div id="myModal" class="modal fade" role="dialog">' +
  '<div class="modal-dialog"></div>' +
'<div class="modal-content">' +
    '<div class="modal-header">' +
      '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
      '<h4 class="modal-title">Modal Header</h4>' +
    '</div>' +
    '<div class="modal-body">' +
      '<div id="desc">' +
        '<h4>Description</h4>' +
        '<p></p>' +
      '</div>' +
      '<div id="tech">' +
        '<h4>Tech Used</h4>' +
        '<p></p>' +
      '</div>' +
      '<div id="link">' +
        '<h4>Links</h4>' +
        '<p></p>' +
      '</div>' +
      '<div id="img">' +
        '<h4>Screenshots</h4>' +
      '</div>' +
    '</div>' +
    '<div class="modal-footer">' +
      '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
    '</div>' +
  '</div >';

  new Modal();