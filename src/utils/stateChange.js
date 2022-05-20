const changeState = (statePiece) => {
    return (changes, id) => {
        return statePiece.map(card => {
            if (card.id === id) {
                changes(card)
            }
            return card;
        })
    }
}

export default changeState;