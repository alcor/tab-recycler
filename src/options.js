function save_options() {
  var duplicates = document.getElementById('duplicates').checked;
  var newtab = document.getElementById('newtab').checked;
  chrome.storage.sync.set({
    duplicates: duplicates,
    newtab: newtab
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    duplicates: false,
    newtab: false
  }, function(items) {
    document.getElementById('duplicates').checked = items.duplicates;
    document.getElementById('newtab').checked = items.newtab;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);