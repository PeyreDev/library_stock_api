const express = require('express');
const router = express.Router();
const author_operation_query = require('./author_operation_query');

// Create author operation
router.post('/create', (req, res) => {
    const { date, comment, userId, authorId, operationTypeId } = req.body;

    if (!date || !comment || !userId || !authorId || !operationTypeId) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    author_operation_query.createAuthorOperation(
        date, comment, userId, authorId, operationTypeId,
        (error, result) => {
            if (error) {
              return res.status(400).json({ message: 'An error occured while creating the author operation -> ' + error });
            }
            return res.status(200).json(result);
        }
    );
});

// Update author operation
router.post('/update/:id', (req, res) => {
    const authorOperationId = req.params.id;
    const {date, comment} = req.body;
    author_operation_query.updateAuthorOperation(
        authorOperationId, date, comment,
        (error, result) => {
            if (error) {
                return res.status(400).json({ message: 'An error occured while updating the author operation -> ' + error });
            }
            return res.status(200).json(result);
        }
    );
});

// Get author operation by ID
router.get('/id/:id', (req, res) => {
    const authorOperationId = req.params.id;
    author_operation_query.getAuthorOperationById(authorOperationId, (error, result) => {
        if (error) {
            return res.status(400).json({ message: 'An error occurred while retrieving the author operation -> ' + error });
        }
        return res.status(200).json(result);
    });
})

module.exports = router;