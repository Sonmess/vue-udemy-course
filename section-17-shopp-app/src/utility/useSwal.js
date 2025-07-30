import Swal from 'sweetalert2'

export default {
  async showAlert(options) {
    await Swal.fire(options)
  },

  async showSuccess(message) {
    return await this.showAlert({
      title: 'Success',
      text: message,
      icon: 'success',
      position: 'top-end',
      timer: 1500,
    })
  },

  async showError(message) {
    return await this.showAlert({
      title: 'Error encountered',
      text: message,
      icon: 'error',
      position: 'top-end',
      timer: 1500,
      showConfirmButton: false,
    })
  },

  async showConfirm(message) {
    return await this.showAlert({
      title: 'Are you sure?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    })
  },
}
