const express = require('express');
const router = express.Router();
const author_operation_query = require('./author_operation_query');

// Create author operation
router.post('/create', (req, res) => {
    const { date, comment, userId, authorId, operationTypeId } = req.body;

    if (!date || !comment || !userId || !authorId || !operationTypeId) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    author_operation_query.create_author_operation(
        date, comment, userId, authorId, operationTypeId,
        (error, result) => {
            if (error) {
              return res.status(400).json({ message: 'An error occured creating the author operation' });
            }
            return res.status(200).json(result);
        }
    );
});

// Update author operation
router.post('/update/:id', (req, res) => {
    const authorOperationId = req.params.id;
    const {date, comment} = req.body;
    author_operation_query.update_author_operation(
        authorOperationId, date, comment,
        (error, result) => {
            if (error) {
                return res.status(400).json({ message: 'An error occured updating the author operation' });
            }
            return res.status(200).json(result);
        }
    );
});

module.exports = router;