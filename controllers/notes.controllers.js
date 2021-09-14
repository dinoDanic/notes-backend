import Note from "../modules/notes.modules.js";

export const createNote = async (req, res) => {
  const note = req.body;
  const newNote = new Note(note);
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error.message);
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    res.json({ message: "sucess dl" });
  } catch (error) {
    console.log(error);
  }
};
