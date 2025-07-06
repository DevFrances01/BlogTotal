const noteInput = document.getElementById('noteInput');
const saveBtn = document.getElementById('saveNote');
const newNoteBtn = document.getElementById('newNoteBtn');
const sidebar = document.getElementById('sidebar');
const notesContainer = document.getElementById('notesContainer');

let editingNoteId = null;

// Mostrar barra lateral
newNoteBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
  noteInput.value = '';
  editingNoteId = null;
});

// Salvar nova anotação
saveBtn.addEventListener('click', () => {
  const text = noteInput.value.trim();
  if (text) {
    if (editingNoteId !== null) {
      updateNote(editingNoteId, text);
    } else {
      createNote(text);
    }
    sidebar.classList.remove('show');
    noteInput.value = '';
    editingNoteId = null;
  }
});

function createNote(text, pos = null) {
  const note = {
    id: Date.now(),
    text: text,
    x: pos?.x || Math.random() * (window.innerWidth - 200),
    y: pos?.y || Math.random() * (window.innerHeight - 150)
  };

  const notes = getNotes();
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

function getNotes() {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

function renderNotes() {
  notesContainer.innerHTML = '';
  const notes = getNotes();
  notes.forEach(note => {
    const div = document.createElement('div');
    div.className = 'note';
    div.style.left = `${note.x}px`;
    div.style.top = `${note.y}px`;
    div.innerHTML = `
      <button class="edit-btn" onclick="editNote(${note.id})">
        <i class="bi bi-pencil-fill"></i>
      </button>
      <button class="delete-btn" onclick="deleteNote(${note.id})">
        <i class="bi bi-trash-fill"></i>
      </button>
      <div>${note.text}</div>
    `;
    notesContainer.appendChild(div);
  });
}

function editNote(id) {
  const notes = getNotes();
  const note = notes.find(n => n.id === id);
  if (note) {
    noteInput.value = note.text;
    editingNoteId = id;
    sidebar.classList.add('show');
  }
}

function updateNote(id, newText) {
  const notes = getNotes().map(n =>
    n.id === id ? { ...n, text: newText } : n
  );
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

function deleteNote(id) {
  const notes = getNotes().filter(note => note.id !== id);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

// Inicializar
renderNotes();
