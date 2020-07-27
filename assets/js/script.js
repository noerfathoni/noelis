'use strict'

import '../css/tailwind.css'

class Http {
  static ajax(method, url, data, callback) {
    var xhttp = new XMLHttpRequest()
    let query = []

    for (let key in data) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    }

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.responseText)
      }
    }
  
    xhttp.open(method, url, true)
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhttp.send(query.join('&'))
  }
}

class Modal {
  static openModal(el, callback) {
    const modalOverlay = document.querySelector(el)
    modalOverlay.classList.remove('hidden')

    callback(modalOverlay)
  }

  static closeModal(el, callback) {
    const modalOverlay = document.querySelector(el)
    modalOverlay.classList.add('hidden')

    if (
      typeof callback !== undefined &&
      typeof callback === 'function'
    ) {
      callback(modalOverlay)
    }
  }
}

window.onload = function () {

  // Modal Add
  document.querySelector('.open-modal').addEventListener('click', function () {
    Modal.openModal('#agenda-action-modal', (el) => {

      const agendaBtn = el.querySelector('#submit-agenda');

      if (agendaBtn.classList.contains('btn-edit')) {
        agendaBtn.classList.remove('btn-edit')
      }

      document.querySelector('#agenda-title').value = ''
      document.querySelector('#agenda-description').value = ''
      document.querySelector('#agenda-time').value = ''
      el.querySelector('.modal-title').innerHTML = 'Tambah Agenda'
    })
  })

  // Modal Edit
  let openModalEdit = document.querySelectorAll('.open-modal-edit')

  for (let i = 0; i < openModalEdit.length; i++) {
    openModalEdit[i].addEventListener('click', function () {
      let id = this.getAttribute('data-id')

      Modal.openModal('#agenda-action-modal', (el) => {
        let postData = {
          id: id
        }
        
        el.querySelector('.modal-title').innerHTML = 'Edit Agenda'
        el.querySelector('#submit-agenda').classList.add('btn-edit')

        Http.ajax(
          'POST', 
          'http://localhost:5000/data-by-id', 
          postData,
          (result) => {
            let data = JSON.parse(result)
            document.querySelector('#agenda-id').value = data.id
            document.querySelector('#agenda-title').value = data.title
            document.querySelector('#agenda-description').value = data.description
            document.querySelector('#agenda-time').value = data.date
          }
        )
      })
    })
  }

  // Close Modal
  document.querySelector('.close-modal').addEventListener('click', function () {
    Modal.closeModal('#agenda-action-modal')
  })

  document.querySelector('#submit-agenda').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-edit')) {
      event.preventDefault()
      
      let data = {
        agenda_id: document.querySelector('#agenda-id').value,
        agenda_title: document.querySelector('#agenda-title').value,
        agenda_description: document.querySelector('#agenda-description').value,
        agenda_time: document.querySelector('#agenda-time').value
      }

      Http.ajax(
        'POST', 
        'http://localhost:5000/update-data', 
        data,
        (result) => {
          window.location.reload()
        }
      )
    }
  })
}