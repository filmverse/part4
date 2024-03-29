// require('dotenv').config()
// const express = require('express')
// const app = express()
// const Note = require('./models/note')
// const cors = require('cors')
// app.use(cors())
// app.use(express.static('build'))
// app.use(express.json())

const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')


app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})

// app.get('/', (request, response) => {
//     response.send('<h1>Hello World</h1>')
// })

// app.get('/api/notes', (request, response) => {
//     Note.find({}).then(notes => {
//         response.json(notes)
//     })
// })

// app.get('/api/notes/:id', (request, response, next) => {
//     Note.findById(request.params.id)
//         .then(note => {
//             if (note) {
//                 response.json(note)
//             } else {
//                 response.status(404).end()
//             }
//         })
//         .catch(error => next(error))
// })

// app.delete('/api/notes/:id', (request, response, next) => {
//     Note.findByIdAndRemove(request.params.id)
//         .then(() => {
//             response.status(204).end()
//         })
//         .catch(error => next(error))
// })

// // const generateId = () => {
// //     const maxId = notes.length > 0
// //         ? Math.max(...notes.map(note => note.id))
// //         : 0
// //     return maxId + 1
// // }

// // else if (Note.findOne({ content: body.content })) {
// //     console.log("Same Note")
// // }

// app.post('/api/notes', (request, response, next) => {
//     const body = request.body
//     if (!body.content) {
//         response.status(400).json({
//             error: 'content missing'
//         })
//     } else {
//         const note = new Note({
//             content: body.content,
//             important: body.important || false,
//         })
//         note.save()
//             .then(savedNote => {
//                 response.json(savedNote)
//             })
//             .catch(error => next(error))
//     }
// })

// app.put('/api/notes/:id', (request, response, next) => {
//     const body = request.body
//     const note = {
//         content: body.content,
//         important: body.important,
//     }
//     Note.findByIdAndUpdate(
//         request.params.id,
//         note,
//         { new: true, runValidators: true, context: 'query' }
//     )
//         .then(updatedNote => {
//             response.json(updatedNote)
//         })
//         .catch(error => next(error))
// })

// const unknownEndpoint = (request, response) => {
//     response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const errorHandler = (error, request, response, next) => {
//     console.error(error.message)
//     if (error.name === 'CastError') {
//         return response.status(400).send({ error: 'malformated id' })
//     } else if (error.name === 'ValidationError') {
//         response.status(400).json({ error: error.message })
//     }

//     next(error)
// }

// app.use(errorHandler)


// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })