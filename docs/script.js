

// ============================
// Rendering
// ============================
const app = document.getElementById('app');
const homeMarkup = app ? app.innerHTML : '';

function showHome() {
  window.location.hash = '';
  if (app) {
    app.innerHTML = homeMarkup;
  }
}

